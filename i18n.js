// i18n.js — English ⇄ Vietnamese toggle for the Loofah landing page.
// Snapshots the English DOM text on load, then swaps each fragment to Vietnamese
// (and back) via the dictionary below. Matching is whitespace- and quote-normalized
// so curly quotes / entities don't break lookups.
(function () {
  // normalized-English  ->  Vietnamese
  var DICT = {
    // ---- header / nav ----
    "For Amazon Sellers": "Cho người bán Amazon",
    "For Eco Shops": "Cho cửa hàng eco",
    "Products": "Sản phẩm",
    "Private Label": "Nhãn riêng",
    "Quality": "Chất lượng",
    "Wholesale Catalog": "Catalog sỉ",
    "Get Sample Kit": "Nhận bộ mẫu",
    "Journal": "Nhật ký",
    "Field Journal": "Nhật ký nông trại",
    "Amazon Sellers": "Người bán Amazon",
    "Eco Shops": "Cửa hàng eco",

    // ---- field journal (blog) ----
    "The Loofah Journal": "Nhật ký Xơ Mướp",
    "Notes from the": "Ghi chép từ",
    "loofah field": "ruộng xơ mướp",
    "Stories from our farm in Vietnam — how natural loofah grows, how it is harvested and finished, how to care for it, and what a plastic-free routine actually looks like.":
      "Câu chuyện từ nông trại của chúng tôi tại Việt Nam — xơ mướp tự nhiên lớn lên thế nào, được thu hoạch và hoàn thiện ra sao, cách chăm sóc, và một thói quen không nhựa thực sự trông như thế nào.",
    "Download Wholesale Catalog": "Tải catalog sỉ",

    // ---- hero floats ----
    "Bath sponge": "Bông tắm",
    "Kitchen scrubber": "Miếng rửa chén",
    "Soap saver": "Túi xà phòng",
    "100% plant fiber": "100% sợi thực vật",
    "Plastic-free by nature": "Không nhựa, từ tự nhiên",
    "Small MOQ": "MOQ thấp",
    "Test orders welcome": "Nhận đơn dùng thử",
    "Export-ready": "Sẵn sàng xuất khẩu",
    "Spec sheets & docs": "Spec sheet & hồ sơ",

    // ---- hero center ----
    "Private label · Made in Vietnam": "Nhãn riêng · Sản xuất tại Việt Nam",
    "Launch your natural": "Ra mắt dòng",
    "loofah line": "xơ mướp tự nhiên",
    "without starting from zero": "của bạn mà không bắt đầu từ con số 0",
    "Export-ready natural loofah sponges for Amazon sellers and eco retailers — with private-label packaging, sample kits, wholesale support, and content assets to help you test fast.":
      "Bông xơ mướp tự nhiên sẵn sàng xuất khẩu cho người bán Amazon và nhà bán lẻ eco — kèm bao bì nhãn riêng, bộ mẫu, hỗ trợ bán sỉ và tài liệu nội dung giúp bạn thử nghiệm nhanh.",
    "No container commitment — start with a small test order":
      "Không cần cam kết nguyên container — bắt đầu bằng đơn dùng thử nhỏ",

    // ---- trust ----
    "Natural plant fiber": "Sợi thực vật tự nhiên",
    "Made from dried loofah plant — a plastic-free alternative to synthetic sponges.":
      "Làm từ quả mướp khô — giải pháp không nhựa thay cho bông tắm tổng hợp.",
    "Private-label ready": "Sẵn sàng nhãn riêng",
    "Kraft sleeves, cotton bags, hang tags, barcode labels and FBA carton support.":
      "Bao giấy kraft, túi cotton, thẻ treo, nhãn mã vạch và hỗ trợ thùng carton FBA.",
    "Small MOQ to test": "MOQ thấp để thử",
    "Validate sell-through with a low-risk first order before you scale.":
      "Kiểm chứng sức bán bằng đơn đầu tiên ít rủi ro trước khi mở rộng.",
    "US / EU export support": "Hỗ trợ xuất khẩu US / EU",
    "Spec sheets, material declarations, packing lists and QC photos before shipment.":
      "Spec sheet, khai báo vật liệu, packing list và ảnh QC trước khi giao hàng.",

    // ---- showcase ----
    "More than a sponge": "Hơn cả một miếng bông",
    "A finished offer, not a raw commodity": "Một sản phẩm hoàn chỉnh, không phải hàng thô",
    "If you only sell \"loofah sponge,\" you get compared on price with factories in China and India. We package the whole thing into a product line you can brand, bundle, ship, explain — and reorder.":
      "Nếu bạn chỉ bán \"miếng xơ mướp\", bạn sẽ bị so giá với các xưởng ở Trung Quốc và Ấn Độ. Chúng tôi đóng gói thành một dòng sản phẩm bạn có thể gắn thương hiệu, bundle, vận chuyển, giải thích — và đặt lại.",
    "Brandable & photo-friendly.": "Dễ gắn thương hiệu & lên ảnh đẹp.",
    "Lightweight, easy to bundle, simple for customers to understand.":
      "Nhẹ, dễ bundle, đơn giản để khách hàng hiểu.",
    "Many variations from one fiber.": "Nhiều biến thể từ một loại sợi.",
    "Size, shape, compressed/uncompressed, sets of 3/6/10, with soap, with cotton bag.":
      "Kích cỡ, hình dạng, nén/không nén, bộ 3/6/10, kèm xà phòng, kèm túi cotton.",
    "Evidence to sell again.": "Bằng chứng để bán lại.",
    "Material story, usage cards and clear specs your end-customers actually trust.":
      "Câu chuyện vật liệu, thẻ hướng dẫn và thông số rõ ràng mà khách hàng cuối thật sự tin tưởng.",
    "Healthy margin": "Biên lợi nhuận tốt",
    "brandable bundles": "bundle gắn thương hiệu",
    "Sample → Test": "Mẫu → Thử",
    "before you commit": "trước khi cam kết",
    "QC documented": "QC có hồ sơ",
    "photos + specs": "ảnh + thông số",

    // ---- amazon ----
    "A low-risk eco SKU you can actually launch": "Một SKU eco ít rủi ro bạn thật sự có thể ra mắt",
    "\"You don't need another random product. You need one that's lightweight, easy to bundle, brandable, photo-friendly, and simple enough for customers to understand.\"":
      "\"Bạn không cần thêm một sản phẩm ngẫu nhiên. Bạn cần một sản phẩm nhẹ, dễ bundle, gắn thương hiệu được, lên ảnh đẹp và đủ đơn giản để khách hàng hiểu.\"",
    "Light & easy to ship": "Nhẹ & dễ vận chuyển",
    "— friendly for FBA cartons and packaging.": "— phù hợp với thùng carton FBA và đóng gói.",
    "Easy to bundle": "Dễ bundle",
    "— body sponge, kitchen scrubber, soap pouch, gift set.":
      "— bông tắm, miếng rửa chén, túi xà phòng, set quà tặng.",
    "On-trend": "Đúng xu hướng",
    "— fits the shift away from plastic in bath & kitchen.":
      "— bắt kịp xu hướng thay thế nhựa trong phòng tắm & nhà bếp.",
    "Variation-rich": "Nhiều biến thể",
    "— sizes, sets, compressed, with soap, with cotton bag.":
      "— kích cỡ, bộ, dạng nén, kèm xà phòng, kèm túi cotton.",
    "We provide spec sheets, packaging details, material declarations and shipment documentation support. Final marketplace compliance should be reviewed by your compliance advisor or Amazon account team.":
      "Chúng tôi cung cấp spec sheet, chi tiết đóng gói, khai báo vật liệu và hỗ trợ hồ sơ chứng từ giao hàng. Việc tuân thủ cuối cùng trên sàn nên được rà soát bởi cố vấn tuân thủ hoặc đội ngũ tài khoản Amazon của bạn.",
    "Amazon Loofah Launch Kit": "Bộ Khởi Chạy Loofah cho Amazon",
    "Everything to evaluate the product before you order": "Mọi thứ để đánh giá sản phẩm trước khi đặt hàng",
    "Product samples": "Mẫu sản phẩm",
    "Size & bundle recommendations": "Gợi ý kích cỡ & bundle",
    "Packaging options": "Tùy chọn bao bì",
    "Product photo guidelines": "Hướng dẫn chụp ảnh sản phẩm",
    "Suggested listing angles": "Gợi ý góc listing",
    "Keyword & topic ideas": "Ý tưởng từ khóa & chủ đề",
    "Carton specs": "Thông số carton",
    "MOQ test-order plan": "Kế hoạch đơn thử theo MOQ",
    "Evaluate before you buy": "Đánh giá trước khi mua",
    "Request the Launch Kit": "Yêu cầu Bộ Khởi Chạy",

    // ---- eco ----
    "For Eco Shops & Zero-Waste Retailers": "Cho cửa hàng eco & nhà bán lẻ zero-waste",
    "Loofah your customers understand, trust & reorder": "Loofah mà khách của bạn hiểu, tin & đặt lại",
    "\"Your customers ask where products come from, what they're made of, and whether the 'eco' claim is real. We help you answer — with clear product info, a natural-material story and retail-ready packaging.\"":
      "\"Khách của bạn hỏi sản phẩm đến từ đâu, làm từ gì, và liệu cam kết 'eco' có thật không. Chúng tôi giúp bạn trả lời — bằng thông tin sản phẩm rõ ràng, câu chuyện vật liệu tự nhiên và bao bì sẵn sàng lên kệ.\"",
    "Retail-ready packaging": "Bao bì sẵn sàng lên kệ",
    "— shelf-friendly, honest, beautiful.": "— hợp kệ trưng bày, trung thực, đẹp.",
    "Merchandising support": "Hỗ trợ trưng bày",
    "— shelf display ideas, \"how to use & dry\" cards, FAQ.":
      "— ý tưởng trưng bày kệ, thẻ \"cách dùng & phơi khô\", FAQ.",
    "Small wholesale boxes": "Hộp sỉ nhỏ",
    "— 50 / 100 / 300 mixed SKU starter packs.": "— gói khởi đầu 50 / 100 / 300 SKU trộn.",
    "Reorder when it sells": "Đặt lại khi bán chạy",
    "— designed so you don't die on inventory.": "— thiết kế để bạn không chết vì tồn kho.",
    "Request the Starter Box": "Yêu cầu Hộp Khởi Đầu",
    "See collections": "Xem bộ sưu tập",

    // ---- collections ----
    "Product Collections": "Bộ sưu tập sản phẩm",
    "One natural fiber, a whole product line": "Một loại sợi tự nhiên, cả một dòng sản phẩm",
    "Eight ready-to-private-label SKUs across bathroom, body care and kitchen — each made from natural loofah fiber, with size options and SKUs ready for your catalog or listing.":
      "Tám SKU sẵn sàng làm nhãn riêng cho phòng tắm, chăm sóc cơ thể và nhà bếp — đều làm từ sợi xơ mướp tự nhiên, có tùy chọn kích cỡ và mã SKU sẵn cho catalog hoặc listing của bạn.",
    "Bathroom": "Phòng tắm",
    "Body Care": "Chăm sóc cơ thể",
    "Kitchen": "Nhà bếp",
    "Loofah Bath Glove": "Găng tắm xơ mướp",
    "Daily exfoliating glove for soft, clean skin — secure grip, rich lather and a hanging loop for quick drying.":
      "Găng tẩy tế bào chết hằng ngày cho làn da sạch mềm — ôm tay chắc, tạo bọt tốt và có vòng treo để khô nhanh.",
    "Sizes S / L": "Cỡ S / L",
    "Loofah + fabric": "Xơ mướp + vải",
    "Loofah Bath Sponge — Droplet": "Bông tắm xơ mướp — Giọt nước",
    "Palm-friendly droplet sponge that cleanses and exfoliates at once, softening when wet for comfortable everyday use.":
      "Miếng bông hình giọt nước vừa lòng bàn tay, vừa làm sạch vừa tẩy tế bào chết, mềm ra khi thấm nước để dùng thoải mái mỗi ngày.",
    "Loofah + binding": "Xơ mướp + viền",
    "Oval Exfoliating Scrubber": "Miếng chà tẩy da chết hình bầu dục",
    "Compact hand-held oval with an elastic strap for targeted exfoliation of arms, legs and shoulders.":
      "Miếng cầm tay hình bầu dục nhỏ gọn với dây thun, tẩy tế bào chết tập trung cho tay, chân và vai.",
    "Back Scrubber Belt": "Dây chà lưng",
    "Wide loofah belt with hand loops to reach the back, shoulders and waist for even, controlled exfoliation.":
      "Dây xơ mướp bản rộng với quai cầm để chà lưng, vai và eo, tẩy tế bào chết đều và dễ kiểm soát.",
    "Wooden Handle Heel Brush": "Bàn chải gót chân cán gỗ",
    "Wooden-handle loofah brush built for heels and rough spots, with a hanging cord for easy storage.":
      "Bàn chải xơ mướp cán gỗ chuyên cho gót chân và vùng da thô, có dây treo dễ cất giữ.",
    "Foot care": "Chăm sóc bàn chân",
    "Wooden Handle Back Brush": "Bàn chải lưng cán gỗ",
    "Long natural-loofah back scrubber on a wooden handle for deep cleansing across the back, shoulders, arms and legs — the flagship body-care SKU.":
      "Bàn chải lưng xơ mướp tự nhiên cán gỗ dài, làm sạch sâu vùng lưng, vai, tay và chân — SKU chủ lực dòng chăm sóc cơ thể.",
    "Wooden handle + loofah": "Cán gỗ + xơ mướp",
    "Hanging cord": "Dây treo",
    "Teardrop Dish Sponge": "Miếng rửa chén hình giọt nước",
    "Natural loofah dish sponge that lifts grease without scratching — quick-drying, breathable and a plastic-free swap for synthetic sponges.":
      "Miếng rửa chén xơ mướp tự nhiên đánh bay dầu mỡ mà không trầy xước — khô nhanh, thoáng khí và thay thế không nhựa cho bông tổng hợp.",
    "Sizes S / M": "Cỡ S / M",
    "Loofah + hanging cord": "Xơ mướp + dây treo",
    "Rectangular Dish Sponge": "Miếng rửa chén hình chữ nhật",
    "Classic rectangular loofah scrubber for everyday dishwashing — eco-friendly, fast-drying and bacteria-resistant.":
      "Miếng chà xơ mướp hình chữ nhật cổ điển cho việc rửa chén hằng ngày — thân thiện môi trường, khô nhanh và kháng khuẩn.",

    // ---- private label ----
    "Private Label & Packaging": "Nhãn riêng & Bao bì",
    "From raw loofah to shelf-ready product": "Từ xơ mướp thô đến sản phẩm sẵn sàng lên kệ",
    "The same piece of loofah is a commodity when it's sold loose — and a retail product once it has a set, a label, a usage card and a bundle. This is where perceived value is built.":
      "Cùng một miếng xơ mướp là hàng thô khi bán rời — và là sản phẩm bán lẻ khi có set, nhãn, thẻ hướng dẫn và bundle. Đây là nơi giá trị cảm nhận được tạo ra.",
    "Raw commodity": "Hàng thô",
    "Shelf-ready SKU": "SKU sẵn lên kệ",
    "Retail price": "Giá bán lẻ",
    "Kraft sleeve & box": "Bao & hộp giấy kraft",
    "Recyclable paper packaging with your branding.": "Bao bì giấy tái chế in thương hiệu của bạn.",
    "Cotton bag & hang tag": "Túi cotton & thẻ treo",
    "Natural-feel retail presentation.": "Trình bày bán lẻ cảm giác tự nhiên.",
    "Custom barcode label": "Nhãn mã vạch tùy chỉnh",
    "Retail & marketplace-ready labeling.": "Nhãn sẵn cho bán lẻ & sàn TMĐT.",
    "FBA carton labeling": "Dán nhãn thùng FBA",
    "Inner & master carton support for Amazon.": "Hỗ trợ thùng con & thùng cái cho Amazon.",

    // ---- quality ----
    "Quality, Sourcing & Export Readiness": "Chất lượng, Nguồn cung & Sẵn sàng xuất khẩu",
    "We tackle the biggest fear: natural isn't always even": "Chúng tôi xử lý nỗi lo lớn nhất: hàng tự nhiên không phải lúc nào cũng đều",
    "Loofah is a natural material — our job is to sort, grade, cut, pack and communicate specs clearly before production, then document it all before your shipment leaves.":
      "Xơ mướp là vật liệu tự nhiên — việc của chúng tôi là phân loại, chọn cỡ, cắt, đóng gói và truyền đạt thông số rõ ràng trước khi sản xuất, rồi ghi lại đầy đủ trước khi lô hàng của bạn rời kho.",
    "Harvest": "Thu hoạch",
    "Drying": "Phơi khô",
    "Cleaning": "Làm sạch",
    "Cutting": "Cắt",
    "Sorting": "Phân loại",
    "Inspection": "Kiểm tra",
    "Packing": "Đóng gói",
    "Ship + docs": "Giao + chứng từ",
    "QC criteria, checked before shipment": "Tiêu chí QC, kiểm trước khi giao",
    "Size tolerance": "Dung sai kích cỡ",
    "Moisture / dryness": "Độ ẩm / độ khô",
    "Color range": "Dải màu",
    "Odor": "Mùi",
    "Mold check": "Kiểm tra mốc",
    "Broken pieces": "Mảnh vỡ",
    "Packaging inspection": "Kiểm tra bao bì",
    "Random photo / video": "Ảnh / video ngẫu nhiên",
    "Export documentation support": "Hỗ trợ chứng từ xuất khẩu",
    "Commercial invoice & packing list": "Hóa đơn thương mại & packing list",
    "Product specification & material declaration": "Thông số sản phẩm & khai báo vật liệu",
    "Certificate of origin (where available)": "Giấy chứng nhận xuất xứ (nếu có)",
    "Phytosanitary docs where the market requires": "Chứng từ kiểm dịch thực vật khi thị trường yêu cầu",
    "Plant-import rules vary by commodity and origin. We support the paperwork we control — buyers should confirm requirements with their customs broker or APHIS.":
      "Quy định nhập khẩu thực vật khác nhau theo mặt hàng và xuất xứ. Chúng tôi hỗ trợ phần hồ sơ trong tầm kiểm soát — người mua nên xác nhận yêu cầu với đơn vị khai báo hải quan hoặc APHIS.",
    "Proof from past shipments": "Bằng chứng từ các lô hàng đã thực hiện",
    "Real photos and documents from orders we've produced and exported.":
      "Ảnh thật và chứng từ từ các đơn hàng chúng tôi đã sản xuất và xuất khẩu.",
    "Trusted by eco sellers & natural-product brands worldwide":
      "Được tin dùng bởi các nhà bán hàng eco & thương hiệu sản phẩm tự nhiên trên toàn thế giới",
    "Years exporting natural products from Vietnam": "Năm xuất khẩu sản phẩm tự nhiên từ Việt Nam",
    "Countries exported": "Quốc gia đã xuất khẩu",
    "Satisfied clients": "Khách hàng hài lòng",
    "OEM/ ODM experience": "Kinh nghiệm OEM/ ODM",
    "QC inspection": "Kiểm tra QC",
    "Packing & cartons": "Đóng gói & thùng carton",
    "Export documents": "Chứng từ xuất khẩu",
    "Shipment & loading": "Giao hàng & đóng container",

    // ---- how it works ----
    "How it works": "Cách thức hoạt động",
    "Start small. Test the product. Reorder what sells.": "Bắt đầu nhỏ. Thử sản phẩm. Đặt lại thứ bán chạy.",
    "You don't want to \"order a container.\" You want one safe step at a time — so the path is built that way.":
      "Bạn không muốn \"đặt nguyên container\". Bạn muốn từng bước an toàn một — và lộ trình được xây dựng đúng như vậy.",
    "Tell us your market": "Cho biết thị trường của bạn",
    "Amazon US, Amazon EU, eco shop, distributor or gift brand.": "Amazon US, Amazon EU, cửa hàng eco, nhà phân phối hoặc thương hiệu quà tặng.",
    "Choose a format": "Chọn định dạng",
    "Bath, kitchen, soap saver, gift set or a mixed box.": "Phòng tắm, nhà bếp, túi xà phòng, set quà hoặc hộp trộn.",
    "Receive your sample kit": "Nhận bộ mẫu",
    "Test texture, size, packaging and customer fit in hand.": "Cảm nhận chất liệu, kích cỡ, bao bì và độ phù hợp tận tay.",
    "Confirm packaging & MOQ": "Xác nhận bao bì & MOQ",
    "Private label, barcode, carton and shipping method.": "Nhãn riêng, mã vạch, carton và phương thức vận chuyển.",
    "Production & QC update": "Cập nhật sản xuất & QC",
    "Photo / video of your goods before they ship.": "Ảnh / video hàng của bạn trước khi giao.",
    "Ship & reorder": "Giao hàng & đặt lại",
    "Start small, measure sell-through, reorder your best SKUs.": "Bắt đầu nhỏ, đo sức bán, đặt lại các SKU tốt nhất.",

    // ---- sample kit band ----
    "The first step": "Bước đầu tiên",
    "Start with a Loofah Sample Kit": "Bắt đầu với Bộ Mẫu Loofah",
    "A complete, low-risk way to evaluate the product before you order — texture, size, packaging and customer fit, in your hands.":
      "Cách hoàn chỉnh, ít rủi ro để đánh giá sản phẩm trước khi đặt hàng — chất liệu, kích cỡ, bao bì và độ phù hợp, ngay trong tay bạn.",
    "Talk to us": "Liên hệ với chúng tôi",
    "Basic Sample Kit": "Bộ Mẫu Cơ Bản",
    "For first-time buyers testing the product itself.": "Cho người mua lần đầu muốn thử chính sản phẩm.",
    "6–10 product samples": "6–10 mẫu sản phẩm",
    "Size chart & wholesale price range": "Bảng kích cỡ & khoảng giá sỉ",
    "MOQ options & basic content sheet": "Tùy chọn MOQ & bảng nội dung cơ bản",
    "Private Label Starter Kit": "Bộ Khởi Đầu Nhãn Riêng",
    "Most useful": "Hữu ích nhất",
    "For sellers ready to brand and launch fast.": "Cho người bán sẵn sàng gắn thương hiệu và ra mắt nhanh.",
    "Everything in Basic, plus packaging mockups": "Mọi thứ trong gói Cơ Bản, kèm mockup bao bì",
    "Suggested Amazon bundles & eco-shop display": "Gợi ý bundle Amazon & trưng bày cửa hàng eco",
    "2–3 packaging options to choose from": "2–3 tùy chọn bao bì để lựa chọn",

    // ---- rfq ----
    "I am a…": "Tôi là…",
    "Amazon seller": "Người bán Amazon",
    "Eco shop": "Cửa hàng eco",
    "Distributor": "Nhà phân phối",
    "Brand": "Thương hiệu",
    "Target market": "Thị trường mục tiêu",
    "Other": "Khác",
    "Interested products": "Sản phẩm quan tâm",
    "Est. order quantity": "Số lượng dự kiến",
    "Need private label?": "Cần nhãn riêng?",
    "Yes": "Có",
    "No": "Không",
    "Not sure yet": "Chưa chắc",
    "Current stage": "Giai đoạn hiện tại",
    "Researching": "Đang tìm hiểu",
    "Ready to sample": "Sẵn sàng lấy mẫu",
    "Ready to order": "Sẵn sàng đặt hàng",
    "Email": "Email",
    "Message": "Lời nhắn",
    "Request Catalog & Sample Quote": "Yêu cầu Catalog & Báo giá mẫu",
    "Thanks — we'll be in touch": "Cảm ơn — chúng tôi sẽ liên hệ",
    "We'll send our wholesale catalog and sample-kit options. Reply with your target market and preferred format so we can suggest the best test order.":
      "Chúng tôi sẽ gửi catalog sỉ và các tùy chọn bộ mẫu. Hãy trả lời kèm thị trường mục tiêu và định dạng ưa thích để chúng tôi gợi ý đơn thử phù hợp nhất.",
    "Request a quote": "Yêu cầu báo giá",
    "One light step — no container required": "Một bước nhẹ nhàng — không cần nguyên container",
    "New buyers don't need to commit. See samples before ordering, confirm packaging before production, and receive QC photos before shipment.":
      "Người mua mới không cần cam kết. Xem mẫu trước khi đặt, xác nhận bao bì trước khi sản xuất, và nhận ảnh QC trước khi giao hàng.",
    "See samples before ordering": "Xem mẫu trước khi đặt",
    "Evaluate the real product in hand first.": "Đánh giá sản phẩm thật tận tay trước.",
    "Confirm packaging before production": "Xác nhận bao bì trước khi sản xuất",
    "Lock label, barcode and carton specs upfront.": "Chốt nhãn, mã vạch và thông số carton từ đầu.",
    "QC photos before shipment": "Ảnh QC trước khi giao",
    "No quality surprises when your goods arrive.": "Không bất ngờ về chất lượng khi hàng đến.",
    "Stay one step ahead": "Luôn đi trước một bước",
    "Bundle ideas, packaging guides and launch checklists for Amazon sellers and eco retailers. No spam.":
      "Ý tưởng bundle, hướng dẫn bao bì và checklist ra mắt cho người bán Amazon và nhà bán lẻ eco. Không spam.",
    "Join the list": "Đăng ký",

    // ---- footer ----
    "Explore": "Khám phá",
    "Sample Kit": "Bộ mẫu",
    "Request a Quote": "Yêu cầu báo giá",
    "Get in Touch": "Liên hệ",
    "Follow us for product updates and new collections": "Theo dõi chúng tôi để cập nhật sản phẩm và bộ sưu tập mới",
    "© 2026 loofahvn.com — Made from natural loofah plant fiber in Vietnam.":
      "© 2026 loofahvn.com — Làm từ sợi xơ mướp tự nhiên tại Việt Nam.",

    // ---- v2: nav additions ----
    "Why Us": "Vì sao chọn chúng tôi",
    "Wholesale": "Bán sỉ",

    // ---- v2: hero ----
    "Vine-dried 7–9 months · Made in Vietnam": "Khô trên giàn 7–9 tháng · Sản xuất tại Việt Nam",
    "Launch a natural": "Ra mắt dòng",
    "that survives the ocean — and your reviews": "xơ mướp tự nhiên trụ vững qua đường biển — và qua review của bạn",
    "Our loofah is left to dry naturally on the vine for 7–9 months and harvested only once fully matured — so it ships denser, holds up longer, and resists the mold and inconsistency that trigger 1-star reviews. Private-label packaging, sample kits and ready-to-use content included.":
      "Xơ mướp của chúng tôi được để khô tự nhiên ngay trên giàn trong 7–9 tháng và chỉ thu hoạch khi đã chín hẳn — nhờ vậy hàng đặc hơn, bền hơn, và chống được mốc cùng sự thiếu đồng đều vốn gây ra review 1 sao. Kèm bao bì nhãn riêng, bộ mẫu và tài liệu nội dung sẵn dùng.",

    // ---- v2: trust badges ----
    "Vine-dried 7–9 months": "Khô trên giàn 7–9 tháng",
    "Our loofah is left to dry naturally on the vine for 7–9 months and harvested only once fully matured":
      "Xơ mướp được phơi khô tự nhiên ngay trên giàn trong 7–9 tháng và chỉ thu hoạch khi đã chín hoàn toàn.",
    "Ships mold-checked & QC-documented": "Giao hàng đã kiểm mốc & có hồ sơ QC",
    "Moisture-controlled and inspected before shipment — no \"ocean surprise\" on arrival.":
      "Kiểm soát độ ẩm và kiểm tra trước khi giao — không còn \"bất ngờ sau đường biển\" khi hàng đến.",

    // ---- v2: why our fibre ----
    "Why our fibre": "Vì sao chọn sợi của chúng tôi",
    "The fibre is the whole game": "Sợi mới là yếu tố quyết định tất cả",
    "Most loofah problems — mold, breakage, uneven texture, 1-star reviews — start with young, under-dried fibre. Ours is left to mature and dry naturally on the vine for 7–9 months, and harvested only once it has fully dried in place.":
      "Hầu hết vấn đề của xơ mướp — mốc, gãy, kết cấu không đều, review 1 sao — đều bắt đầu từ sợi non, chưa khô tới. Sợi của chúng tôi được để chín và khô tự nhiên trên giàn trong 7–9 tháng, và chỉ thu hoạch khi đã khô hẳn ngay tại chỗ.",
    "Consistency you can forecast": "Độ ổn định có thể dự báo",
    "Graded and QC'd so lot #2 matches lot #1 — fewer surprises when you reorder at scale.":
      "Được chọn cỡ và QC để lô #2 khớp lô #1 — ít bất ngờ khi bạn đặt lại số lượng lớn.",
    "Mold- & odor-resistant in transit": "Chống mốc & mùi khi vận chuyển",
    "Fully matured on the vine, then moisture-controlled and mold-checked before shipment — built to hold up across a 30-day ocean leg.":
      "Chín hẳn trên giàn, rồi kiểm soát độ ẩm và kiểm mốc trước khi giao — đủ bền cho chặng đường biển 30 ngày.",
    "Durability = value": "Độ bền = giá trị",
    "Built to outlast cheap synthetic sponges — the #1 reason US shoppers now choose sustainable.":
      "Bền hơn bông tổng hợp giá rẻ — lý do số 1 khiến người mua Mỹ nay chọn sản phẩm bền vững.",

    // ---- v2: amazon ----
    "\"On Amazon, you don't lose on ads first — you lose on returns, removals and mold complaints. A natural product that fails quietly destroys your ranking.\"":
      "\"Trên Amazon, bạn không mất tiền vì quảng cáo trước — bạn mất vì hàng trả, gỡ listing và khiếu nại mốc. Một sản phẩm tự nhiên hỏng âm thầm sẽ phá nát thứ hạng của bạn.\"",
    "Vine-dried mature fibre": "Sợi đã chín, khô trên giàn",
    "— fewer failure-driven returns & removals.": "— ít hàng trả & gỡ listing do lỗi sản phẩm.",
    "Compact & compressible": "Nhỏ gọn & nén được",
    "— friendly to FBA cartons and lower landed cost.": "— phù hợp thùng FBA và giảm chi phí về kho.",
    "Mold-checked & QC-documented": "Kiểm mốc & có hồ sơ QC",
    "— before every shipment leaves Vietnam.": "— trước mỗi lô hàng rời Việt Nam.",
    "— sizes, sets, compressed, with cotton bag.": "— kích cỡ, bộ, dạng nén, kèm túi cotton.",
    "Free media kit (photos + video) — launch faster, spend less on ad creative":
      "Bộ media miễn phí (ảnh + video) — ra mắt nhanh hơn, tốn ít chi phí quảng cáo hơn",

    // ---- v2: eco ----
    "\"Your customers read labels. A natural loofah wrapped in plastic is a shelf contradiction — and they'll call it out.\"":
      "\"Khách của bạn đọc nhãn. Một miếng xơ mướp tự nhiên bọc trong nhựa là sự mâu thuẫn ngay trên kệ — và họ sẽ nhận ra.\"",
    "Paper-first retail packaging": "Bao bì bán lẻ ưu tiên giấy",
    "— kraft sleeve, cotton bag, no single-use plastic.": "— bao giấy kraft, túi cotton, không nhựa dùng một lần.",
    "One-breath disposal script for staff": "Câu hướng dẫn thải bỏ ngắn gọn cho nhân viên",
    "— \"use, dry, retire, compost the fibre at home.\"": "— \"dùng, phơi khô, ngưng dùng, ủ phân phần sợi tại nhà.\"",

    // ---- v2: wholesale ----
    "For Wholesalers & Distributors": "Cho nhà bán sỉ & nhà phân phối",
    "A line your accounts can re-tell and reorder": "Một dòng sản phẩm mà đại lý của bạn có thể kể lại và đặt lại",
    "\"A loose SKU list creates work, not velocity. Your accounts need something they can shelve, explain and reorder without hand-holding.\"":
      "\"Một danh sách SKU rời rạc tạo ra việc, chứ không tạo ra tốc độ bán. Đại lý của bạn cần thứ có thể lên kệ, giải thích và đặt lại mà không cần cầm tay chỉ việc.\"",
    "Reseller-ready kit": "Bộ tài liệu sẵn cho đại lý",
    "— line sheet, story card and clean visuals in one pack.": "— line sheet, thẻ câu chuyện và hình ảnh gọn gàng trong một bộ.",
    "Hero-first assortment": "Cơ cấu hàng ưu tiên sản phẩm chủ lực",
    "— bath heroes first, kitchen as add-on.": "— sản phẩm tắm chủ lực trước, nhà bếp là hàng bổ sung.",
    "Retellable origin story": "Câu chuyện nguồn gốc dễ kể lại",
    "— a respectful Central Vietnam story told with dignity, not pity.":
      "— câu chuyện miền Trung Việt Nam được kể bằng sự tôn trọng, không phải thương hại.",
    "Lower sell-in friction": "Giảm trở ngại khi chào hàng",
    "— QC summary and claim sheet ready to go.": "— bảng tóm tắt QC và bảng cam kết sẵn sàng.",
    "Request the reseller-ready line sheet": "Yêu cầu line sheet sẵn cho đại lý",

    // ---- v2: collections / private label / quality ----
    "Eight ready-to-private-label SKUs across bathroom, body care and kitchen — each made from the same vine-dried mature loofah fibre, built to last, with size options and SKUs ready for your catalog or listing. Bath heroes first, kitchen as add-on.":
      "Tám SKU sẵn sàng làm nhãn riêng cho phòng tắm, chăm sóc cơ thể và nhà bếp — đều làm từ cùng một loại sợi xơ mướp chín khô trên giàn, bền bỉ, có tùy chọn kích cỡ và mã SKU sẵn cho catalog hoặc listing. Sản phẩm tắm chủ lực trước, nhà bếp là hàng bổ sung.",
    "Classic loofah dish scrubber for everyday dishwashing — quick-drying and breathable so it resists odor and mold between washes.":
      "Miếng chà xơ mướp cổ điển cho việc rửa chén hằng ngày — khô nhanh và thoáng khí nên chống mùi và mốc giữa các lần dùng.",
    "We avoid generic \"eco\" claims — every label statement is scoped and defensible (FTC Green Guides friendly).":
      "Chúng tôi tránh các cam kết \"eco\" chung chung — mỗi dòng trên nhãn đều có phạm vi rõ ràng và bảo vệ được (phù hợp FTC Green Guides).",
    "Natural fibre scares buyers for one reason: inconsistency. Here's exactly how we remove that risk before your goods leave Vietnam — sort, grade, cut, pack and document every step.":
      "Sợi tự nhiên khiến người mua e ngại vì một lý do: thiếu đồng đều. Đây là cách chúng tôi loại bỏ rủi ro đó trước khi hàng rời Việt Nam — phân loại, chọn cỡ, cắt, đóng gói và ghi lại từng bước.",
    "The checks that protect your reviews": "Những bước kiểm tra bảo vệ review của bạn",

    // ---- v2: care & disposal ----
    "How to use, dry & dispose:": "Cách dùng, phơi khô & thải bỏ:",
    "use, dry between uses, retire when worn — then compost the fibre at home; remove any non-fibre parts (wooden handle, cord, label) first.":
      "dùng, phơi khô giữa các lần dùng, ngưng dùng khi đã mòn — rồi ủ phân phần sợi tại nhà; tháo bỏ các phần không phải sợi (cán gỗ, dây, nhãn) trước.",

    // ---- v2: origin story ----
    "Grown and vine-dried by farming families": "Được trồng và phơi khô trên giàn bởi các gia đình nông dân",
    "Our loofah is grown and vine-dried by farming families in storm-prone Central Vietnam, then harvested once fully matured. Buying it supports steady livelihoods — told with respect, not charity.":
      "Xơ mướp của chúng tôi được trồng và phơi khô trên giàn bởi các gia đình nông dân ở miền Trung Việt Nam nhiều bão, rồi thu hoạch khi đã chín hẳn. Mua sản phẩm này góp phần tạo sinh kế ổn định — kể bằng sự tôn trọng, không phải làm từ thiện.",

    // ---- v3: content optimization brief ----
    // hero
    "Natural Loofah Products for": "Sản phẩm xơ mướp tự nhiên cho",
    "Amazon Sellers & Eco Brands": "người bán Amazon & thương hiệu eco",
    "Compressed packaging. Stable quality. Retail-ready solutions from Vietnam — helping Amazon sellers, eco shops and distributors launch natural products faster, with lower risk.":
      "Bao bì nén gọn. Chất lượng ổn định. Giải pháp sẵn sàng bán lẻ từ Việt Nam — giúp người bán Amazon, cửa hàng eco và nhà phân phối ra mắt sản phẩm tự nhiên nhanh hơn, ít rủi ro hơn.",
    "Private Label Available": "Có nhãn riêng",
    "MOQ From 100 Sets": "MOQ từ 100 bộ",
    "Retail-Ready Packaging": "Bao bì sẵn sàng lên kệ",
    "Lower Shipping Volume": "Giảm thể tích vận chuyển",
    "Faster Product Launch": "Ra mắt sản phẩm nhanh hơn",
    "Repeat Purchase Category": "Ngành hàng mua lặp lại",
    "Get Wholesale Pricing": "Nhận báo giá sỉ",
    "Download Catalog": "Tải catalog",

    // amazon
    "Launch faster, with lower risk": "Ra mắt nhanh hơn, rủi ro thấp hơn",
    "Loofah products designed for marketplace success. Reduce inventory risk with low MOQ, optimize logistics with compressed packaging, and receive retail-ready products supported by private label options.":
      "Sản phẩm xơ mướp được thiết kế để thành công trên sàn TMĐT. Giảm rủi ro tồn kho với MOQ thấp, tối ưu logistics bằng bao bì nén gọn, và nhận sản phẩm sẵn sàng bán lẻ kèm tùy chọn nhãn riêng.",
    "Lower shipping volume": "Giảm thể tích vận chuyển",
    "— compressed packaging cuts FBA and landed cost.": "— bao bì nén gọn giảm chi phí FBA và chi phí về kho.",
    "Flexible MOQ": "MOQ linh hoạt",
    "— test sell-through before you scale.": "— thử sức bán trước khi mở rộng.",
    "Private Label Support": "Hỗ trợ nhãn riêng",
    "— kraft sleeve, cotton bag, barcode and FBA carton.": "— bao giấy kraft, túi cotton, mã vạch và thùng FBA.",
    "Product Photos & Videos Available": "Có sẵn ảnh & video sản phẩm",
    "— launch faster, spend less on ad creative.": "— ra mắt nhanh hơn, tốn ít chi phí quảng cáo hơn.",
    "— plus vine-dried, mold-checked fibre that protects your reviews.": "— cùng sợi khô trên giàn, đã kiểm mốc, bảo vệ review của bạn.",
    "Explore Amazon Solutions": "Khám phá giải pháp cho Amazon",

    // eco
    "For Eco Shops & Zero-Waste Stores": "Cho cửa hàng eco & cửa hàng zero-waste",
    "Add a proven plastic-free product category without large inventory commitments. Offer customers biodegradable alternatives supported by authentic sourcing and eco-friendly packaging.":
      "Bổ sung một nhóm sản phẩm không nhựa đã được kiểm chứng mà không cần cam kết tồn kho lớn. Mang đến cho khách hàng lựa chọn phân hủy sinh học, đi kèm nguồn gốc xác thực và bao bì thân thiện môi trường.",
    "Plastic-Free": "Không nhựa",
    "Home Compostable": "Ủ phân tại nhà được",
    "— retire the fibre and compost it at home.": "— ngưng dùng và ủ phân phần sợi tại nhà.",
    "Shelf-Ready Packaging": "Bao bì sẵn lên kệ",
    "— shelf-friendly, honest and beautiful.": "— hợp kệ trưng bày, trung thực và đẹp.",
    "Ethical Sourcing Story": "Câu chuyện nguồn gốc có đạo đức",
    "— a respectful Central Vietnam origin you can retell.": "— nguồn gốc miền Trung Việt Nam được kể bằng sự tôn trọng, dễ kể lại.",
    "Small Batch Ordering": "Đặt theo lô nhỏ",
    "— 50 / 100 / 300 mixed SKU starter packs, reorder when it sells.": "— gói khởi đầu 50 / 100 / 300 SKU trộn, đặt lại khi bán chạy.",
    "Explore Eco Shop Solutions": "Khám phá giải pháp cho cửa hàng eco",

    // wholesale / distributors
    "For Distributors & Importers": "Cho nhà phân phối & nhà nhập khẩu",
    "Build a reliable product portfolio with a supplier focused on consistency, scalability and long-term cooperation.":
      "Xây dựng danh mục sản phẩm đáng tin cậy với nhà cung cấp chú trọng sự ổn định, khả năng mở rộng và hợp tác lâu dài.",
    "Stable Supply": "Nguồn cung ổn định",
    "— consistent batches you can forecast and reorder.": "— các lô đồng đều, dễ dự báo và đặt lại.",
    "Multi-SKU Program": "Chương trình đa SKU",
    "— bath heroes first, kitchen and body care as add-ons.": "— sản phẩm tắm chủ lực trước, nhà bếp và chăm sóc cơ thể là hàng bổ sung.",
    "OEM & Private Label": "OEM & nhãn riêng",
    "— your brand on sleeve, bag, barcode and carton.": "— thương hiệu của bạn trên bao, túi, mã vạch và thùng carton.",
    "Export Documentation Support": "Hỗ trợ chứng từ xuất khẩu",
    "— QC summary and paperwork ready to go.": "— bảng tóm tắt QC và hồ sơ sẵn sàng.",
    "Long-Term Partnership": "Hợp tác lâu dài",
    "— one supplier for production, packaging and export.": "— một nhà cung cấp cho sản xuất, đóng gói và xuất khẩu.",
    "Explore Wholesale Solutions": "Khám phá giải pháp bán sỉ",

    // why WINVN
    "Why WINVN": "Vì sao chọn WINVN",
    "Why Buyers Choose WINVN": "Vì sao người mua chọn WINVN",
    "From vine-dried fibre to export paperwork, we package the whole supply into one lower-risk solution — so you can launch faster and reorder with confidence.":
      "Từ sợi khô trên giàn đến chứng từ xuất khẩu, chúng tôi gói trọn cả chuỗi cung ứng thành một giải pháp ít rủi ro — để bạn ra mắt nhanh hơn và đặt lại tự tin hơn.",
    "Compressed Logistics": "Logistics nén gọn",
    "Reduce shipping volume and storage costs with packaging optimized for international distribution.":
      "Giảm thể tích vận chuyển và chi phí lưu kho với bao bì tối ưu cho phân phối quốc tế.",
    "Consistent Quality": "Chất lượng ổn định",
    "Every batch follows quality inspections focused on moisture, mold prevention and product consistency — moisture kept at 10% or below.":
      "Mỗi lô đều qua kiểm tra chất lượng tập trung vào độ ẩm, phòng mốc và độ đồng đều của sản phẩm — độ ẩm luôn ở mức 10% trở xuống.",
    "Retail-Ready Solutions": "Giải pháp sẵn sàng bán lẻ",
    "Packaging options designed for Amazon, eco retail and wholesale channels.":
      "Các tùy chọn bao bì thiết kế cho Amazon, bán lẻ eco và kênh bán sỉ.",
    "Test new products with lower risk before scaling. MOQ: 100 pcs.": "Thử sản phẩm mới với rủi ro thấp hơn trước khi mở rộng. MOQ: 100 pcs.",
    "Ethical Sourcing": "Nguồn gốc có đạo đức",
    "Support sustainable farming communities in Central Vietnam.":
      "Hỗ trợ các cộng đồng nông dân bền vững ở miền Trung Việt Nam.",
    "Export Experience": "Kinh nghiệm xuất khẩu",
    "Production, packaging and export support from one supplier.":
      "Hỗ trợ sản xuất, đóng gói và xuất khẩu từ một nhà cung cấp.",

    // built to reduce buyer risk
    "Reduce buyer risk": "Giảm rủi ro cho người mua",
    "Built To Reduce Buyer Risk": "Được xây dựng để giảm rủi ro cho người mua",
    "Importing natural products should not feel like a gamble. Our production and inspection process is designed to reduce the risks buyers care about most.":
      "Nhập khẩu sản phẩm tự nhiên không nên là một canh bạc. Quy trình sản xuất và kiểm tra của chúng tôi được thiết kế để giảm những rủi ro người mua quan tâm nhất.",
    "Reduce Mold Risk": "Giảm rủi ro nấm mốc",
    "Controlled drying and moisture inspection before shipment.": "Sấy khô có kiểm soát và kiểm tra độ ẩm trước khi giao hàng.",
    "Reduce Review Risk": "Giảm rủi ro đánh giá",
    "Consistent quality between batches.": "Chất lượng đồng đều giữa các lô hàng.",
    "Reduce Launch Risk": "Giảm rủi ro ra mắt",
    "Low MOQ and retail-ready packaging.": "MOQ thấp và bao bì sẵn sàng bán lẻ.",
    "Reduce Supply Risk": "Giảm rủi ro nguồn cung",
    "Stable production and export support.": "Sản xuất ổn định và hỗ trợ xuất khẩu.",
    "Because buyers are not only purchasing products. They are protecting their reviews, reputation and business.":
      "Vì người mua không chỉ mua sản phẩm. Họ đang bảo vệ review, uy tín và công việc kinh doanh của mình.",

    // from farm to retail shelf
    "Farm to shelf": "Từ nông trại đến kệ hàng",
    "From Farm To Retail Shelf": "Từ nông trại đến kệ bán lẻ",
    "Our loofah is sourced from mature plants in Central Vietnam.":
      "Xơ mướp của chúng tôi được lấy từ những cây mướp đã chín ở miền Trung Việt Nam.",
    "The result is stronger fiber, better durability and a more consistent customer experience.":
      "Kết quả là sợi chắc hơn, độ bền tốt hơn và trải nghiệm khách hàng đồng nhất hơn.",
    "From the field to the finished container — our complete loofah production process.":
      "Từ ngoài đồng đến container thành phẩm — toàn bộ quy trình sản xuất xơ mướp của chúng tôi.",

    // packaging tiers
    "Packaging Options For Every Growth Stage": "Tùy chọn bao bì cho mọi giai đoạn phát triển",
    "Startup": "Khởi nghiệp",
    "Kraft Band": "Đai giấy kraft",
    "Best for testing new products with low investment.": "Phù hợp nhất để thử sản phẩm mới với chi phí thấp.",
    "Growth": "Tăng trưởng",
    "Stand-Up Pouch": "Túi đứng",
    "Stronger shelf presentation and higher perceived value.": "Trình bày trên kệ ấn tượng hơn và giá trị cảm nhận cao hơn.",
    "Premium": "Cao cấp",
    "Kraft Window Box": "Hộp giấy kraft có cửa sổ",
    "Designed for gifting, premium positioning and higher retail pricing.": "Thiết kế cho quà tặng, định vị cao cấp và giá bán lẻ cao hơn.",
    "Request Packaging Options": "Yêu cầu tùy chọn bao bì",

    // final CTA
    "Looking For A Reliable Loofah Supplier?": "Đang tìm một nhà cung cấp xơ mướp đáng tin cậy?",
    "Whether you're launching on Amazon, supplying eco stores or building a private label brand, we're ready to help.":
      "Dù bạn đang ra mắt trên Amazon, cung cấp cho các cửa hàng eco hay xây dựng thương hiệu nhãn riêng, chúng tôi luôn sẵn sàng hỗ trợ.",
    "Request Sample": "Yêu cầu mẫu"
  };

  // placeholder English -> Vietnamese
  var PH = {
    "Bath, kitchen, gift set…": "Phòng tắm, nhà bếp, set quà…",
    "e.g. 300 units": "vd: 300 sản phẩm",
    "Tell us what you're planning to launch…": "Cho chúng tôi biết bạn định ra mắt gì…"
  };

  function norm(s) {
    return (s || "")
      .replace(/\s+/g, " ")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .trim();
  }

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, SVG: 1, "IMAGE-SLOT": 1, TEMPLATE: 1 };
  var textNodes = [];
  var orig = new WeakMap();

  function skipped(node) {
    for (var el = node.parentElement; el; el = el.parentElement) {
      var tag = el.tagName ? el.tagName.toUpperCase() : "";
      if (SKIP[tag]) return true;
      if (el.hasAttribute && el.hasAttribute("data-no-i18n")) return true;
    }
    return false;
  }

  function collect(root) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) {
      if (!n.nodeValue || !n.nodeValue.trim()) continue;
      if (skipped(n)) continue;
      textNodes.push(n);
      orig.set(n, n.nodeValue);
    }
  }

  var phEls = [];

  function init() {
    collect(document.querySelector("header"));
    collect(document.querySelector("main"));
    collect(document.querySelector("footer"));
    phEls = Array.prototype.slice.call(
      document.querySelectorAll("input[placeholder], textarea[placeholder]")
    );
    phEls.forEach(function (el) { el.setAttribute("data-ph-en", el.getAttribute("placeholder")); });
  }

  function apply(lang) {
    textNodes.forEach(function (n) {
      var en = orig.get(n);
      if (en == null) return;
      if (lang === "en") { n.nodeValue = en; return; }
      var vi = DICT[norm(en)];
      if (vi) {
        var lead = en.match(/^\s*/)[0];
        var trail = en.match(/\s*$/)[0];
        n.nodeValue = lead + vi + trail;
      }
    });
    phEls.forEach(function (el) {
      var en = el.getAttribute("data-ph-en");
      var vi = lang === "vi" ? PH[norm(en)] : null;
      el.setAttribute("placeholder", vi || en);
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-toggle [data-lang]").forEach(function (s) {
      s.classList.toggle("on", s.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("loofah-lang", lang); } catch (e) {}
  }

  function getLang() {
    try { return localStorage.getItem("loofah-lang") || "en"; } catch (e) { return "en"; }
  }

  function ready() {
    init();
    document.querySelectorAll(".lang-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(getLang() === "en" ? "vi" : "en");
      });
    });
    apply(getLang());
  }

  if (document.readyState !== "loading") ready();
  else document.addEventListener("DOMContentLoaded", ready);
})();
