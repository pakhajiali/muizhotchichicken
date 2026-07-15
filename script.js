/* ==============================================================
   DATA – Full Menu
   ============================================================== */
const MENU_DATA = [{
    category: "Most Ordered",
    items: [
        { name: "Nasi Kandar Muiz Hot Chicken", desc: "Nasi kandar with signature Muiz hot chicken & rich curry sauce.",
            price: 6.90, img: "images/nasikandarmuizchicken.webp" },
        { name: "Nasi Ayam Muiz Chicken", desc: "Aromatic chicken rice with tender Muiz-style fried chicken, sambal.",
            price: 8.90, img: "images/nasiayammuizchicken.webp" },
        { name: "Nasi Bujang", desc: "White Rice + Omelette + Soup + Sambal", price: 3.90,
            img: "images/nasibujang.webp" },
        { name: "Bakso", desc: "Authentic Indonesian beef meatball soup with savoury broth.", price: 5.90,
            img: "images/bakso.webp" },
        { name: "Mee Pak Haji Ali", desc: "Traditional recipe. Savoury noodles with special house blend.",
            price: 6.90, img: "images/meepakhajiali.webp" }
    ]
}, {
    category: "Muiz Hot Chicken Regular Box",
    items: [
        { name: "Original Regular Box", desc: "2 Pieces of Muiz Hot Chicken 🍗", price: 10.00,
            img: "images/originalregularbox.webp" },
        { name: "Cheese Regular Box", desc: "2 Pieces + Cheese Sauce", price: 12.00,
            img: "images/cheeseregularbox.webp" },
        { name: "Korean Spicy Regular Box", desc: "2 Pieces + Korean Spicy Sauce", price: 13.00,
            img: "images/koreanspicyregularbox.webp" },
        { name: "Korean Cheese Regular Box", desc: "2 Pieces + Cheese + Korean Spicy", price: 14.00,
            img: "images/koreancheeseregularbox.webp" }
    ]
}, {
    category: "Muiz Hot Chicken Happy Box",
    items: [
        { name: "Original Happy Box", desc: "5 Pieces of Muiz Hot Chicken 🍗", price: 25.00,
            img: "images/originalhappybox.webp" },
        { name: "Cheese Happy Box", desc: "5 Pieces + 2 Cheese Sauce", price: 29.00,
            img: "images/cheesehappybox.webp" },
        { name: "Korean Spicy Happy Box", desc: "5 Pieces + 2 Korean Spicy", price: 31.00,
            img: "images/koreanspicyhappybox.webp" },
        { name: "Korean Cheese Happy Box", desc: "5 Pieces + Cheese + Korean Spicy", price: 33.00,
            img: "images/koreancheesehappybox.webp" }
    ]
}, {
    category: "Chicken Tenders",
    items: [
        { name: "Chicken Tenders", desc: "Choose flavour: Mala • Peri-Peri • Thai Lime • Charcoal",
            price: 9.90, img: "images/chickentenders.webp" }
    ]
}, {
    category: "Nasi Penyet",
    items: [
        { name: "Nasi Ayam Muiz Penyet", desc: "Smashed chicken with sambal, served with rice.", price: 8.90,
            img: "images/nasiayammuizpenyet.webp" },
        { name: "Nasi Daging Penyet", desc: "Smashed beef with sambal, served with rice.", price: 8.90,
            img: "images/nasidagingpenyet.webp" },
        { name: "Nasi Ikan Keli Penyet", desc: "Smashed catfish with sambal, served with rice.",
            price: 8.90, img: "images/nasiikankelipenyet.webp" },
        { name: "Nasi Ikan Kembung Penyet", desc: "Smashed mackerel with sambal, served with rice.",
            price: 8.90, img: "images/nasiikankembungpenyet.webp" }
    ]
}, {
    category: "Nasi Goreng Kampung",
    items: [
        { name: "Nasi Goreng Kampung", desc: "Classic village-style fried rice", price: 7.50,
            img: "images/nasigorengkampung.webp" },
        { name: "Nasi Goreng Kampung Ayam", desc: "With chicken", price: 11.90,
            img: "images/nasigorengkampungayam.webp" },
        { name: "Nasi Goreng Kampung Daging", desc: "With beef", price: 11.90,
            img: "images/nasigorengkampungdaging.webp" },
        { name: "Nasi Goreng Kampung Seafood", desc: "With seafood", price: 13.90,
            img: "images/nasigorengkampungseafood.webp" }
    ]
}, {
    category: "Nasi Goreng Cina",
    items: [
        { name: "Nasi Goreng Cina", desc: "Classic Chinese fried rice", price: 6.00,
            img: "images/nasigorengcina.webp" },
        { name: "Nasi Goreng Cina Ayam", desc: "With chicken", price: 10.90,
            img: "images/nasigorengcinaayam.webp" },
        { name: "Nasi Goreng Cina Daging", desc: "With beef", price: 10.90,
            img: "images/nasigorengcinadaging.webp" },
        { name: "Nasi Goreng Cina Seafood", desc: "With seafood", price: 12.90,
            img: "images/nasigorengcinaseafood.webp" }
    ]
}, {
    category: "Nasi Goreng Tomyam",
    items: [
        { name: "Nasi Goreng Tomyam Biasa", desc: "Tomyam fried rice", price: 8.50,
            img: "images/nasigorengtomyambiasa.webp" },
        { name: "Nasi Goreng Tomyam Ayam", desc: "With chicken", price: 12.90,
            img: "images/nasigorengtomyamayam.webp" },
        { name: "Nasi Goreng Tomyam Daging", desc: "With beef", price: 12.90,
            img: "images/nasigorengtomyamdaging.webp" },
        { name: "Nasi Goreng Tomyam Seafood", desc: "With seafood", price: 14.90,
            img: "images/nasigorengtomyamseafood.webp" }
    ]
}, {
    category: "Nasi Goreng",
    items: [
        { name: "Nasi Goreng Vegetarian", desc: "Vegetarian fried rice with fresh vegetables.", price: 6.00,
            img: "images/nasigorengvegetarian.webp" },
        { name: "Nasi Goreng Biasa", desc: "Classic plain fried rice.", price: 6.50,
            img: "images/nasigorengbiasa.webp" },
        { name: "Nasi Goreng Cili Api", desc: "Spicy fried rice with bird's eye chili.", price: 6.50,
            img: "images/nasigorengciliapi.webp" },
        { name: "Nasi Goreng Kicap", desc: "Fried rice with sweet soy sauce.", price: 6.80,
            img: "images/nasigorengkicap.webp" },
        { name: "Nasi Goreng Mamak", desc: "Mamak-style fried rice with aromatic spices.", price: 7.00,
            img: "images/nasigorengmamak.webp" },
        { name: "Nasi Goreng Belacan", desc: "Fried rice with shrimp paste for a savoury kick.",
            price: 7.00, img: "images/nasigorengbelacan.webp" },
        { name: "Nasi Goreng Ikan Bilis", desc: "Fried rice with crispy anchovies.", price: 7.50,
            img: "images/nasigorengikanbilis.webp" },
        { name: "Nasi Goreng Sardin", desc: "Fried rice with sardines in spicy sauce.", price: 8.50,
            img: "images/nasigorengsardin.webp" },
        { name: "Nasi Goreng Pattaya", desc: "Fried rice wrapped in a thin egg omelette.", price: 8.50,
            img: "images/nasigorengpattaya.webp" },
        { name: "Nasi Goreng Ikan Masin", desc: "Fried rice with salted fish for a savoury flavour.",
            price: 9.00, img: "images/nasigorengikanmasin.webp" },
        { name: "Nasi Goreng Ayam", desc: "Fried rice with chicken pieces.", price: 9.50,
            img: "images/nasigorengayam.webp" },
        { name: "Nasi Goreng Daging", desc: "Fried rice with beef pieces.", price: 9.80,
            img: "images/nasigorengdaging.webp" },
        { name: "Nasi Goreng Paprik", desc: "Fried rice with spicy paprik sauce.", price: 10.50,
            img: "images/nasigorengpaprik.webp" },
        { name: "Nasi Goreng Masak Kunyit", desc: "Fried rice with turmeric for a fragrant flavour.",
            price: 10.50, img: "images/nasigorengmasakkunyit.webp" },
        { name: "Nasi Goreng Seafood", desc: "Fried rice with prawns and squid.", price: 12.00,
            img: "images/nasigorengseafood.webp" },
        { name: "Nasi Goreng USA", desc: "Chicken or Beef", price: 12.50, img: "images/nasigorengusa.webp" }
    ]
}, {
    category: "Ala Carte",
    items: [
        { name: "Nasi Putih", desc: "White rice.", price: 2.00, img: "images/nasiputih.webp" },
        { name: "Telur Mata", desc: "Sunny side up egg.", price: 1.50, img: "images/telurmata.webp" },
        { name: "Telur Dadar", desc: "Omelette egg.", price: 2.50, img: "images/telurdadar.webp" },
        { name: "Telur Separuh Masak", desc: "Half-boiled egg.", price: 3.00, img: "images/telurseparuhmasak.webp" },
        { name: "Telur Dadar Cheese", desc: "Omelette egg with cheese.", price: 4.50,
            img: "images/telurdadarcheese.webp" },
        { name: "Muiz Hot Chicken", desc: "Signature crispy fried chicken.", price: 5.00,
            img: "images/muizhotchicken.webp" },
        { name: "Ikan Kembung Goreng", desc: "Fried mackerel fish.", price: 5.50,
            img: "images/ikankembunggoreng.webp" },
        { name: "Ikan Keli Goreng", desc: "Fried catfish.", price: 5.90, img: "images/ikankeligoreng.webp" },
        { name: "Ayam Masak Kunyit", desc: "Chicken cooked with turmeric.", price: 6.90,
            img: "images/ayammasakkunyit.webp" },
        { name: "Daging Masak Kunyit", desc: "Beef cooked with turmeric.", price: 6.90,
            img: "images/dagingmasakkunyit.webp" },
        { name: "Ayam Masak Merah", desc: "Chicken cooked in spicy red sauce.", price: 6.90,
            img: "images/ayammasakmerah.webp" },
        { name: "Daging Masak Merah", desc: "Beef cooked in spicy red sauce.", price: 6.90,
            img: "images/dagingmasakmerah.webp" },
        { name: "Sup Sayur", desc: "Vegetable soup.", price: 5.00, img: "images/supsayur.webp" },
        { name: "Sup Ayam", desc: "Chicken soup.", price: 8.00, img: "images/supayam.webp" },
        { name: "Sup Daging", desc: "Beef soup.", price: 8.00, img: "images/supdaging.webp" },
        { name: "Tomyam Ayam", desc: "Spicy and sour tomyam soup with chicken.", price: 8.90,
            img: "images/tomyamayam.webp" },
        { name: "Tomyam Daging", desc: "Spicy and sour tomyam soup with beef.", price: 8.90,
            img: "images/tomyamdaging.webp" },
        { name: "Tomyam Seafood", desc: "Spicy and sour tomyam soup with prawns and squid.",
            price: 11.90, img: "images/tomyamseafood.webp" }
    ]
}];

const REVIEWS = [
    { name: "salleh akhnas", text: "Cheap and worth the price... the food is delicious too" },
    { name: "Yana Mazlan", text: "Friendly owner, the chicken muiz is unspeakably delicious, thank you." },
    { name: "Christina", text: "The chicken is delicious and big, the service is good and friendly, you can choose the part of the chicken you want." },
    { name: "Siti Nur Alia", text: "Muiz chicken is delicious and crispy. The cheese sauce is delicious and goes well with the muiz fried chicken." },
    { name: "Rocket Man", text: "This is newly opened mamak restaurant next to Good Year Court 6. The foods are delicious." },
    { name: "azri syafiqq", text: "Fast service, good ambience and amazing food" },
    { name: "Assila Emir", text: "Chicken is very delicious, tender and crispy at the same time." }
];

/* ==============================================================
   STATE
   ============================================================== */
let cart = [];
let orders = [];
let currentPage = 'home';
let currentCategory = 'All';
let modalData = null;
let modalQty = 1;

const FLAT_MENU = MENU_DATA.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));
const CATEGORIES = ['All', ...MENU_DATA.map(c => c.category)];

/* ==============================================================
   HELPERS
   ============================================================== */
function fmt(price) { return 'RM' + price.toFixed(2); }

function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove('show'), 2200);
}

function saveCart() {
    localStorage.setItem('pwa_cart', JSON.stringify(cart));
    updateBadges();
}

function loadCart() {
    try {
        const d = localStorage.getItem('pwa_cart');
        if (d) cart = JSON.parse(d);
    } catch (_) { cart = []; }
    if (!Array.isArray(cart)) cart = [];
    updateBadges();
}

function saveOrders() {
    localStorage.setItem('pwa_orders', JSON.stringify(orders));
}

function loadOrders() {
    try {
        const d = localStorage.getItem('pwa_orders');
        if (d) orders = JSON.parse(d);
    } catch (_) { orders = []; }
    if (!Array.isArray(orders)) orders = [];
}

function updateBadges() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById('headerCartBadge').textContent = total;
    document.getElementById('navCartBadge').textContent = total;
    document.getElementById('navCartBadge').style.display = total > 0 ? 'flex' : 'none';
    document.getElementById('headerCartBadge').style.display = total > 0 ? 'flex' : 'none';
}

function getCartTotal() {
    return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

/* ==============================================================
   RENDER: Featured
   ============================================================== */
function renderFeatured() {
    const container = document.getElementById('featuredScroll');
    const featured = FLAT_MENU.slice(0, 8);
    container.innerHTML = featured.map(item => `
        <div class="featured-card" data-name="${escapeHtml(item.name)}" data-price="${item.price}" data-img="${item.img}" data-desc="${escapeHtml(item.desc)}">
            <img src="${item.img}" alt="${escapeHtml(item.name)}" loading="lazy" />
            <h4>${escapeHtml(item.name)}</h4>
            <div class="price">${fmt(item.price)}</div>
            <button class="add-btn" data-name="${escapeHtml(item.name)}" data-price="${item.price}" data-img="${item.img}" data-desc="${escapeHtml(item.desc)}">+ Add</button>
        </div>
    `).join('');

    container.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.featured-card');
            openModal({
                name: card.dataset.name,
                price: parseFloat(card.dataset.price),
                img: card.dataset.img,
                desc: card.dataset.desc
            });
        });
    });

    container.querySelectorAll('.featured-card').forEach(card => {
        card.addEventListener('click', () => {
            openModal({
                name: card.dataset.name,
                price: parseFloat(card.dataset.price),
                img: card.dataset.img,
                desc: card.dataset.desc
            });
        });
    });
}

/* ==============================================================
   RENDER: Reviews
   ============================================================== */
function renderReviews() {
    const container = document.getElementById('reviewScroll');
    container.innerHTML = REVIEWS.map(r => `
        <div class="review-card">
            <div class="avatar">${escapeHtml(r.name.charAt(0))}</div>
            <div class="name">${escapeHtml(r.name)}</div>
            <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <div class="text">"${escapeHtml(r.text)}"</div>
        </div>
    `).join('');
}

/* ==============================================================
   RENDER: Menu
   ============================================================== */
function renderCategories() {
    const container = document.getElementById('menuCategories');
    container.innerHTML = CATEGORIES.map(cat => `
        <button class="${cat === currentCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>
    `).join('');
    container.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.cat;
            renderCategories();
            renderMenuGrid();
        });
    });
}

function renderMenuGrid() {
    const container = document.getElementById('menuGrid');
    let items = FLAT_MENU;
    if (currentCategory !== 'All') {
        items = FLAT_MENU.filter(i => i.category === currentCategory);
    }
    if (items.length === 0) {
        container.innerHTML =
            `<div style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--text-tertiary);">No items in this category</div>`;
        return;
    }
    container.innerHTML = items.map(item => `
        <div class="menu-item" data-name="${escapeHtml(item.name)}" data-price="${item.price}" data-img="${item.img}" data-desc="${escapeHtml(item.desc)}">
            <img src="${item.img}" alt="${escapeHtml(item.name)}" loading="lazy" />
            <h4>${escapeHtml(item.name)}</h4>
            <div class="desc">${escapeHtml(item.desc)}</div>
            <div class="bottom">
                <span class="price">${fmt(item.price)}</span>
                <button class="add-small" data-name="${escapeHtml(item.name)}" data-price="${item.price}" data-img="${item.img}" data-desc="${escapeHtml(item.desc)}">Add</button>
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.menu-item').forEach(el => {
        el.addEventListener('click', () => {
            openModal({
                name: el.dataset.name,
                price: parseFloat(el.dataset.price),
                img: el.dataset.img,
                desc: el.dataset.desc
            });
        });
    });
    container.querySelectorAll('.add-small').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const el = btn.closest('.menu-item');
            openModal({
                name: el.dataset.name,
                price: parseFloat(el.dataset.price),
                img: el.dataset.img,
                desc: el.dataset.desc
            });
        });
    });
}

/* ==============================================================
   RENDER: Cart
   ============================================================== */
function renderCart() {
    const container = document.getElementById('cartContent');
    const sub = document.getElementById('cartSub');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Add some delicious items from our menu!</p>
            </div>
        `;
        sub.textContent = 'Add items to get started';
        return;
    }

    let html = `<div class="cart-list">`;
    cart.forEach((item, idx) => {
        html += `
            <div class="cart-item-card">
                <img src="${item.img || 'images/placeholder.webp'}" alt="${escapeHtml(item.name)}" loading="lazy" />
                <div class="info">
                    <h4>${escapeHtml(item.name)}</h4>
                    <div class="price">${fmt(item.price)}</div>
                    ${item.request ? `<div class="request">📝 ${escapeHtml(item.request)}</div>` : ''}
                </div>
                <div class="controls">
                    <button class="qty-dec" data-idx="${idx}">−</button>
                    <span class="qty">${item.qty}</span>
                    <button class="qty-inc" data-idx="${idx}">+</button>
                    <button class="remove" data-idx="${idx}">✕</button>
                </div>
            </div>
        `;
    });
    html += `</div>`;

    const total = getCartTotal();
    html += `
        <div class="cart-summary">
            <div class="row"><span>Subtotal</span><span>${fmt(total)}</span></div>
            <div class="row total"><span>Total</span><span class="amount">${fmt(total)}</span></div>
            <button class="checkout-btn" id="cartCheckoutBtn"><i class="fab fa-whatsapp"></i> Order via WhatsApp</button>
        </div>
    `;

    container.innerHTML = html;
    sub.textContent = `${cart.reduce((s,i) => s + i.qty, 0)} item(s) in cart`;

     // Event listeners
    container.querySelectorAll('.qty-dec').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            if (cart[idx].qty > 1) { cart[idx].qty--; } else { cart.splice(idx, 1); }
            saveCart();
            renderCart();
            updateBadges();
        });
    });
    container.querySelectorAll('.qty-inc').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            cart[idx].qty++;
            saveCart();
            renderCart();
            updateBadges();
        });
    });
    container.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            cart.splice(idx, 1);
            saveCart();
            renderCart();
            updateBadges();
        });
    });

    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) { toast('Cart is empty'); return; }
            placeOrder();
        });
    }
}

/* ==============================================================
   RENDER: Orders
   ============================================================== */
function renderOrders() {
    const container = document.getElementById('ordersContent');
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="order-empty">
                <i class="fas fa-clock-rotate-left"></i>
                <h3>No orders yet</h3>
                <p>Your order history will appear here</p>
            </div>
        `;
        return;
    }
    container.innerHTML = orders.map((order, idx) => `
        <div class="order-card">
            <div class="top">
                <span class="date">${order.date || 'Order #' + (idx+1)}</span>
                <span class="status">✓ Completed</span>
            </div>
            <div class="items">${order.items.map(i => `${i.name} x${i.qty}`).join(' • ')}</div>
            <div class="total">${fmt(order.total)}</div>
        </div>
    `).join('');
}

/* ==============================================================
   MODAL
   ============================================================== */
function openModal(product) {
    modalData = product;
    modalQty = 1;
    document.getElementById('modalImg').src = product.img || 'images/placeholder.webp';
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalDesc').textContent = product.desc || '';
    document.getElementById('modalPrice').textContent = fmt(product.price);
    document.getElementById('modalQty').value = 1;
    document.getElementById('modalRequest').value = '';
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    updateModalWaLink(product);
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
    modalData = null;
}

function updateModalWaLink(product) {
    const qty = parseInt(document.getElementById('modalQty').value) || 1;
    const request = document.getElementById('modalRequest').value.trim();
    const total = product.price * qty;
    let msg = `Hi, I'd like to order: ${product.name} x${qty} (${fmt(total)}) from Restoran Pak Haji Ali & Muiz Hot Chicken - Subang Jaya (USJ 8).`;
    if (request) msg += `\n📝 Special: ${request}`;
    document.getElementById('modalWaBtn').href =
        `https://wa.me/60179081447?text=${encodeURIComponent(msg)}`;
}

function addFromModal() {
    if (!modalData) return;
    const qty = parseInt(document.getElementById('modalQty').value) || 1;
    const request = document.getElementById('modalRequest').value.trim();
    const existing = cart.findIndex(i => i.name === modalData.name && i.request === request);
    if (existing !== -1) {
        cart[existing].qty += qty;
    } else {
        cart.push({
            name: modalData.name,
            price: modalData.price,
            qty: qty,
            img: modalData.img,
            request: request
        });
    }
    saveCart();
    renderCart();
    updateBadges();
    closeModal();
    toast(`Added ${modalData.name} x${qty} to cart`);
}

/* ==============================================================
   PLACE ORDER (checkout)
   ============================================================== */
function placeOrder() {
    if (cart.length === 0) { toast('Cart is empty'); return; }
    const total = getCartTotal();
    let msg = 'Hi, I want to place an order from Restoran Pak Haji Ali & Muiz Hot Chicken - Subang Jaya (USJ 8):\n\n';
    cart.forEach(item => {
        msg += `🍗 ${item.name} x${item.qty} = ${fmt(item.price * item.qty)}`;
        if (item.request) msg += `\n   📝 Special: ${item.request}`;
        msg += '\n';
    });
    msg += `\n━━━━━━━━━━━━━━━━\nTotal: ${fmt(total)}`;
    msg += `\n\nPlease confirm my order. Thank you! 🙏`;

    // Save order
    orders.push({
        date: new Date().toLocaleString('en-MY', { day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit' }),
        items: cart.map(i => ({ name: i.name, qty: i.qty })),
        total: total
    });
    saveOrders();
    renderOrders();

    // Clear cart
    cart = [];
    saveCart();
    renderCart();
    updateBadges();

    // Open WhatsApp
    window.open(`https://wa.me/60179081447?text=${encodeURIComponent(msg)}`, '_blank');
    toast('Order placed! Redirecting to WhatsApp...');
    // Switch to orders tab
    switchPage('orders');
}

/* ==============================================================
   NAVIGATION
   ============================================================== */
function switchPage(pageId) {
    currentPage = pageId;
    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
    const target = document.querySelector(`.page[data-page="${pageId}"]`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.bottom-nav button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === pageId);
        btn.setAttribute('aria-selected', btn.dataset.page === pageId ? 'true' : 'false');
    });

    // Render content on switch
    if (pageId === 'cart') renderCart();
    if (pageId === 'orders') renderOrders();
    if (pageId === 'menu') { renderCategories();
        renderMenuGrid(); }
    if (pageId === 'home') { renderFeatured();
        renderReviews(); }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==============================================================
   INIT
   ============================================================== */
document.addEventListener('DOMContentLoaded', function() {

    loadCart();
    loadOrders();

    // Render all
    renderFeatured();
    renderReviews();
    renderCategories();
    renderMenuGrid();
    renderCart();
    renderOrders();
    updateBadges();

    // Bottom nav
    document.querySelectorAll('.bottom-nav button').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            if (page === 'cart') renderCart();
            if (page === 'orders') renderOrders();
            switchPage(page);
        });
    });

    // Header cart button
    document.getElementById('headerCartBtn').addEventListener('click', () => {
        renderCart();
        switchPage('cart');
    });

    // Hero menu button
    document.getElementById('heroMenuBtn').addEventListener('click', (e) => {
        e.preventDefault();
        switchPage('menu');
    });

    // Modal events
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    document.getElementById('modalQtyMinus').addEventListener('click', () => {
        let v = parseInt(document.getElementById('modalQty').value) || 1;
        if (v > 1) v--;
        document.getElementById('modalQty').value = v;
        if (modalData) updateModalWaLink(modalData);
    });
    document.getElementById('modalQtyPlus').addEventListener('click', () => {
        let v = parseInt(document.getElementById('modalQty').value) || 1;
        v++;
        document.getElementById('modalQty').value = v;
        if (modalData) updateModalWaLink(modalData);
    });
    document.getElementById('modalQty').addEventListener('change', () => {
        let v = parseInt(document.getElementById('modalQty').value) || 1;
        if (v < 1) v = 1;
        document.getElementById('modalQty').value = v;
        if (modalData) updateModalWaLink(modalData);
    });
    document.getElementById('modalRequest').addEventListener('input', () => {
        if (modalData) updateModalWaLink(modalData);
    });
    document.getElementById('modalAddCart').addEventListener('click', addFromModal);

    // Keyboard escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Close modal on swipe down (simple touch)
    let startY = 0;
    const sheet = document.getElementById('modalSheet');
    const overlay = document.getElementById('modalOverlay');
    sheet.addEventListener('touchstart', (e) => { startY = e.touches[0].clientY; });
    sheet.addEventListener('touchmove', (e) => {
        const dy = e.touches[0].clientY - startY;
        if (dy > 60) { closeModal(); }
    }, { passive: true });

    // Set default page
    switchPage('home');

    console.log('🍗 Restoran Pak Haji Ali & Muiz Hot Chicken – PWA ready');
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('✅ Service Worker registered'))
    .catch(err => console.warn('SW registration failed:', err));
}
