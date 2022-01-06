// ===== MODAL =====
const overlay = document.querySelector('#overlay');
const registerModal = document.querySelector('#register-modal'),
      loginModal = document.querySelector('#login-modal');
const openRegisterModals = document.querySelectorAll('.register-open'),
      openLoginModals = document.querySelectorAll('.login-open');
const closeRegisterModal = document.querySelector('.register-close'),
      closeLoginModal = document.querySelector('.login-close');

// Register
openRegisterModals.forEach(btn => {
    btn.onclick = () => {
        overlay.style.display = "block";
        registerModal.style.display = "block";
        loginModal.style.display = "none";
    }
})

closeRegisterModal.onclick = () => {
    overlay.style.display = "none";
    registerModal.style.display = "none";
}

// Login
openLoginModals.forEach(btn => {
    btn.onclick = () => {
        overlay.style.display = "block";
        loginModal.style.display = "block";
        registerModal.style.display = "none";
    }
})

closeLoginModal.onclick = () => {
    overlay.style.display = "none";
    loginModal.style.display = "none";
}

// Overlay
overlay.onclick = () => {
    overlay.style.display = "none";
    registerModal.style.display = "none";
    loginModal.style.display = "none";
}

// ===== SEARCH =====
const searchInput = document.querySelector('.search-input'),
      searchShop = document.querySelector('.search-shop'),
      searchShopName = searchShop.querySelector('.search-shop-name'),
      searchNames = document.querySelectorAll('.search-name a');
var searchValue;

searchInput.onkeyup = (e) => {
    searchValue = searchInput.value;

    if (searchValue == "") {
        searchShop.style.display = "none";
    } else {
        searchShop.style.display = "block";
    }

    searchShopName.innerText = searchValue;
    searchNames.forEach(searchName => {
        if (searchName.innerText.toUpperCase().indexOf(searchValue.toUpperCase()) != -1) {
            searchName.style.display = "block";
        } else {
            searchName.style.display = "none";
        }
    })
}

// ===== FLASH SHARE SOLDBAR PERCEN =====
const soldbarList = document.querySelectorAll('.soldbar-percen');
soldbarList.forEach(soldbar => {
    soldbar.style.width = 100 - soldbar.dataset.value + "%";
})

// ===== SUGGESTION =====
// List Product
const suggestionTab = document.querySelector('.tab-suggestion'),
      hoanxuTab = document.querySelector('.tab-hoan-xu');
const suggestionContent = document.querySelector('.products-suggestion'),
      hoanxuContent = document.querySelector('.products-hoan-xu');

suggestionTab.onclick = () => {
    suggestionTab.classList.add("active");
    hoanxuTab.classList.remove("active");

    suggestionContent.classList.add("active");
    hoanxuContent.classList.remove("active");
}

hoanxuTab.onclick = () => {
    suggestionTab.classList.remove("active");
    hoanxuTab.classList.add("active");

    suggestionContent.classList.remove("active");
    hoanxuContent.classList.add("active");
}




// Test
// window.addEventListener('resize', () => {
//     const bannerContainer = document.querySelector('.banner-slider'),
//       swiperBannerContainer = document.querySelector('.banner-slider .swiper-container');

//     swiperBannerContainer.style.height = bannerContainer.offsetHeight + "px";
//     swiperBannerContainer.style.width = bannerContainer.nextElementSibling.offsetWidth * 2 + "px";

// })