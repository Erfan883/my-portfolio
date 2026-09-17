// ========== داده محصولات ==========
const PRODUCTS = [
  {
    id: 'p1', name: 'کتونی «آسفالت»', desc: 'کتونی بوم‌دار با زیره ضدسر خوردن، برای پیاده‌روی شبانه.',
    long: 'زیره EVA فوق‌سبک، رویه از بوم ضدآب و بندهای بازتاب‌دهنده نور برای دیده‌شدن تو شب. یه کتونی که پا به پای شب‌های شهر میاد.',
    features: ['زیره ضدسر خوردن EVA', 'رویه بوم ضدآب', 'بندهای بازتاب‌دهنده نور', 'سایزبندی ۳۸ تا ۴۴'],
    price: 2450000, oldPrice: null, tag: 'جدید', icon: 'sneaker', image: 'images/sneaker.jpg', category: 'کفش',
    reviews: [
      { name: 'سینا', rating: 5, text: 'راحته و شبا با اون رفلکتیو حسابی دیده می‌شم. زیرشم فوق‌العاده نرمه.' },
      { name: 'مریم', rating: 4, text: 'کیفیت خوبه فقط سایزش یه‌کم بزرگ می‌زنه، یه سایز کوچیک‌تر بگیرید.' }
    ]
  },
  {
    id: 'p2', name: 'هودی «مه‌شب»', desc: 'هودی اورسایز، پارچه فرنچ‌تری ۳۵۰ گرمی.',
    long: 'پارچه فرنچ‌تری ۳۵۰ گرمی با داخل پرزدار برای گرمای زمستون. برش اورسایز که رو هر هیکلی خوب می‌شینه.',
    features: ['فرنچ‌تری ۳۵۰ گرمی', 'برش اورسایز', 'جیب کانگورویی', 'سایز فری'],
    price: 1180000, oldPrice: null, tag: null, icon: 'hoodie', image: 'images/hoodie.jpg', category: 'هودی',
    reviews: [
      { name: 'پویا', rating: 5, text: 'یه سال هرهفته پوشیدمش هنوز مثل روز اوله. پارچه‌ش محشره.' },
      { name: 'نگار', rating: 5, text: 'اورسایزش دقیقاً همونیه که می‌خواستم، گرمم می‌کنه بدون این‌که سنگین باشه.' },
      { name: 'آرش', rating: 4, text: 'رنگش کمی با عکس فرق داشت ولی از کیفیتش راضیم.' }
    ]
  },
  {
    id: 'p3', name: 'کلاه «سیمانی»', desc: 'کپ پنج‌پارچه با گلدوزی برجسته لوگو.',
    long: 'کپ پنج‌پارچه با گلدوزی برجسته روی پیشونی و بند تنظیم پشت؛ برای روزهایی که موهات حوصله نداره.',
    features: ['گلدوزی برجسته', 'بند تنظیم پشت', 'سایز فری'],
    price: 420000, oldPrice: 520000, tag: 'تخفیف', icon: 'cap', image: 'images/cap.jpg', category: 'کلاه',
    reviews: [
      { name: 'الهام', rating: 5, text: 'گلدوزیش خیلی شیکه، بند تنظیمش هم راحته.' },
      { name: 'کیان', rating: 4, text: 'خوبه، فقط کاش رنگ بیشتری داشت.' }
    ]
  },
  {
    id: 'p4', name: 'کاپشن «بارون تهرون»', desc: 'کاپشن ضدآب با آستر پشمی جدا شدنی.',
    long: 'کاپشن دولایه ضدآب با آستر پشمی جداشدنی؛ یعنی از پاییز تا زمستون همراهته.',
    features: ['پارچه ضدآب دولایه', 'آستر پشمی جداشدنی', 'کلاه‌دار', 'سایزبندی S تا XL'],
    price: 3200000, oldPrice: null, tag: null, icon: 'jacket', image: 'images/jacket.jpg', category: 'کاپشن',
    reviews: [
      { name: 'بهراد', rating: 5, text: 'تو بارون تهرون امتحانش کردم، یه قطره آب رد نکرد. آستر پشمیشم عالیه.' },
      { name: 'ستاره', rating: 4, text: 'گرمه و شیکه، یه‌کم سنگینه ولی ارزششو داره.' }
    ]
  },
  {
    id: 'p5', name: 'تیشرت «خط‌خطی»', desc: 'تیشرت نخ کوهی با چاپ دستی پشت.',
    long: 'تیشرت نخ کوهی سنگین با چاپ دستی روی پشت؛ هر تیکه یه‌کم با بقیه فرق داره.',
    features: ['نخ کوهی ۲۴۰ گرمی', 'چاپ دستی', 'سایزبندی S تا XL'],
    price: 590000, oldPrice: null, tag: 'جدید', icon: 'tee', image: 'images/tee.jpg', category: 'تیشرت',
    reviews: [
      { name: 'دانیال', rating: 5, text: 'چاپش دست‌ساز واقعا حس خاصی داره، از همه لباسام متمایزه.' },
      { name: 'یاسمن', rating: 4, text: 'پارچه خوبیه، بعد شست‌وشو هم رنگش ثابت موند.' }
    ]
  },
  {
    id: 'p6', name: 'کوله «ریل»', desc: 'کوله ضدآب با جای لپ‌تاپ و بند تقویت‌شده.',
    long: 'کوله ضدآب با جا برای لپ‌تاپ ۱۵ اینچ و بند شونه تقویت‌شده برای مسیرهای طولانی.',
    features: ['ضدآب', 'جای لپ‌تاپ ۱۵ اینچ', 'بند شونه تقویت‌شده'],
    price: 980000, oldPrice: null, tag: null, icon: 'backpack', image: 'images/backpack.jpg', category: 'کوله',
    reviews: [
      { name: 'امید', rating: 5, text: 'جا لپ‌تاپش دقیقا اندازه‌ست، بند شونه‌هاشم اصلا اذیت نمی‌کنه.' },
      { name: 'ترانه', rating: 4, text: 'ظرفیتش خوبه، فقط کاش یه رنگ روشن‌تر هم داشت.' }
    ]
  }
];

// ========== آیکن‌های خطی محصول ==========
const ICONS = {
  sneaker: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><path d="M10 68 C15 55,28 52,40 55 L52 40 C60 32,72 30,82 35 L90 55 C93 62,90 70,82 70 L15 70 C11 70,10 69,10 68Z"/><path d="M40 55 L46 70 M56 47 L60 70 M70 42 L74 70" stroke-linecap="round"/></svg>`,
  hoodie: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><path d="M30 20 C30 12,70 12,70 20 L70 26 L86 40 L78 50 L70 42 L70 82 L30 82 L30 42 L22 50 L14 40 L30 26Z"/><path d="M42 20 C42 30,58 30,58 20" /></svg>`,
  cap: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 55 C20 35,38 22,50 22 C62 22,80 35,80 55" /><path d="M14 58 C30 66,70 66,86 58 L82 50 C68 56,32 56,18 50Z"/><circle cx="50" cy="30" r="2.5" fill="currentColor" stroke="none"/></svg>`,
  jacket: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><path d="M35 18 L50 28 L65 18 L82 30 L74 42 L68 36 L68 84 L32 84 L32 36 L26 42 L18 30Z"/><line x1="50" y1="30" x2="50" y2="84"/><circle cx="44" cy="45" r="1.6" fill="currentColor" stroke="none"/><circle cx="44" cy="58" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  tee: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><path d="M35 20 L50 28 L65 20 L84 32 L76 46 L68 40 L68 82 L32 82 L32 40 L24 46 L16 32Z"/><path d="M40 55 L60 55 M40 65 L58 65" stroke="currentColor" opacity=".5"/></svg>`,
  backpack: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3"><rect x="26" y="30" width="48" height="55" rx="10"/><path d="M36 30 L36 18 C36 12,64 12,64 18 L64 30" /><rect x="38" y="45" width="24" height="16" rx="3"/><line x1="26" y1="42" x2="18" y2="46"/><line x1="74" y1="42" x2="82" y2="46"/></svg>`
};

const money = n => n.toLocaleString('fa-IR') + ' تومان';

function avgRating(p){
  if(!p.reviews.length) return 0;
  return p.reviews.reduce((sum, r) => sum + r.rating, 0) / p.reviews.length;
}
function starString(rating){
  const rounded = Math.round(rating);
  return '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
}
function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
function renderReviews(p){
  const listEl = document.getElementById('pmReviews');
  if(!p.reviews.length){
    listEl.innerHTML = '<p class="reviews-empty">هنوز نظری ثبت نشده. اولین نفر باش.</p>';
    return;
  }
  listEl.innerHTML = p.reviews.map(r => `
    <div class="review-item">
      <div class="review-item__head">
        <span class="review-item__name">${escapeHtml(r.name)}</span>
        <span class="review-item__stars">${starString(r.rating)}</span>
      </div>
      <p class="review-item__text">${escapeHtml(r.text)}</p>
    </div>
  `).join('');
}

// ========== وضعیت سبد خرید (در حافظه) ==========
const cart = {}; // { id: qty }

// ========== رندر محصولات ==========
const productGrid = document.getElementById('productGrid');

let activeCategory = null;
let searchQuery = '';

function renderProducts(){
  let list = activeCategory ? PRODUCTS.filter(p => p.category === activeCategory) : PRODUCTS;
  if(searchQuery){
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }

  productGrid.innerHTML = list.length ? list.map(p => `
    <article class="card" data-id="${p.id}">
      <div class="card__media" data-open="${p.id}">
        ${p.tag ? `<span class="card__tag ${p.tag === 'تخفیف' ? 'card__tag--sale' : ''}">${p.tag}</span>` : ''}
        ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : ICONS[p.icon]}
      </div>
      <div class="card__body">
        <h3 class="card__name" data-open="${p.id}">${p.name}</h3>
        <p class="card__rating">${starString(avgRating(p))} <span>(${p.reviews.length.toLocaleString('fa-IR')} نظر)</span></p>
        <p class="card__desc" data-open="${p.id}">${p.desc}</p>
        <div class="card__foot">
          <span class="card__price">${money(p.price)}${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ''}</span>
          <button class="add-btn" data-id="${p.id}">افزودن</button>
        </div>
      </div>
    </article>
  `).join('') : `<p class="no-results">چیزی با این مشخصات پیدا نشد.</p>`;

  // کلیک روی تصویر/نام/توضیح -> باز شدن کادر جزئیات محصول
  productGrid.querySelectorAll('[data-open]').forEach(el=>{
    el.addEventListener('click', () => openProductModal(el.dataset.open));
  });

  // کلیک روی «افزودن» -> اضافه به سبد و رفتن مستقیم به کادر پرداخت
  productGrid.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', () => {
      addToCart(btn.dataset.id, 1);
      openCheckout();
    });
  });
}

// ========== منطق سبد خرید ==========
function addToCart(id, qty = 1){
  cart[id] = (cart[id] || 0) + qty;
  renderCart();
  const product = PRODUCTS.find(p => p.id === id);
  showToast(`«${product.name}» به سبد اضافه شد`);
}

function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id] += delta;
  if(cart[id] <= 0) delete cart[id];
  renderCart();
}

function removeItem(id){
  delete cart[id];
  renderCart();
}

const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');

function renderCart(){
  const ids = Object.keys(cart);
  const totalQty = ids.reduce((sum, id) => sum + cart[id], 0);
  cartCountEl.textContent = totalQty;

  if(ids.length === 0){
    cartItemsEl.innerHTML = '';
    cartItemsEl.appendChild(cartEmptyEl);
    cartTotalEl.textContent = money(0);
    return;
  }

  let total = 0;
  cartItemsEl.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    const qty = cart[id];
    total += p.price * qty;
    return `
      <div class="cart-item">
        <div class="cart-item__media">${ICONS[p.icon]}</div>
        <div class="cart-item__info">
          <p class="cart-item__name">${p.name}</p>
          <p class="cart-item__price">${money(p.price)}</p>
          <div class="qty">
            <button data-action="dec" data-id="${id}" aria-label="کم کردن">−</button>
            <span>${qty}</span>
            <button data-action="inc" data-id="${id}" aria-label="زیاد کردن">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-action="remove" data-id="${id}" aria-label="حذف">×</button>
      </div>
    `;
  }).join('');

  cartTotalEl.textContent = money(total);

  cartItemsEl.querySelectorAll('[data-action]').forEach(btn=>{
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    btn.addEventListener('click', () => {
      if(action === 'inc') changeQty(id, 1);
      if(action === 'dec') changeQty(id, -1);
      if(action === 'remove') removeItem(id);
    });
  });
}

// ========== کشوی سبد خرید ==========
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');

function openCart(){
  cartDrawer.classList.add('is-open');
  cartOverlay.classList.add('is-open');
  cartDrawer.setAttribute('aria-hidden', 'false');
}
function closeCart(){
  cartDrawer.classList.remove('is-open');
  cartOverlay.classList.remove('is-open');
  cartDrawer.setAttribute('aria-hidden', 'true');
}
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeCart(); });

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if(Object.keys(cart).length === 0){
    showToast('سبدت خالیه، اول یه چیزی انتخاب کن');
    return;
  }
  closeCart();
  openCheckout();
});

// ========== کادر جزئیات محصول ==========
const modalOverlay = document.getElementById('modalOverlay');
const productModal = document.getElementById('productModal');
const checkoutModal = document.getElementById('checkoutModal');
let modalQty = 1;
let modalProductId = null;

function openProductModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  modalProductId = id;
  modalQty = 1;

  document.getElementById('pmMedia').innerHTML = p.image ? `<img src="${p.image}" alt="${p.name}">` : ICONS[p.icon];
  document.getElementById('pmTag').textContent = p.tag || '';
  document.getElementById('pmName').textContent = p.name;
  document.getElementById('pmPrice').innerHTML = money(p.price) + (p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : '');
  document.getElementById('pmDesc').textContent = p.long;
  document.getElementById('pmFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('pmQty').textContent = modalQty.toLocaleString('fa-IR');

  renderReviews(p);
  document.getElementById('reviewForm').reset();
  setStars(5);

  showModal(productModal);
}

document.getElementById('pmQtyInc').addEventListener('click', () => {
  modalQty++;
  document.getElementById('pmQty').textContent = modalQty.toLocaleString('fa-IR');
});
document.getElementById('pmQtyDec').addEventListener('click', () => {
  if(modalQty <= 1) return;
  modalQty--;
  document.getElementById('pmQty').textContent = modalQty.toLocaleString('fa-IR');
});
document.getElementById('pmBuyBtn').addEventListener('click', () => {
  addToCart(modalProductId, modalQty);
  hideModal(productModal);
  openCheckout();
});
document.getElementById('productModalClose').addEventListener('click', () => hideModal(productModal));

// ========== ثبت نظر کاربر ==========
let selectedReviewRating = 5;
function setStars(value){
  selectedReviewRating = value;
  document.querySelectorAll('#reviewStars button').forEach(btn => {
    btn.classList.toggle('is-active', Number(btn.dataset.value) <= value);
  });
}
document.querySelectorAll('#reviewStars button').forEach(btn => {
  btn.addEventListener('click', () => setStars(Number(btn.dataset.value)));
});

document.getElementById('reviewForm').addEventListener('submit', e => {
  e.preventDefault();
  const p = PRODUCTS.find(x => x.id === modalProductId);
  const name = document.getElementById('reviewName').value.trim();
  const text = document.getElementById('reviewText').value.trim();
  if(!name || !text) return;

  p.reviews.push({ name, rating: selectedReviewRating, text });
  renderReviews(p);
  renderProducts();
  e.target.reset();
  setStars(5);
  showToast('نظرت ثبت شد، ممنون!');
});

// ========== کادر پرداخت ==========
function openCheckout(){
  const ids = Object.keys(cart);
  if(ids.length === 0){
    showToast('سبدت خالیه، اول یه چیزی انتخاب کن');
    return;
  }
  let total = 0;
  const summaryEl = document.getElementById('checkoutSummary');
  summaryEl.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    const qty = cart[id];
    total += p.price * qty;
    return `<div class="row"><span>${p.name} × ${qty.toLocaleString('fa-IR')}</span><span>${money(p.price * qty)}</span></div>`;
  }).join('');
  document.getElementById('checkoutTotal').textContent = money(total);

  showModal(checkoutModal);
}

document.getElementById('checkoutModalClose').addEventListener('click', () => hideModal(checkoutModal));

// فرمت خودکار شماره کارت و تاریخ انقضا
const cardNumberInput = document.getElementById('cardNumber');
cardNumberInput.addEventListener('input', () => {
  const digits = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
  cardNumberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
});

const cardExpiryInput = document.getElementById('cardExpiry');
cardExpiryInput.addEventListener('input', () => {
  let digits = cardExpiryInput.value.replace(/\D/g, '').slice(0, 4);
  if(digits.length > 2) digits = digits.slice(0,2) + '/' + digits.slice(2);
  cardExpiryInput.value = digits;
});

const cardCvvInput = document.getElementById('cardCvv');
cardCvvInput.addEventListener('input', () => {
  cardCvvInput.value = cardCvvInput.value.replace(/\D/g, '').slice(0, 4);
});

document.getElementById('checkoutForm').addEventListener('submit', e => {
  e.preventDefault();
  showToast('سفارشت با موفقیت ثبت شد، به‌زودی تماس می‌گیریم');
  Object.keys(cart).forEach(id => delete cart[id]);
  renderCart();
  e.target.reset();
  hideModal(checkoutModal);
});

// ========== کمکی‌های نمایش/پنهان کردن مودال ==========
function showModal(modal){
  modalOverlay.classList.add('is-open');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}
function hideModal(modal){
  modalOverlay.classList.remove('is-open');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}
modalOverlay.addEventListener('click', () => {
  hideModal(productModal);
  hideModal(checkoutModal);
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    hideModal(productModal);
    hideModal(checkoutModal);
  }
});

// ========== منوی موبایل ==========
const hamburger = document.getElementById('hamburger');
const mobilenav = document.getElementById('mobilenav');
hamburger.addEventListener('click', () => {
  const isOpen = mobilenav.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});
mobilenav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobilenav.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

// ========== فرم خبرنامه ==========
document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  showToast('به جمع زیرزمین خوش اومدی');
  e.target.reset();
});

// ========== توست ==========
let toastTimer = null;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

// ========== سایه نوار بالا هنگام اسکرول ==========
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  topbar.style.borderBottomColor = window.scrollY > 10 ? 'var(--ink)' : 'var(--line)';
}, { passive: true });

// ========== جستجو ==========
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');

function openSearch(){
  searchBar.classList.add('is-open');
  searchBtn.setAttribute('aria-expanded', 'true');
  searchInput.focus();
}
function closeSearch(){
  searchBar.classList.remove('is-open');
  searchBtn.setAttribute('aria-expanded', 'false');
}

searchBtn.addEventListener('click', () => {
  searchBar.classList.contains('is-open') ? closeSearch() : openSearch();
});
searchClose.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  renderProducts();
  closeSearch();
});
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  renderProducts();
});
searchInput.addEventListener('keydown', e => {
  if(e.key === 'Enter'){
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// ========== فیلتر دسته‌بندی از نوار متحرک ==========
const sectionSubtitle = document.getElementById('sectionSubtitle');
const clearFilterBtn = document.getElementById('clearFilter');

function setCategory(category){
  activeCategory = category;
  renderProducts();

  document.querySelectorAll('.marquee__item').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.category === category);
  });

  if(category){
    sectionSubtitle.textContent = `نمایش دسته‌بندی «${category}»`;
    clearFilterBtn.hidden = false;
  } else {
    sectionSubtitle.textContent = 'شش تیکه از کالکشن این فصل، محدود و تمام‌شدنی.';
    clearFilterBtn.hidden = true;
  }

  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('.marquee__item').forEach(btn => {
  btn.addEventListener('click', () => setCategory(btn.dataset.category));
});

clearFilterBtn.addEventListener('click', () => setCategory(null));

// ========== شروع ==========
renderProducts();
renderCart();
