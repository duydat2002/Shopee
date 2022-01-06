// ===== BANNER SLIDER =====
const banner = new Swiper('.home__banner-slider', {
    // Optional parameters
    allowTouchMove: false,
    speed: 500,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // // If we need pagination
    pagination: {
        el: '.home__banner-slider .swiper-pagination',
        clickable: true,
    },
  
    // // Navigation arrows
    navigation: {
        nextEl: '.home__banner-slider .navigation-next',
        prevEl: '.home__banner-slider .navigation-prev',
    },
});

// ===== CATEGORY SLIDER =====
const category = new Swiper('.category-slider .swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 500,
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
const mailBanner = new Swiper('.mail__banner-slider', {
    // Optional parameters
    allowTouchMove: false,
    speed: 500,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // If we need pagination
    pagination: {
        el: '.mail__banner-slider .swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.mail__banner-slider .navigation-next',
        prevEl: '.mail__banner-slider .navigation-prev',
    },
});

// Mail Product
const mailProduct = new Swiper('.mail__products-slider', {
    // Optional parameters
    direction: 'horizontal',
    speed: 400,
    slidesPerView: 4,
    slidesPerGroup: 4,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
        nextEl: '.mail__products-wrapper .navigation-next',
        prevEl: '.mail__products-wrapper .navigation-prev',
    },
});

// ===== TOP SEARCH SLIDER =====
const topSearch = new Swiper('.top-search-slider .swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 600,
    slidesPerView: 3,
    slidesPerGroup: 3,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
        nextEl: '.top-search-slider .navigation-next',
        prevEl: '.top-search-slider .navigation-prev',
    },
});