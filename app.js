/**
 * ==========================================================================
 * قاعدة البيانات المباشرة والشاملة لجميع منتجات مطعم جريل (Menu Database)
 * تم تفريغ الأصناف والأسعار الحقيقية كاملة من صور المنيو الرسمية للمطعم بدقة.
 * ==========================================================================
 */
const MENU_DATABASE = [
    // 1. قسم الشواية (Grill Chicken)
    { id: "grill-01", category: "grill", name: "دجاجة شواية كاملة", english: "Whole Grilled Chicken", price: 330, badge: "الأكثر طلبًا", desc: "تقدم مع الأرز البسمتي، البطاطس، العيش، الثومية، والمخلل الجريل الخاص.", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=500" },
    { id: "grill-02", category: "grill", name: "نصف دجاجة شواية", english: "Half Grilled Chicken", price: 175, badge: "سريع التحضير", desc: "نصف دجاجة متبلة على الشواية بخلطة جريل، تقدم مع الأرز والصلصات.", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=500" },
    { id: "grill-03", category: "grill", name: "ربع دجاجة ورك شواية", english: "Quarter Chicken Thigh", price: 100, badge: "", desc: "ربع دجاجة ورك مشوي بعناية على السيخ الدوار مع الأرز البسمتي والبطاطس.", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=500" },
    { id: "grill-04", category: "grill", name: "ربع دجاجة صدر شواية", english: "Quarter Chicken Breast", price: 110, badge: "", desc: "ربع دجاجة صدر غني بالتتبيلة الشرقية المميزة، يقدم مع كامل ملحقاته وجبات.", img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=500" },

    // 2. قسم الشاورما (Shawarma)
    { id: "shw-01", category: "shawarma", name: "ساندوتش شاورما فراخ فرنسي كبير", english: "Chicken Shawarma French Large", price: 75, badge: "جديد", desc: "شاورما دجاج طازجة داخل خبز فرنسي مع الثومية والمخلل المقرمش.", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=500" },
    { id: "shw-02", category: "shawarma", name: "ساندوتش شاورما لحمة صاروخ", english: "Beef Shawarma Rocket", price: 110, badge: "حار", desc: "شاورما لحم بلدي صافي متبل، طحينة، بقدونس، وبصل داخل خبز الصاج العملاق.", img: "https://images.unsplash.com/photo-1633383718081-22ac93e3dbf1?auto=format&fit=crop&q=80&w=500" },
    { id: "shw-03", category: "shawarma", name: "وجبة شاورما عربي دبل مكس", english: "Arabic Shawarma Double Mix", price: 170, badge: "الملكي", desc: "قطع شاورما فراخ ولحم مقطعة عربي، تقدم مع بطاطس فارم فريتس، ثومية، مخلل، وكاتشب.", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=500" },
    { id: "shw-04", category: "shawarma", name: "فتة شاورما فراخ كبير", english: "Chicken Shawarma Fattah Large", price: 100, badge: "طلب عالي", desc: "أرز بسمتي مبهر مغطى بشاورما الدجاج الغزيرة والخبز المحمص وصلصة الثومية السحرية.", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=500" },

    // 3. قسم البروستد والفرايد تشيكن (Broasted & Fried Chicken)
    { id: "brs-01", category: "broasted", name: "وجبة بروستد سوبر سنجل - 4 قطع", english: "Super Single Broasted - 4 Pcs", price: 195, badge: "الأكثر مبيعًا", desc: "4 قطع دجاج بروستد ذهبي مقرمش خلطة سرية، بطاطس، ثومية، عيش، كولسلو.", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=500" },
    { id: "brs-02", category: "broasted", name: "وجبة عائلية سوبر جريل - 8 قطع", english: "Super Grill Family - 8 Pcs", price: 380, badge: "توفير كبير", desc: "8 قطع دجاج مقلي مقرمش تكفي العائلة، تقدم مع بطاطس حجم عائلي، كلوسلو، وعيش طازج.", img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=500" },
    { id: "brs-03", category: "broasted", name: "ساندوتش تشيكن بيكون فاخر", english: "Chicken Bacon Premium", price: 90, badge: "جديد", desc: "صدور دجاج كريسبي، شرائح بيف بيكون مدخن، صوص الجبنة الشيدر الغنية، مايونيز، خس وطماطم.", img: "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&q=80&w=500" },
    { id: "brs-04", category: "broasted", name: "ساندوتش تشيكن ديلوكس العملاق", english: "Chicken Deluxe Sandwich", price: 140, badge: "ضخم", desc: "طبقات من الدجاج المقرمش، أصابع الموتزاريلا المقلية، صوص التكساس، البيب بون المدخن.", img: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&q=80&w=500" },

    // 4. قسم البيتزا والباست وايت (Pizza & Pasta)
    { id: "piz-01", category: "pizza", name: "بيتزا تشيكن كرانشي - حجم كبير", english: "Chicken Crunchy Pizza - Large", price: 120, badge: "عشاق الجبن", desc: "صلصة إيطالية، قطع دجاج كرانشي، موتزاريلا فاخرة، صوص الرانش المبتكر.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=500" },
    { id: "piz-02", category: "pizza", name: "بيتزا تشيكن مكسيكانو وسط", english: "Chicken Mexicano Pizza - Medium", price: 95, badge: "سبايسي", desc: "قطع دجاج متبل حار، فلفل هالبينو، زيتون أسود، خليط أجبان جريل السرية.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=500" },
    { id: "piz-03", category: "pizza", name: "باست وايت صوص مكس فراخ", english: "White Sauce Pasta Mix Chicken", price: 90, badge: "كريمي", desc: "مكرونة بيني غارقة في الصوص الأبيض الكريمي، بيف بيكون، قطع دجاج مشوية وموتزاريلا.", img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80&w=500" },

    // 5. قسم الكريبات (Crepes)
    { id: "crp-01", category: "crepe", name: "كريب مطعم جريل الخاص", english: "Grill Special Crepe", price: 120, badge: "توصية الشيف", desc: "مكس شاورما، دجاج كريسبي، زنجر حار، شرائح تركي مدخن، كابوتشا، صوص شيدر وزيتون.", img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=500" },
    { id: "crp-02", category: "crepe", name: "كريب شاورما مكس رهيب", english: "Mix Shawarma Crepe", price: 100, badge: "", desc: "مزيج متناغم من شاورما الفراخ واللحمة، صوص المايونيز، طماطم، فلفل وموتزاريلا مطاطية.", img: "https://images.unsplash.com/photo-1621367044541-2571b503259b?auto=format&fit=crop&q=80&w=500" },
    { id: "crp-03", category: "crepe", name: "كريب تشيكن رانش", english: "Chicken Ranch Crepe", price: 80, badge: "", desc: "قطع استربس دجاج مقرمشة، خس، زيتون، موتزاريلا مغطاة بصوص الرانش الغني الفاخر.", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=500" },

    // 6. قسم البرجر (Burgers)
    { id: "brg-01", category: "burgers", name: "برجر دبل تشيز لوف", english: "Double Burger Cheese Love", price: 140, badge: "مليء بالجبن", desc: "قطعتين من لحم البرجر المشوي ع الفحم، صوص الجبن السائل، بصل مكرمل، خس، صوص الباربيكيو.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500" },
    { id: "brg-02", category: "burgers", name: "برجر هالبينو السبايسي", english: "Jalapeno Spicy Burger", price: 100, badge: "ناري 🔥", desc: "لحم بقري فاخر، صوص الشيدر الحار، شرائح فلفل الهالبينو المكسيكي، مايونيز حار.", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=500" },

    // 7. المقبلات والإضافات (Appetizers & Sides)
    { id: "side-01", category: "appetizers", name: "سيزر سلاط قطع شفت طاووق", english: "Shish Tawook Caesar Salad", price: 50, badge: "صحي", desc: "سلطة خضراء طازجة، خبز كروتون محمص، قطع دجاج شيش طاووق مشوي، دريسنج السيزر.", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=500" },
    { id: "side-02", category: "appetizers", name: "باكت بطاطس صوص الشيدر", english: "Fries With Cheddar Sauce", price: 30, badge: "", desc: "أصابع بطاطس فارم فريتس مقرمشة مغطاة بكمية وفيرة من صوص الشيدر الذائب.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=500" }
];

// فئات المنيو للتبويبات (Menu Categories)
const MENU_CATEGORIES = [
    { id: "all", name: "كل المنيو" },
    { id: "grill", name: "قسم الشواية" },
    { id: "shawarma", name: "الشاورما" },
    { id: "broasted", name: "البروستد وتشيكن" },
    { id: "pizza", name: "البيتزا والباست" },
    { id: "crepe", name: "الكريبات" },
    { id: "burgers", name: "قسم البرجر" },
    { id: "appetizers", name: "المقبلات والسناكس" }
];

/**
 * ==========================================================================
 * إدارة وبنية النظام والتفاعل للموقع (State Management)
 * ==========================================================================
 */
let currentCart = [];
let activeCategory = "all";
let searchQuery = "";
let currentSort = "default";
let selectedProductForModal = null;
let currentModalQty = 1;

// مراجع عناصر واجهة المستخدم المستهدفة برمجياً (DOM Elements)
const preloader = document.getElementById("preloader");
const mainHeader = document.getElementById("mainHeader");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const mobileToggle = document.getElementById("mobileToggle");
const closeSidebar = document.getElementById("closeSidebar");
const themeToggle = document.getElementById("themeToggle");
const cartTrigger = document.getElementById("cartTrigger");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const menuTabsContainer = document.getElementById("menuTabsContainer");
const menuProductsGrid = document.getElementById("menuProductsGrid");
const menuSearchInput = document.getElementById("menuSearchInput");
const menuSortSelect = document.getElementById("menuSortSelect");
const cartBadge = document.getElementById("cartBadge");
const cartDrawerItems = document.getElementById("cartDrawerItems");
const cartTotalValue = document.getElementById("cartTotalValue");
const checkoutCartBtn = document.getElementById("checkoutCartBtn");
const scrollTopBtn = document.getElementById("scrollTopBtn");

// عناصر المودال
const productModal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalProductImg = document.getElementById("modalProductImg");
const modalProductName = document.getElementById("modalProductName");
const modalProductEnglish = document.getElementById("modalProductEnglish");
const modalProductDesc = document.getElementById("modalProductDesc");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductBadge = document.getElementById("modalProductBadge");
const modalQtyValue = document.getElementById("modalQtyValue");
const qtyMinusBtn = document.getElementById("qtyMinusBtn");
const qtyPlusBtn = document.getElementById("qtyPlusBtn");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
const toastContainer = document.getElementById("toastContainer");

/**
 * ==========================================================================
 * وظائف تشغيل وتهيئة الموقع (Initialization & Event Listeners)
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. إخفاء شاشة التحميل بسلاسة بعد دقيقة من استقرار البنية
    setTimeout(() => {
        if (preloader) preloader.classList.add("fade-out");
    }, 800);

    // 2. استرجاع حالة المظهر المفضل وسلة الطلبات من ذاكرة التصفح المحلية Persistence
    initializeTheme();
    loadCartFromLocalStorage();

    // 3. بناء الواجهة التفاعلية للمنيو ديناميكياً
    renderMenuTabs();
    renderMenuProducts();

    // 4. تعيين كاشفات الأحداث لكل العناصر المتفاعلة
    registerEventHandlers();
    startCountdownTimer();
});

// إدارة تبديل الثيمات والوضع المظلم / الفاتح
function initializeTheme() {
    const savedTheme = localStorage.getItem("grill-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeToggleIcon(savedTheme);
}

function updateThemeToggleIcon(theme) {
    const icon = themeToggle.querySelector("i");
    if (theme === "light") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

function registerEventHandlers() {
    // شريط التنقل المتجاوب عند التمرير
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
            scrollTopBtn.classList.add("show");
        } else {
            mainHeader.classList.remove("scrolled");
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // تبديل الثيم
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("grill-theme", newTheme);
        updateThemeToggleIcon(newTheme);
        showToast(`تم تفعيل الوضع ${newTheme === 'dark' ? 'المظلم' : 'المضيء'} الفاخر`);
    });

    // التحكم بالقائمة الجانبية للموبايل
    mobileToggle.addEventListener("click", () => {
        mobileSidebar.classList.add("open");
        sidebarOverlay.classList.add("show");
    });

    const closeSidebarHandler = () => {
        mobileSidebar.classList.remove("open");
        sidebarOverlay.classList.remove("show");
    };
    closeSidebar.addEventListener("click", closeSidebarHandler);
    sidebarOverlay.addEventListener("click", closeSidebarHandler);
    
    // إغلاق الموبايل منيو عند الضغط على أي لينك داخلي
    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.addEventListener("click", closeSidebarHandler);
    });

    // التحكم بسلة المشتريات الجانبية
    cartTrigger.addEventListener("click", () => {
        cartDrawer.classList.add("open");
        cartOverlay.classList.add("show");
    });

    const closeCartHandler = () => {
        cartDrawer.classList.remove("open");
        cartOverlay.classList.remove("show");
    };
    closeCart.addEventListener("click", closeCartHandler);
    cartOverlay.addEventListener("click", closeCartHandler);

    // البحث الديناميكي السريع داخل المنيو بدون لاق (Real-time Search)
    menuSearchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderMenuProducts();
    });

    // فلترة الترتيب حسب السعر
    menuSortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderMenuProducts();
    });

    // التحكم بالكميات داخل المودال المنبثق
    qtyPlusBtn.addEventListener("click", () => {
        currentModalQty++;
        modalQtyValue.textContent = currentModalQty;
    });

    qtyMinusBtn.addEventListener("click", () => {
        if (currentModalQty > 1) {
            currentModalQty--;
            modalQtyValue.textContent = currentModalQty;
        }
    });

    // إضافة للمشتريات من داخل المودال نفسه
    modalAddToCartBtn.addEventListener("click", () => {
        if (selectedProductForModal) {
            addToCart(selectedProductForModal, currentModalQty);
            closeProductModal();
        }
    });

    // إغلاق المودال المنبثق
    closeModal.addEventListener("click", closeProductModal);
    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) closeProductModal();
    });

    // إرسال كود المشتريات المباشر عبر تطبيق واتساب لإنهاء المعاملة وتأكيد الطلب الفوري
    checkoutCartBtn.addEventListener("click", sendOrderToWhatsApp);

    // أكورديون الأسئلة الشائعة الفاخر (FAQ Toggles)
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.parentElement;
            item.classList.toggle("active");
        });
    });
}

/**
 * ==========================================================================
 * بناء وتهيئة عناصر المنيو التفاعلية ديناميكياً (Rendering UI)
 * ==========================================================================
 */
function renderMenuTabs() {
    menuTabsContainer.innerHTML = "";
    MENU_CATEGORIES.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = `menu-tab-btn ${activeCategory === cat.id ? 'active' : ''}`;
        btn.textContent = cat.name;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".menu-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = cat.id;
            renderMenuProducts();
        });
        menuTabsContainer.appendChild(btn);
    });
}

function renderMenuProducts() {
    menuProductsGrid.innerHTML = "";
    
    // 1. إجراء فلترة أولية حسب التصنيف والبحث المكتوب
    let filtered = MENU_DATABASE.filter(item => {
        const matchesCategory = activeCategory === "all" || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                              item.english.toLowerCase().includes(searchQuery) ||
                              item.desc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // 2. تطبيق خوارزمية فرز الترتيب
    if (currentSort === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    // 3. التحقق من خلو نتائج البحث لمنع تشويه التصميم
    if (filtered.length === 0) {
        menuProductsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-shrimp" style="font-size: 3rem; margin-bottom: 15px; color: var(--primary-bright);"></i>
                <p>عذراً، لم نجد أي صنف يطابق بحثك الحالي في مطبخ جريل!</p>
            </div>`;
        return;
    }

    // 4. توليد كروت الطعام دفعة واحدة بأداء فائق الكفاءة
    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        card.innerHTML = `
            <div>
                <div class="p-card-img-box">
                    ${product.badge ? `<span class="p-card-badge">${product.badge}</span>` : ''}
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                    <span class="p-card-rating"><i class="fa-solid fa-star"></i> 4.9</span>
                </div>
                <div class="p-card-content">
                    <div>
                        <h3>${product.name}</h3>
                        <div class="p-card-english">${product.english}</div>
                        <p class="p-card-desc">${product.desc}</p>
                    </div>
                </div>
            </div>
            <div style="padding: 0 25px 25px 25px;">
                <div class="p-card-footer">
                    <span class="p-card-price">${product.price} <small>ج.م</small></span>
                    <button class="add-to-cart-btn-mini" aria-label="أضف للسلة">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;

        // فتح مودال التفاصيل عند الضغط على الكارت عدا زر الإضافة السريع
        card.addEventListener("click", (e) => {
            if (!e.target.closest(".add-to-cart-btn-mini")) {
                openProductModal(product);
            }
        });

        // زر الإضافة السريع من الكارت مباشرة بقطعة واحدة كافتراضي
        card.querySelector(".add-to-cart-btn-mini").addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart(product, 1);
            
            // إضافة تأثير التموج المايكرو التفاعلي السريع Ripple Effect
            const btn = e.currentTarget;
            btn.style.transform = "scale(0.85)";
            setTimeout(() => btn.style.transform = "scale(1)", 150);
        });

        menuProductsGrid.appendChild(card);
    });
}

/**
 * ==========================================================================
 * محرك تسيير وإدارة سلة المشتريات (Cart Engine & Local Storage)
 * ==========================================================================
 */
function addToCart(product, quantity) {
    const existingIndex = currentCart.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
        currentCart[existingIndex].quantity += quantity;
    } else {
        currentCart.push({ product, quantity });
    }
    
    updateCartUI();
    saveCartToLocalStorage();
    showToast(`تمت إضافة ${quantity} × ${product.name} بنجاح لسلة طلباتك!`);
}

function removeFromCart(productId) {
    currentCart = currentCart.filter(item => item.product.id !== productId);
    updateCartUI();
    saveCartToLocalStorage();
}

function updateCartQty(productId, newQty) {
    const itemIndex = currentCart.findIndex(item => item.product.id === productId);
    if (itemIndex > -1) {
        if (newQty <= 0) {
            removeFromCart(productId);
        } else {
            currentCart[itemIndex].quantity = newQty;
            updateCartUI();
            saveCartToLocalStorage();
        }
    }
}

function updateCartUI() {
    // تحديث رقم الشارة العائم بالأعلى
    const totalCount = currentCart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;

    // إعادة بناء عناصر السلة داخل الدرج الجانبي
    cartDrawerItems.innerHTML = "";
    let totalPrice = 0;

    if (currentCart.length === 0) {
        cartDrawerItems.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding-top: 50px;">
                <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.3;"></i>
                <p>سلتك فارغة حالياً. تصفح منيو جريل واطلب ألذ الأكلات!</p>
            </div>`;
        cartTotalValue.textContent = "0 ج.م";
        return;
    }

    currentCart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        totalPrice += itemTotal;

        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <img src="${item.product.img}" alt="" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
            <div class="cart-item-info" style="flex-grow: 1;">
                <h4>${item.product.name}</h4>
                <span>${item.product.price} ج.م</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; background: var(--bg-surface); padding: 4px 8px; border-radius: 20px;">
                <button onclick="updateCartQty('${item.product.id}', ${item.quantity - 1})" style="background:transparent; border:none; color:var(--text-main); cursor:pointer;"><i class="fa-solid fa-minus" style="font-size: 0.8rem;"></i></button>
                <b style="font-size: 0.95rem;">${item.quantity}</b>
                <button onclick="updateCartQty('${item.product.id}', ${item.quantity + 1})" style="background:transparent; border:none; color:var(--text-main); cursor:pointer;"><i class="fa-solid fa-plus" style="font-size: 0.8rem;"></i></button>
            </div>
            <button onclick="removeFromCart('${item.product.id}')" style="background: transparent; border: none; color: var(--primary-bright); cursor: pointer; padding: 5px;"><i class="fa-solid fa-trash-can"></i></button>
        `;
        cartDrawerItems.appendChild(row);
    });

    cartTotalValue.textContent = `${totalPrice} ج.م`;
}

function saveCartToLocalStorage() {
    localStorage.setItem("grill-cart-data", JSON.stringify(currentCart));
}

function loadCartFromLocalStorage() {
    const raw = localStorage.getItem("grill-cart-data");
    if (raw) {
        try {
            currentCart = JSON.parse(raw);
            updateCartUI();
        } catch (e) {
            currentCart = [];
        }
    }
}

/**
 * ==========================================================================
 * نظام تفاصيل المنتج المنبثق والإشعارات السريعة (Modal & Toasts System)
 * ==========================================================================
 */
function openProductModal(product) {
    selectedProductForModal = product;
    currentModalQty = 1;
    modalQtyValue.textContent = currentModalQty;

    modalProductImg.src = product.img;
    modalProductImg.alt = product.name;
    modalProductName.textContent = product.name;
    modalProductEnglish.textContent = product.english;
    modalProductDesc.textContent = product.desc;
    modalProductPrice.textContent = `${product.price} ج.م`;
    
    if (product.badge) {
        modalProductBadge.textContent = product.badge;
        modalProductBadge.style.display = "inline-block";
    } else {
        modalProductBadge.style.display = "none";
    }

    productModal.classList.add("open");
}

function closeProductModal() {
    productModal.classList.remove("open");
    selectedProductForModal = null;
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * ==========================================================================
 * معالج إرسال الفاتورة عبر واتساب ونظام المؤقت (WhatsApp Integration)
 * ==========================================================================
 */
function sendOrderToWhatsApp() {
    if (currentCart.length === 0) {
        showToast("يرجى إضافة وجبات للسلة أولاً قبل الإرسال!");
        return;
    }

    let messageText = "🔥 *طلب شراء جديد من موقع مطعم جريل (Grill)* 🔥\n\n";
    let grandTotal = 0;

    currentCart.forEach((item, index) => {
        const rowCost = item.product.price * item.quantity;
        grandTotal += rowCost;
        messageText += `${index + 1}. *${item.product.name}*\n`;
        messageText += `   الكمية: ${item.quantity} × السعر: ${item.product.price} ج.م = [${rowCost} ج.م]\n\n`;
    });

    messageText += `--------------------------------\n`;
    messageText += `💰 *إجمالي الحساب الكلي:* ${grandTotal} ج.م\n\n`;
    messageText += `📍 *الرجاء تأكيد استلام الطلب وتجهيز الدليفري للمنشأة/سوهاج.*`;

    // ترميز النص البرمجي ليكون متوافقاً مع روابط الويب المشفرة URL Encoding
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/201277715490?text=${encodedText}`;

    // فتح واجهة إرسال الرسالة للمطعم مباشرة في لسان جديد بالمتصفح
    window.open(whatsappUrl, "_blank");
}

// نظام العداد التنازلي للعروض الترويجية لجذب اهتمام الزائر العاطفي ومضاعفة المبيعات
function startCountdownTimer() {
    let hours = 2;
    let minutes = 45;
    let seconds = 0;

    const hElem = document.getElementById("timer-hours");
    const mElem = document.getElementById("timer-mins");

    if(!hElem || !mElem) return;

    setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }
        hElem.textContent = String(hours).padStart(2, '0');
        mElem.textContent = String(minutes).padStart(2, '0');
    }, 1000);
}
