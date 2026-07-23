// Sekisho Digital Showroom
// Data is loaded from data/products.csv so that products can be edited in Excel.

let products = [];
let currentLang = "ja";
let activeShowroom = "all";

const showrooms = [
  {
  key: "Food & Beverage",
  className: "food",
  icon: "食",
  image: "assets/images/showroom-food.jpg",
  title: { ja: "食品・飲料", en: "Food & Beverage", vi: "Thực phẩm & Đồ uống" },
    text: {
      ja: "日本の食品・飲料・調味料・冷凍食品・スイーツなどを紹介します。",
      en: "Japanese food, beverages, seasonings, frozen food and sweet products.",
      vi: "Thực phẩm, đồ uống, gia vị, thực phẩm đông lạnh và đồ ngọt Nhật Bản chọn lọc."
    }
  },
  {
  key: "Traditional Crafts",
  className: "craft",
  icon: "匠",
image: "assets/images/showroom-craft.jpg",
  title: { 
      ja: "伝統工芸品",
      en: "Traditional Crafts",
      vi: "Đồ thủ công truyền thống"
  },
    text: {
      ja: "日本の職人による器、カップ、照明、装飾品などを紹介します。",
      en: "Craft items made by Japanese artisans, including vessels, cups, lamps and decorations.",
      vi: "Bình, cốc, chén, đèn và đồ trang trí thủ công do nghệ nhân Nhật Bản làm."
    }
  },
  {
    key: "Japanese Lifestyle Goods",
    className: "lifestyle",
    icon: "暮",
       image: "assets/images/showroom-lifestyle.jpg",
    title: { ja: "ライフスタイル商品", en: "Japanese Lifestyle Goods", vi: "Hàng lifestyle Nhật Bản" },
    text: {
      ja: "手ぬぐい、風呂敷、ハンカチ、ガラス製品など、ギフト向け商品を紹介します。",
      en: "Textiles, furoshiki, tenugui, handkerchiefs and glassware suitable for gifts.",
      vi: "Khăn tay, furoshiki, tenugui, khăn vải truyền thống và cốc thủy tinh làm quà tặng."
    }
  },
  {
  key: "Equipment & Solutions",
  className: "device",
  icon: "空",
  image: "assets/images/showroom-equipment.jpg",
  title: {
  ja: "設備・ソリューション",
  en: "Equipment & Solutions",
  vi: "Thiết bị & Giải pháp"
},
    text: {
      ja: "低濃度オゾン脱臭器をはじめ、海外向けの設備・ソリューションをご紹介します。",
      en: "Equipment and business solutions for overseas markets, including low-concentration ozone deodorizing devices.",
      vi: "Thiết bị và giải pháp kinh doanh cho thị trường quốc tế, bao gồm máy khử mùi ozone nồng độ thấp."
    }
  }
];

const translations = {
  ja: {
    nav_home: "ホーム", nav_showrooms: "ショールーム", nav_company: "会社情報", nav_contact: "お問い合わせ",
    mini_food: "食品・飲料",
    mini_craft: "伝統工芸品",
    mini_lifestyle: "ライフスタイル商品",
    mini_equipment: "設備・ソリューション",

    hero_title: "日本の商品を、世界へ。",
　　company_title: "関彰商事株式会社<br>海外事業統括 貿易課",
    hero_text: "食品、伝統工芸品、ライフスタイル商品、設備・ソリューションなど、幅広い日本の商品をご紹介しています。",
    explore_showrooms: "ショールームを見る", request_quotation: "見積依頼",
    showroom_eyebrow: "Select Product Area", showroom_title: "Showrooms",
    all_products: "All Products", download_pdf: "PDFカタログ", recommended_products: "Recommended Products",
    company_eyebrow: "Company Profile",
    company_text: "関彰商事株式会社 ビジネストランスフォーメーション部 海外事業統括 貿易課は、セキショウグループの貿易事業を担う部門です。\n\n食品、伝統工芸品、ライフスタイル商品、設備ソリューションなど、日本の優れた商品を海外市場へご紹介しています。",
    group_site: "セキショウグループ公式サイトを見る",
    news_eyebrow: "News", news_title: "Updates", news_1: "Digital showroom is under preparation.", news_2: "New product data has been added.", news_3: "Overseas product proposal started.",
    contact_eyebrow: "お問い合わせ",
contact_title: "お問い合わせ",
contact_text: "商品詳細、見積、商談、PDFカタログについては下記までお問い合わせください。",
contact_email_label: "メール：",
contact_tel_label: "電話：",
contact_address_label: "住所：",
footer_text: "© 関彰商事株式会社｜ビジネストランスフォーメーション部 海外事業統括 貿易課",
    search: "商品名で検索...", all_showrooms: "全ショールーム", all_categories: "全カテゴリー",
    result: "件の商品", empty: "該当する商品がありません。", inquiry: "見積依頼"
  },
  en: {
    nav_home: "Home", nav_showrooms: "Showrooms", nav_company: "Company", nav_contact: "Contact",
    mini_food: "Food & Beverage",
    mini_craft: "Traditional Crafts",
    mini_lifestyle: "Japanese Lifestyle Goods",
    mini_equipment: "Equipment & Solutions",

    hero_title: "Bringing Japanese Products to the World",
　　company_title: "Sekisho Corporation<br>Foreign Trade Section",
    hero_text: "Explore our digital catalogue of Japanese food, traditional crafts, lifestyle goods, equipment and business solutions.",
    explore_showrooms: "Explore Showrooms", request_quotation: "Request Quotation",
    showroom_eyebrow: "Select Product Area", showroom_title: "Showrooms",
    all_products: "All Products", download_pdf: "Download PDF Catalog", recommended_products: "Recommended Products",
    company_eyebrow: "Company Profile",
    company_text: "The Foreign Trade Section, International Operations, Business Transformation Department of Sekisho Corporation is responsible for the group's international trading activities.\n\nWe introduce high-quality Japanese products to overseas markets, including food, traditional crafts, lifestyle goods, equipment and business solutions.",
    group_site: "Visit Sekisho Group Website",
    news_eyebrow: "News", news_title: "Updates", news_1: "Digital showroom is under preparation.", news_2: "New product data has been added.", news_3: "Overseas product proposal started.",
    contact_eyebrow: "Business Inquiry",
contact_title: "Contact",
contact_text: "Please contact us for product details, quotations, business meetings or PDF catalog requests.",
contact_email_label: "Email:",
contact_tel_label: "Tel:",
contact_address_label: "Address:",
footer_text: "© Sekisho Corporation | Business Transformation Department | International Operations | Foreign Trade Section",
    search: "Search products...", all_showrooms: "All Showrooms", all_categories: "All Categories",
    result: "products", empty: "No products found.", inquiry: "Request Quotation"
  },
  vi: {
    nav_home: "Trang chủ", nav_showrooms: "Showrooms", nav_company: "Công ty",nav_contact: "Liên hệ",
    mini_food: "Thực phẩm & Đồ uống",
    mini_craft: "Đồ thủ công truyền thống",
    mini_lifestyle: "Hàng lifestyle Nhật Bản",
    mini_equipment: "Thiết bị & Giải pháp",

hero_title: "Mang sản phẩm Nhật Bản đến với thế giới",
company_title: "Sekisho Corporation<br>Phòng Thương mại Quốc tế",
    hero_text: "Khám phá catalogue điện tử gồm thực phẩm, hàng thủ công truyền thống, sản phẩm lifestyle, thiết bị và giải pháp kinh doanh từ Nhật Bản.",
    explore_showrooms: "Xem showroom", request_quotation: "Yêu cầu báo giá",
    showroom_eyebrow: "Chọn nhóm sản phẩm", showroom_title: "Showrooms",
    all_products: "Tất cả sản phẩm", download_pdf: "Tải PDF catalog", recommended_products: "Sản phẩm nổi bật",
    company_eyebrow: "Thông tin công ty",
    company_text: "Phòng Thương mại Quốc tế của Công ty Sekisho Corporation chịu trách nhiệm triển khai hoạt động thương mại quốc tế của Tập đoàn Sekisho.\n\nChúng tôi giới thiệu tới thị trường quốc tế các sản phẩm chất lượng cao của Nhật Bản, bao gồm thực phẩm, hàng thủ công truyền thống, sản phẩm lifestyle, thiết bị và các giải pháp kinh doanh.",
    group_site: "Xem website Sekisho Group",
    news_eyebrow: "Tin tức", news_title: "Cập nhật", news_1: "Đang chuẩn bị digital showroom.", news_2: "Đã thêm dữ liệu sản phẩm mới.", news_3: "Bắt đầu đề xuất sản phẩm cho thị trường nước ngoài.",
    contact_eyebrow: "Liên hệ kinh doanh",
contact_title: "Liên hệ",
contact_text: "Vui lòng liên hệ với chúng tôi để nhận thông tin sản phẩm, báo giá, trao đổi kinh doanh hoặc PDF catalog.",
contact_email_label: "Email:",
contact_tel_label: "Điện thoại:",
contact_address_label: "Địa chỉ:",
footer_text: "© Công ty Sekisho | Khối Chuyển đổi Kinh doanh | Quản lý Kinh doanh Hải ngoại | Phòng Thương mại Quốc tế",
    search: "Tìm kiếm sản phẩm...", all_showrooms: "Tất cả showroom", all_categories: "Tất cả danh mục",
    result: "sản phẩm", empty: "Không tìm thấy sản phẩm phù hợp.", inquiry: "Yêu cầu báo giá"
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  setupEvents();
  buildShowroomCards();
  buildShowroomFilter();
  await loadProducts();
  applyLanguage();
  renderAll();
});

function setupEvents() {
  document.getElementById("menuButton").addEventListener("click", () => {
    document.getElementById("mainNav").classList.toggle("show");
  });

  document.getElementById("languageSelect").addEventListener("change", (event) => {
  currentLang = event.target.value;
  applyLanguage();
  buildShowroomCards();
  buildShowroomFilter();
  rebuildCategoryFilter();
  renderAll();
});

  document.getElementById("globalSearch").addEventListener("input", (event) => {
    document.getElementById("productSearch").value = event.target.value;
    location.hash = "products";
    renderAll();
  });

  document.getElementById("productSearch").addEventListener("input", renderAll);

  document.getElementById("showroomFilter").addEventListener("change", (event) => {
    activeShowroom = event.target.value;
    rebuildCategoryFilter();
    renderAll();
  });

  document.getElementById("categoryFilter").addEventListener("change", renderAll);

  document.getElementById("downloadPdfBtn").addEventListener("click", (event) => {
    const showroom = document.getElementById("showroomFilter").value;
    const productWithPdf = products.find(p => (showroom === "all" || p.showroom === showroom) && p.pdf_link);
    if (!productWithPdf) {
      event.preventDefault();
      alert("PDF catalog link can be added in products.csv.");
    }
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("productModal").addEventListener("click", (event) => {
    if (event.target.id === "productModal") closeModal();
  });
}

async function loadProducts() {
  const response = await fetch("data/products.csv");
  const text = await response.text();
  products = parseCSV(text);
  rebuildCategoryFilter();
}

function parseCSV(text) {
  const rows = [];
  let row = [], cell = "", quoted = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i++;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (cell || row.length) {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = "";
      }
      if (char === "\r" && next === "\n") i++;
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const headers = rows.shift().map(h => h.trim().replace(/^\uFEFF/, ""));
  return rows
    .filter(r => r.length > 1)
    .map(r => Object.fromEntries(headers.map((h, i) => [h, (r[i] || "").trim()])));
}

function applyLanguage() {
  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key]) {
        el.innerHTML = t[key];
    }
});

  document.getElementById("globalSearch").placeholder = t.search;
  document.getElementById("productSearch").placeholder = t.search;
  document.querySelector("#showroomFilter option[value='all']").textContent = t.all_showrooms;
  document.querySelector("#categoryFilter option[value='all']").textContent = t.all_categories;
}

function buildShowroomCards() {
  const grid = document.getElementById("showroomCards");
  grid.innerHTML = showrooms.map(s => `
    <article class="showroom-card ${s.className}" onclick="selectShowroom('${s.key}')">
      <div class="showroom-image">
  ${s.image ? `<img src="${s.image}" alt="${s.title[currentLang]}">` : s.icon}
	</div>
      <div class="showroom-body">
        <h3>${s.title[currentLang]}</h3>
        <p>${s.text[currentLang]}</p>
      </div>
    </article>
  `).join("");
}

function buildShowroomFilter() {
  const filter = document.getElementById("showroomFilter");
  filter.innerHTML = `<option value="all">${translations[currentLang].all_showrooms}</option>`;

  showrooms.forEach(s => {
    const option = document.createElement("option");
    option.value = s.key;
    option.textContent = s.title[currentLang];
    filter.appendChild(option);
  });
}

function selectShowroom(key) {
  activeShowroom = key;
  document.getElementById("showroomFilter").value = key;
  rebuildCategoryFilter();
  renderAll();

  document.getElementById("products").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
function rebuildCategoryFilter() {
  const categoryFilter = document.getElementById("categoryFilter");
  const selectedShowroom = document.getElementById("showroomFilter").value;
  categoryFilter.innerHTML = `<option value="all">${translations[currentLang].all_categories}</option>`;

  const categories = [...new Set(products
    .filter(p => selectedShowroom === "all" || p.showroom === selectedShowroom)
    .map(p => p.category)
    .filter(Boolean)
  )].sort();

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function renderAll() {
  renderTitle();
  renderRecommended();
  renderProducts();
  updatePdfButton();
}

function renderTitle() {
  const selected = document.getElementById("showroomFilter").value;
  const title = document.getElementById("currentShowroomTitle");
  const label = document.getElementById("currentShowroomLabel");

  if (selected === "all") {
    title.textContent = translations[currentLang].all_products;
    label.textContent = "All Showrooms";
  } else {
    const showroom = showrooms.find(s => s.key === selected);
    title.textContent = showroom ? showroom.title[currentLang] : selected;
    label.textContent = selected;
  }
}

function filteredProducts() {
  const keyword = document.getElementById("productSearch").value.toLowerCase();
  const showroom = document.getElementById("showroomFilter").value;
  const category = document.getElementById("categoryFilter").value;

  return products.filter(p => {
    const searchText = `${p.name_ja} ${p.name_en} ${p.name_vi} ${p.category} ${p.showroom}`.toLowerCase();
    const matchKeyword = searchText.includes(keyword);
    const matchShowroom = showroom === "all" || p.showroom === showroom;
    const matchCategory = category === "all" || p.category === category;
    return matchKeyword && matchShowroom && matchCategory;
  });
}

function renderRecommended() {
  const showroom = document.getElementById("showroomFilter").value;
  const recommended = products
    .filter(p => p.recommended === "yes" && (showroom === "all" || p.showroom === showroom))
    .slice(0, 4);

  const block = document.getElementById("recommendedBlock");
  block.style.display = recommended.length ? "block" : "none";
  document.getElementById("recommendedGrid").innerHTML = recommended.map(productCard).join("");
}

function renderProducts() {
  const result = filteredProducts();
  document.getElementById("resultCount").textContent = `${result.length} ${translations[currentLang].result}`;

  const grid = document.getElementById("productGrid");
  if (!result.length) {
    grid.innerHTML = `<div class="empty-message">${translations[currentLang].empty}</div>`;
    return;
  }
  grid.innerHTML = result.map(productCard).join("");
}

function updatePdfButton() {
  const showroom = document.getElementById("showroomFilter").value;
  const productWithPdf = products.find(p => (showroom === "all" || p.showroom === showroom) && p.pdf_link);
  const button = document.getElementById("downloadPdfBtn");
  button.href = productWithPdf && productWithPdf.pdf_link ? productWithPdf.pdf_link : "#";
}

function productName(p) {
  if (currentLang === "ja") return p.name_ja || p.name_en;
  if (currentLang === "vi") return p.name_vi || p.name_en;
  return p.name_en || p.name_ja;
}

function description(p) {
  if (currentLang === "ja") return p.description_ja || p.description_en;
  if (currentLang === "vi") return p.description_vi || p.description_en;
  return p.description_en || p.description_ja;
}

function productCard(p) {
  return `
    <article class="product-card" onclick="openProduct('${p.id}')">
      <div class="product-image">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        <img src="${p.image || "assets/images/placeholder-product.svg"}" alt="${productName(p)}">
      </div>
      <div class="product-body">
        <h3>${productName(p)}</h3>
        <p class="en">${p.name_en || ""}</p>
        <div class="product-meta">
          ${p.showroom ? `<span class="tag">${p.showroom}</span>` : ""}
          ${p.category ? `<span class="tag">${p.category}</span>` : ""}
        </div>
      </div>
    </article>
  `;
}

function openProduct(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;

  const specs = [
    ["Showroom", p.showroom],
    ["Category", p.category],
    ["Product Type", p.product_type],
    ["Net weight / Size", p.net_weight_or_size],
    ["Material", p.material],
    ["Shelf life", p.shelf_life],
    ["Storage", p.storage],
    ["Origin", p.origin],
    ["Maker / Artisan", p.maker_or_artisan],
    ["MOQ", p.moq],
    ["Price", p.price],
    ["Usage Scene", p.usage_scene],
    ["Allergy / Notes", p.allergy_or_notes]
  ].filter(row => row[1]);

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-grid">
      <div class="modal-image">
        <img src="${p.image || "assets/images/placeholder-product.svg"}" alt="${productName(p)}">
      </div>
      <div>
        <p class="eyebrow">${p.showroom || ""}</p>
        <h2>${productName(p)}</h2>
        <p>${description(p) || ""}</p>

        <table class="spec-table">
          <tr><th>Product ID</th><td>${p.id}</td></tr>
          ${specs.map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`).join("")}
        </table>

        <a class="btn primary" href="mailto:trade@example.com?subject=Product Inquiry: ${encodeURIComponent(p.name_en || p.name_ja || p.id)}">
          ${translations[currentLang].inquiry}
        </a>
      </div>
    </div>
  `;

  document.getElementById("productModal").classList.add("show");
}

function closeModal() {
  document.getElementById("productModal").classList.remove("show");
}
