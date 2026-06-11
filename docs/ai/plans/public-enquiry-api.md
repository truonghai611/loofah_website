# Public Enquiry API — Frontend Integration

Public endpoint cho form thu thập enquiry từ khách. Không cần auth. Dùng cho landing page / website công khai.

## Endpoint

```
POST /api/v1/public/enquiries
```

Headers:

| Header | Required | Mô tả |
|--------|----------|-------|
| `x-client-id` | ✅ | ObjectId của workspace nhận enquiry. Thiếu hoặc sai format → `400`. |
| `Content-Type` | ✅ | `application/json` |

- Chỉ chấp nhận `POST` + `OPTIONS` (CORS preflight).
- **Không còn dùng** query `?workspace=` — chuyển sang header `x-client-id`.

### CORS

Origin của site phải nằm trong `ENQUIRY_ALLOWED_ORIGINS` (server config, comma-separated). Origin lạ → request bị chặn bởi CORS. Dev default: `http://localhost:3000`. Preflight đã whitelist header `x-client-id` + `Content-Type`.

## Request body

| Field | Type | Required | Ràng buộc |
|-------|------|----------|-----------|
| `role` | enum | ✅ | `amazon_seller` \| `eco_shop` \| `distributor` \| `brand` |
| `targetMarket` | enum | ✅ | `US` \| `EU` \| `UK` \| `Canada` \| `Other` |
| `email` | string | ✅ | email hợp lệ, tự lowercase + trim |
| `interestedProducts` | string | ❌ | max 500 |
| `estOrderQty` | string | ❌ | max 100 |
| `needPrivateLabel` | enum | ❌ | `yes` \| `no` |
| `currentStage` | enum | ❌ | `researching` \| `comparing` \| `ready_to_order` \| `repeat_buyer` |
| `message` | string | ❌ | max 2000 |
| `captchaToken` | string | ❌* | bắt buộc nếu captcha bật trên server |
| `website` | string | ❌ | **honeypot** — để trống, không hiển thị cho user |

Field lạ bị Zod strip. Đừng gửi `_id`.

### Honeypot

`website` là field bẫy bot: ẩn bằng CSS, người thật không thấy nên luôn rỗng. Bot fill vào → server vẫn trả `{ "ok": true }` nhưng âm thầm đánh dấu `spam`. Frontend cứ render input ẩn:

```html
<input type="text" name="website" tabindex="-1" autocomplete="off"
       style="position:absolute;left:-9999px" aria-hidden="true" />
```

### Captcha

Khi server bật (`ENQUIRY_CAPTCHA_ENABLED=true`), thiếu `captchaToken` → `400 CAPTCHA_REQUIRED`. Provider: Turnstile (default) hoặc reCAPTCHA. Lấy token client-side rồi nhét vào `captchaToken`.

## Response

### Thành công — `200`

```json
{ "ok": true, "id": "665f1c2a8b3e4a0012ab34cd" }
```

Honeypot trip cũng trả `{ "ok": true }` (không có `id`) — đừng dựa vào đó để phân biệt.

### Lỗi — format chung

```json
{ "error": { "code": "RATE_LIMITED", "message": "Too many requests" } }
```

| HTTP | code | Khi nào |
|------|------|---------|
| 400 | `CLIENT_ID_REQUIRED` | thiếu header `x-client-id` |
| 400 | `CLIENT_ID_INVALID` | `x-client-id` sai format **hoặc** workspace không tồn tại |
| 400 | (Zod) | body không pass validation |
| 400 | `CAPTCHA_REQUIRED` | captcha bật nhưng thiếu token |
| 400 | `CAPTCHA_FAILED` | captcha verify fail |
| 429 | `RATE_LIMITED` | quá giới hạn (xem dưới) |

## Rate limit

Hai tầng:

1. **Theo IP** (`enquiryRateLimit`): default 5 request / 15 phút. Trả header chuẩn `RateLimit-*`.
2. **Theo email** (trong service): default 3 submit / 1 giờ cho cùng email → `429 RATE_LIMITED`.

Frontend nên hiện thông báo "Bạn gửi quá nhiều, thử lại sau" khi gặp `429`.

## Ví dụ — fetch

```ts
async function submitEnquiry(workspaceId: string, data: EnquiryForm) {
  const res = await fetch(
    `${API_BASE}/api/v1/public/enquiries`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': workspaceId,
      },
      body: JSON.stringify({
        role: data.role,
        targetMarket: data.targetMarket,
        email: data.email,
        interestedProducts: data.interestedProducts,
        estOrderQty: data.estOrderQty,
        needPrivateLabel: data.needPrivateLabel,
        currentStage: data.currentStage,
        message: data.message,
        captchaToken: data.captchaToken, // nếu bật captcha
        website: data.website,           // honeypot, luôn ''
      }),
    },
  );

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.error?.code ?? 'UNKNOWN');
  }
  return json; // { ok: true, id }
}
```

## Zod schema (FE, mirror server)

```ts
import { z } from 'zod';

export const enquiryFormSchema = z.object({
  role: z.enum(['amazon_seller', 'eco_shop', 'distributor', 'brand']),
  targetMarket: z.enum(['US', 'EU', 'UK', 'Canada', 'Other']),
  email: z.string().email(),
  interestedProducts: z.string().max(500).optional(),
  estOrderQty: z.string().max(100).optional(),
  needPrivateLabel: z.enum(['yes', 'no']).optional(),
  currentStage: z
    .enum(['researching', 'comparing', 'ready_to_order', 'repeat_buyer'])
    .optional(),
  message: z.string().max(2000).optional(),
  captchaToken: z.string().optional(),
  website: z.string().optional(), // honeypot
});
```

## Lưu ý

- Endpoint công khai: đừng gửi token/secret nào.
- `id` trả về chỉ để tham chiếu; admin xử lý enquiry qua API có auth (`GET /api/v1/enquiries`).
- Server tự lưu `ip`, `userAgent`, `referer` từ header — FE không cần gửi.
