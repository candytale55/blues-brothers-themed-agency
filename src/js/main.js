// ========== MAIN JAVASCRIPT ==========

// ========== COPYRIGHT YEAR ==========
// Automatically updates the copyright year
const copyYear = document.querySelector(".copy-year");
copyYear.textContent = new Date().getFullYear();
// TODO: Make this a function? 
  

// ========== TOGGLE NAVIGATION ==========

const closeNavBtn = document.querySelector(".close-nav-btn");
const headerNav = document.querySelector(".header-nav");

closeNavBtn.addEventListener("click", () => {
    headerNav.classList.remove('navigation-open'); 
});
