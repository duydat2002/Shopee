// ===== BANNER SLIDER =====
const banner = new Swiper('.banner-slider .swiper-container', {
    // Optional parameters
    allowTouchMove: false,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // If we need pagination
    pagination: {
        el: '.banner-slider .swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.banner-slider .navigation-next',
        prevEl: '.banner-slider .navigation-prev',
    },
});

// ===== CATEGORY SLIDER =====
const category = new Swiper('.category-slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 10,
    slidesPerGroup: 10,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
        nextEl: '.category-slider .navigation-next',
        prevEl: '.category-slider .navigation-prev',
    },
});

// ===== SHOPEE MAIL SlIDER =====
const mailBanner = new Swiper('.mail-banner-slider .swiper-container', {
    // Optional parameters
    allowTouchMove: false,
    direction: 'horizontal',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // If we need pagination
    pagination: {
        el: '.mail-banner-slider .swiper-pagination',
        clickable: true,
    },
});

// Mail Product
const mailProduct = new Swiper('.mail-product-slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    slidesPerGroup: 4,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
        nextEl: '.mail-product-slider .navigation-next',
        prevEl: '.mail-product-slider .navigation-prev',
    },
});

// ===== TOP SEARCH SLIDER =====
const topSearch = new Swiper('.top-search-slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 3,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
        nextEl: '.top-search-slider .navigation-next',
        prevEl: '.top-search-slider .navigation-prev',
    },
});