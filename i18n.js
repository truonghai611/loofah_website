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
    "Private-label natural loofah products for Amazon sellers and eco shops — export-ready, from Vietnam.":
      "Sản phẩm xơ mướp tự nhiên nhãn riêng cho người bán Amazon và cửa hàng eco — sẵn sàng xuất khẩu, từ Việt Nam.",
    "Gift sets": "Set quà tặng",
    "Bulk refill": "Gói refill số lượng lớn",
    "Buyers": "Người mua",
    "For Amazon sellers": "Cho người bán Amazon",
    "For eco shops": "Cho cửa hàng eco",
    "Private label": "Nhãn riêng",
    "Quality & export": "Chất lượng & xuất khẩu",
    "Sample kit": "Bộ mẫu",
    "Company": "Công ty",
    "Wholesale catalog": "Catalog sỉ",
    "About": "Giới thiệu",
    "© 2026 loofahvn.com — Made from natural loofah plant fiber in Vietnam.":
      "© 2026 loofahvn.com — Làm từ sợi xơ mướp tự nhiên tại Việt Nam."
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
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
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
