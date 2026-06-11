// blog.js — Loofah Field Journal.
// Fetches published articles from the loofahvn CRM public API
// (GET {apiBase}/api/v1/public/articles?workspace=...). When the API is not
// configured or unreachable, falls back to the embedded SEED entries below so
// the journal always renders. Set window.LOOFAH_BLOG_CONFIG before this script
// to point at a live backend:
//   <script>window.LOOFAH_BLOG_CONFIG = { apiBase: "https://api.example.com", workspace: "<workspaceId>" };</script>
(function () {
  "use strict";

  var CONFIG = window.LOOFAH_BLOG_CONFIG || { apiBase: "", workspace: "" };

  // ---------------------------------------------------------------- seed data
  // Mirrors src/scripts/seed-articles.ts in the loofahvn repo.
  var SEED = [
    {
      slug: "caring-for-your-loofah-naturally",
      title: "Caring for Your Loofah: Make It Last Longer, Naturally",
      excerpt:
        "A loofah is low-maintenance, not no-maintenance. Three small habits — rinse, hang, dry — double its life. Here is the simple care routine, plus when to retire it to the compost.",
      coverImage: "products/bath-sponge.jpg",
      categoryName: "Field Journal",
      tagNames: ["Care Guide", "Natural Living"],
      publishedAt: daysAgo(4),
      contentHtml:
        "<p>People ask us two questions more than any others: <em>“How long does a loofah last?”</em> and <em>“How do I keep it clean?”</em> The honest answers: longer than you think, and with almost no effort — if you build three small habits.</p>" +
        "<h2>The three habits</h2>" +
        "<ol><li><strong>Rinse it properly.</strong> After each use, rinse under clean running water and squeeze a few times. Soap residue left in the fiber is what shortens a loofah's life — it traps moisture and feeds bacteria.</li>" +
        "<li><strong>Hang it up.</strong> The single biggest upgrade. A loofah on a hook in moving air dries within hours. A loofah lying flat on a wet shelf stays damp until the next shower. Most quality loofahs come with a cotton loop for exactly this reason.</li>" +
        "<li><strong>Let it dry hard.</strong> A healthy loofah should feel stiff and rough before its next use. That firmness is the sign no moisture is lingering inside the fiber.</li></ol>" +
        "<h2>The weekly refresh</h2>" +
        "<p>Once a week, give it a deeper clean — pick whichever fits your kitchen:</p>" +
        "<ul><li>Soak 5 minutes in hot water with a splash of white vinegar, then rinse and hang.</li>" +
        "<li>Or pour just-boiled water over it in the sink and let it cool.</li>" +
        "<li>Or sun-dry it on a windowsill for an afternoon — ultraviolet is the original disinfectant.</li></ul>" +
        "<p>Avoid chlorine bleach. It whitens the fiber but breaks down the cellulose, leaving the sponge limp weeks early.</p>" +
        "<h2>When to say goodbye</h2>" +
        "<p>With daily use, a bath loofah gives you <strong>4–8 weeks</strong>; a kitchen loofah usually a bit less. Retire it when the fiber stays soft even after drying, develops a smell that survives the vinegar soak, or starts shedding fragments.</p>" +
        "<h2>The best part: there is no “throwing away”</h2>" +
        "<p>Cut the retired loofah into pieces and drop it in the compost — it disappears in weeks. No microplastics, no guilt, no landfill century. Then demote your “old” shower loofah to the kitchen, and start a fresh one in the bathroom. The rotation never wastes a fiber.</p>" +
        "<blockquote><p>Rinse. Hang. Dry hard. That is the entire manual — the rest, the plant already took care of.</p></blockquote>",
    },
    {
      slug: "five-ways-to-use-loofah-beyond-the-shower",
      title: "5 Ways to Use Loofah Beyond the Shower",
      excerpt:
        "The same fiber that exfoliates your skin can scrub your pans, save your soap, clean your veggies and pot your seedlings. Five everyday uses for the most underrated gourd.",
      coverImage: "products/oval-scrubber.jpg",
      categoryName: "Field Journal",
      tagNames: ["Natural Living"],
      publishedAt: daysAgo(11),
      contentHtml:
        "<p>Most loofahs live their whole lives in a shower caddy. A waste of talent. The fiber's combination of firm-when-dry and soft-when-wet makes it useful in half the rooms of your house. Five favorites:</p>" +
        "<h2>1. The kitchen scrubber that respects your pans</h2>" +
        "<p>A slice of loofah lifts stuck-on food without scoring non-stick surfaces or enamel. It dries fast between washes, which is most of the battle against sponge smell. When it finally tires out, it goes into the compost instead of the bin.</p>" +
        "<h2>2. A soap dish that drains itself</h2>" +
        "<p>Set a flat slice under your soap bar. Water drains through the fiber instead of pooling, so the bar stays dry and lasts noticeably longer. The loofah quietly collects the slivers and becomes self-lathering over time — zero waste in the most literal sense.</p>" +
        "<h2>3. Produce washing</h2>" +
        "<p>Root vegetables — potatoes, carrots, ginger — come clean under a gentle loofah scrub without losing their skin. It is faster than peeling and keeps the most nutritious layer on the vegetable.</p>" +
        "<h2>4. Seed-starting pots that plant themselves</h2>" +
        "<p>Gardeners cut thick rings of loofah, stand them in a tray, fill with soil and sow. Roots grow through the fiber; when seedlings are ready, the whole ring goes into the ground and biodegrades around the growing plant. A loofah growing the next generation of plants has a pleasing circularity to it.</p>" +
        "<h2>5. Gentle household scrubbing</h2>" +
        "<p>Sinks, tubs, tile, glass stovetops: loofah with a drop of dish soap or a vinegar spray handles everyday grime without scratching chrome or ceramic. Cut pieces to size — one gourd yields a whole cleaning kit.</p>" +
        "<blockquote><p>One vine, one season, one gourd — and it shows up in your bathroom, kitchen, garden and cleaning cupboard.</p></blockquote>" +
        "<p>If you have only ever met loofah in the shower, give a slice a second job. It works for free.</p>",
    },
    {
      slug: "how-loofah-is-harvested-in-vietnam",
      title: "How Natural Loofah Is Harvested and Processed in Vietnam",
      excerpt:
        "Sixty days of sun, one careful harvest, and a week of washing and drying. A look inside the season of a Vietnamese loofah farm — and why the quiet steps matter most.",
      coverImage: "images/eco-photo.webp",
      categoryName: "Field Journal",
      tagNames: ["Behind the Farm"],
      publishedAt: daysAgo(19),
      contentHtml:
        "<p>Good loofah does not happen at the warehouse. By the time a gourd reaches the sorting table, almost everything about its quality has already been decided — in the field, weeks earlier. This is what a season looks like.</p>" +
        "<h2>Planting and the climb</h2>" +
        "<p>Seeds go into the ground after the last cool spell. Within weeks the vines need somewhere to go, so farmers raise trellises — bamboo and wire frames two meters tall. Climbing matters: gourds that hang free grow straight, drain rainwater, and develop an even fiber. Gourds left to sprawl on soil grow curved and blotchy.</p>" +
        "<h2>The waiting game</h2>" +
        "<p>A loofah destined for the dinner table is picked at two weeks. A loofah destined for the bathroom must hang for around <strong>sixty days</strong>, until the green skin turns brown and the gourd feels almost weightless. Harvest too early and the fiber is thin and collapses when wet. Too late, and rain may stain the fiber inside its shell.</p>" +
        "<blockquote><p>Experienced growers judge readiness by sound — a ripe loofah rattles faintly when shaken, like a maraca filled with paper.</p></blockquote>" +
        "<h2>Peel, shake, wash, dry</h2>" +
        "<ol><li><strong>Cracking.</strong> The brittle skin is cracked at the stem end and peeled off in strips by hand.</li>" +
        "<li><strong>Seeding.</strong> Hundreds of black seeds are shaken out — the best are kept for next season.</li>" +
        "<li><strong>Washing.</strong> The fiber is rinsed in clean water to remove sap and dust. Some farms use a brief natural soak to brighten the fiber; good ones avoid harsh bleach that weakens it.</li>" +
        "<li><strong>Sun-drying.</strong> Sponges dry on open racks for several days. Sun, not ovens — slow drying keeps the fiber springy.</li></ol>" +
        "<h2>Sorting: where export quality is born</h2>" +
        "<p>Dried gourds are graded by density, color and shape. Dense, pale, evenly cylindrical fiber becomes whole-piece bath sponges. Slightly irregular fiber is cut into dish pads and slices. Nothing useful is wasted — offcuts become stuffing, scrubber filling, or compost.</p>" +
        "<h2>Why this matters to a buyer</h2>" +
        "<p>Two loofah sponges can look identical in a photo and behave completely differently in water. The difference is rarely the species — it is the sixty days of patience, the trellis, and the sun-drying rack. When we talk about quality control, this field work is most of the story.</p>",
    },
    {
      slug: "loofah-vs-plastic-sponge-lifecycle",
      title: "Loofah vs Plastic Sponge: An Honest Lifecycle Comparison",
      excerpt:
        "A kitchen sponge lives in your hand for weeks and in a landfill for centuries. We traced both products from raw material to end of life — the difference is bigger than you think.",
      coverImage: "products/rect-dish.jpg",
      categoryName: "Field Journal",
      tagNames: ["Sustainability", "Loofah 101"],
      publishedAt: daysAgo(27),
      contentHtml:
        "<p>Every kitchen has one: the yellow-and-green rectangle that smells suspicious after two weeks. It feels disposable because it is — but “disposable” only describes how we use it, not how long it lasts on the planet. Here is the side-by-side story.</p>" +
        "<h2>Where each sponge begins</h2>" +
        "<p>A conventional sponge starts as crude oil. Polyurethane foam is synthesized, dyed, glued to an abrasive layer (often more plastic), and shipped. A loofah scrubber starts as a seed planted in spring. The “factory” is a trellis; the energy input is sunlight; the dye is whatever color the sun left it.</p>" +
        "<h2>The microplastic problem nobody sees</h2>" +
        "<p>Plastic sponges shed. Every scrub releases micro-fragments of foam and abrasive into the wastewater — particles too small to filter, ending up in rivers and eventually in the food chain. Loofah sheds too, but what it sheds is cellulose: plant fiber that biodegrades the way a fallen leaf does.</p>" +
        "<h2>Side by side</h2>" +
        "<table><thead><tr><th></th><th>Natural loofah</th><th>Plastic sponge</th></tr></thead>" +
        "<tbody><tr><td>Raw material</td><td>Gourd fiber, grown in months</td><td>Crude oil, formed over millions of years</td></tr>" +
        "<tr><td>In use</td><td>4–8 weeks, dries fast between uses</td><td>2–4 weeks, stays damp and harbors odor</td></tr>" +
        "<tr><td>Sheds</td><td>Compostable cellulose</td><td>Microplastics</td></tr>" +
        "<tr><td>End of life</td><td>Compost — gone in weeks</td><td>Landfill — intact for centuries</td></tr></tbody></table>" +
        "<h2>“But natural products are weaker, right?”</h2>" +
        "<p>Honestly: a loofah will not outlast a plastic scourer on raw aggression. It does not need to. Dried loofah fiber is firm enough to lift burnt rice from a pan, yet gentle enough for non-stick coatings — a balance plastic abrasives struggle with. When it softens, you compost it and reach for the next slice of the same gourd.</p>" +
        "<blockquote><p>The question is not which sponge survives longer in your sink. It is which one survives longer on Earth after you throw it away.</p></blockquote>" +
        "<h2>The takeaway</h2>" +
        "<p>Swapping one sponge will not save the planet. But the kitchen sponge is the rare swap that costs nothing in habit: same motion, same soap, same sink. The only thing that changes is what happens after you let go.</p>",
    },
    {
      slug: "what-is-a-loofah-really",
      title: "What Is a Loofah, Really? From Vine to Bathroom",
      excerpt:
        "Most people think loofah comes from the sea. It actually grows on a vine — a cousin of the cucumber. Here is the full journey from tropical gourd to the sponge in your shower.",
      coverImage: "images/hero-stacked-photo.webp",
      categoryName: "Field Journal",
      tagNames: ["Loofah 101"],
      publishedAt: daysAgo(34),
      contentHtml:
        "<p><strong>Quick answer:</strong> a loofah is the dried fibrous skeleton of the <em>Luffa aegyptiaca</em> gourd — a fast-growing vine in the cucumber family. No ocean involved, no factory-made foam. Just a fruit, sunshine, and a little patience.</p>" +
        "<h2>The most common misconception</h2>" +
        "<p>Ask ten people where loofah comes from and at least seven will say “the sea.” It is an honest mistake — the texture looks like coral and the name sounds vaguely nautical. But sea sponges are animals. Loofah is a plant, and a remarkably generous one: a single healthy vine can produce dozens of gourds in one season.</p>" +
        "<h2>From flower to fiber</h2>" +
        "<ol><li><strong>Flowering.</strong> Bright yellow blossoms appear on the vine in early summer, pollinated mostly by bees.</li>" +
        "<li><strong>Growing.</strong> The young gourd looks like a giant zucchini. Picked young, it is actually edible — a common ingredient in Vietnamese soups.</li>" +
        "<li><strong>Maturing.</strong> Left on the vine, the flesh slowly retreats and a dense network of cellulose fiber forms inside.</li>" +
        "<li><strong>Drying.</strong> The gourd turns brown and light. Farmers crack the skin, shake out the seeds, and reveal the fiber skeleton.</li>" +
        "<li><strong>Finishing.</strong> The fiber is washed, sun-dried, and cut into sponges, pads, slices and gloves.</li></ol>" +
        "<blockquote><p>A loofah is not manufactured. It is <em>revealed</em> — everything about its structure was grown, not molded.</p></blockquote>" +
        "<h2>Why the fiber works so well</h2>" +
        "<p>The cellulose network is firm when dry and pleasantly soft when wet. It holds lather generously, scrubs without scratching, and dries fast enough to resist odor. When it finally wears out — typically after a month or two of daily use — it can go straight into the compost bin.</p>" +
        "<h2>One plant, many products</h2>" +
        "<ul><li>Bath sponges and exfoliating pads for skincare routines</li>" +
        "<li>Kitchen scrubbers that are safe on non-stick cookware</li>" +
        "<li>Soap rests and dish pads that drain and dry naturally</li>" +
        "<li>Even insoles and craft material in some traditions</li></ul>" +
        "<p>Next time someone tells you loofah comes from the ocean, you can smile and tell them the truth: it comes from a vine — most likely one growing in a sunny field in Vietnam.</p>",
    },
  ];

  function daysAgo(n) {
    return new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();
  }

  // ---------------------------------------------------------------- helpers
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function fmtDate(iso) {
    if (!iso) return "";
    var d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  function readMinutes(html) {
    var words = String(html || "").replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220));
  }

  function pad2(n) { return n < 10 ? "0" + n : String(n); }

  function apiConfigured() {
    return Boolean(CONFIG.apiBase && CONFIG.workspace);
  }

  function api(path, params) {
    var url = new URL(CONFIG.apiBase.replace(/\/$/, "") + "/api/v1/public/articles" + path);
    url.searchParams.set("workspace", CONFIG.workspace);
    Object.keys(params || {}).forEach(function (k) { url.searchParams.set(k, params[k]); });
    return fetch(url.toString(), { signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      });
  }

  // Resolve tag/category ObjectIds from the API into display names.
  function loadTaxonomy() {
    return Promise.all([api("/tags"), api("/categories")]).then(function (res) {
      var byId = {};
      (res[0].data || []).forEach(function (t) { byId[t.id || t._id] = t.name; });
      (res[1].data || []).forEach(function (c) { byId[c.id || c._id] = c.name; });
      return byId;
    }).catch(function () { return {}; });
  }

  function normalize(a, names) {
    return {
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt || "",
      coverImage: a.coverImage || "",
      contentHtml: a.contentHtml || "",
      publishedAt: a.publishedAt,
      categoryName: a.categoryName || names[a.category] || "Field Journal",
      tagNames: a.tagNames || (a.tags || []).map(function (id) { return names[id]; }).filter(Boolean),
    };
  }

  // ---------------------------------------------------------------- data
  function getList() {
    if (!apiConfigured()) return Promise.resolve(SEED.slice());
    return Promise.all([api("", { limit: 20, sort: "-publishedAt" }), loadTaxonomy()])
      .then(function (res) {
        var items = (res[0].items || []).map(function (a) { return normalize(a, res[1]); });
        return items.length ? items : SEED.slice();
      })
      .catch(function () { return SEED.slice(); });
  }

  function getOne(slug) {
    var fallback = SEED.filter(function (a) { return a.slug === slug; })[0] || null;
    if (!apiConfigured()) return Promise.resolve(fallback);
    return Promise.all([api("/" + encodeURIComponent(slug)), loadTaxonomy()])
      .then(function (res) { return normalize(res[0].data, res[1]); })
      .catch(function () { return fallback; });
  }

  // ---------------------------------------------------------------- list page
  function metaRow(a, extra) {
    return (
      '<div class="entry-meta"><span>' + esc(fmtDate(a.publishedAt)) + "</span>" +
      '<span class="leader"></span><span>' + esc((extra || a.categoryName || "")) + "</span></div>"
    );
  }

  function renderList(root, items) {
    var total = items.length;
    var featured = items[0];
    var rest = items.slice(1);

    var html = "";
    if (featured) {
      html +=
        '<article class="journal-featured reveal">' +
        '<a class="cover" href="article.html?slug=' + encodeURIComponent(featured.slug) + '">' +
        '<span class="stamp">' + esc(featured.categoryName) + "</span>" +
        (featured.coverImage ? '<img src="' + esc(featured.coverImage) + '" alt="' + esc(featured.title) + '">' : "") +
        "</a>" +
        '<div class="body">' +
        '<p class="entry-no">Entry <b>No. ' + pad2(total) + "</b> · Latest</p>" +
        '<h2><a href="article.html?slug=' + encodeURIComponent(featured.slug) + '">' + esc(featured.title) + "</a></h2>" +
        '<p class="excerpt">' + esc(featured.excerpt) + "</p>" +
        metaRow(featured) +
        "</div></article>";
    }

    html += '<div class="journal-grid">';
    rest.forEach(function (a, i) {
      var no = total - 1 - i;
      html +=
        '<article class="entry-card reveal">' +
        '<a class="cover" href="article.html?slug=' + encodeURIComponent(a.slug) + '">' +
        '<span class="stamp">' + esc(a.categoryName) + "</span>" +
        (a.coverImage ? '<img src="' + esc(a.coverImage) + '" alt="' + esc(a.title) + '" loading="lazy">' : "") +
        "</a>" +
        '<div class="body">' +
        '<p class="entry-no">Entry <b>No. ' + pad2(no) + "</b></p>" +
        '<h3><a href="article.html?slug=' + encodeURIComponent(a.slug) + '">' + esc(a.title) + "</a></h3>" +
        '<p class="excerpt">' + esc(a.excerpt) + "</p>" +
        '<div class="tag-row">' + a.tagNames.map(function (t) { return '<span class="tag-pebble">' + esc(t) + "</span>"; }).join("") + "</div>" +
        metaRow(a, "") +
        "</div></article>";
    });
    html += "</div>";

    root.innerHTML = html;
  }

  function initListPage() {
    var root = document.getElementById("journalEntries");
    if (!root) return;
    getList().then(function (items) {
      if (!items.length) {
        root.innerHTML = '<p class="journal-status">No entries yet — the first harvest is being written up.</p>';
        return;
      }
      renderList(root, items);
      var count = document.getElementById("entryCount");
      if (count) count.textContent = pad2(items.length) + (items.length === 1 ? " entry" : " entries");
    });
  }

  // ---------------------------------------------------------------- article page
  function initArticlePage() {
    var root = document.getElementById("articleRoot");
    if (!root) return;
    // Slug from ?slug=...; falls back to #... for hosts whose clean-URL
    // redirects drop the query string.
    var slug =
      new URLSearchParams(location.search).get("slug") ||
      decodeURIComponent(location.hash.replace(/^#/, "")) || "";

    getOne(slug).then(function (a) {
      if (!a) {
        root.innerHTML =
          '<div class="wrap"><p class="journal-status">Entry not found. ' +
          '<a class="back-to-journal" href="blog.html">Back to the Journal</a></p></div>';
        return;
      }
      document.title = a.title + " — Loofah Field Journal";

      var mins = readMinutes(a.contentHtml);
      root.innerHTML =
        '<header class="article-hero wrap reveal">' +
        '<p class="crumbs"><a href="blog.html">Field Journal</a><span>/</span><span>' +
        esc(a.tagNames[0] || a.categoryName) + "</span></p>" +
        '<h1 class="article-title">' + esc(a.title) + "</h1>" +
        (a.excerpt ? '<p class="article-standfirst">' + esc(a.excerpt) + "</p>" : "") +
        '<div class="article-metabar"><span>' + esc(fmtDate(a.publishedAt)) + "</span>" +
        '<span class="leader"></span><span>' + mins + " min read</span></div>" +
        (a.coverImage ? '<figure class="article-cover"><img src="' + esc(a.coverImage) + '" alt="' + esc(a.title) + '"></figure>' : "") +
        "</header>" +
        // contentHtml is sanitized server-side (articles.sanitize.ts) or ships with this site.
        '<div class="article-body wrap" data-no-i18n>' + a.contentHtml + "</div>" +
        '<footer class="article-foot wrap">' +
        '<a class="back-to-journal" href="blog.html">&larr; All journal entries</a>' +
        '<div class="tag-row">' + a.tagNames.map(function (t) { return '<span class="tag-pebble">' + esc(t) + "</span>"; }).join("") + "</div>" +
        "</footer>";
    });
  }

  // ---------------------------------------------------------------- chrome
  function initMenu() {
    var btn = document.getElementById("menuToggle");
    var menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;
    btn.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("menu-open"); });
    });
  }

  function ready() {
    initMenu();
    initListPage();
    initArticlePage();
  }

  if (document.readyState !== "loading") ready();
  else document.addEventListener("DOMContentLoaded", ready);
})();
