// ========== MAIN JAVASCRIPT ==========

// ========== COPYRIGHT YEAR ==========
// Automatically updates the copyright year
const copyYear = document.querySelector(".copy-year");
copyYear.textContent = new Date().getFullYear();
// TODO: Make this a function? 
  

// ========== TOGGLE NAVIGATION ==========
const headerNav = document.querySelector(".header-nav");

const closeNavBtn = document.querySelector(".close-nav-btn");
closeNavBtn.addEventListener("click", () => {
    headerNav.classList.remove("navigation-open"); 
});


const openNavBtn = document.querySelector(".open-nav-btn");
openNavBtn.addEventListener("click", () => { 
    headerNav.classList.add("navigation-open");
});
