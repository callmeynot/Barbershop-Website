                                        // ================
                                        // File: js/main.js
                                        // Vintage Barbershop Project
                                        // ================
                                        // ---- DOM Elements ----
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
                                        // ------ Helpers / Functions -----
                                        // Update footer year automatically
const setCurrentYear = () => {
    const now = new Date(); // stores year, month, day, hour, minute, second, millisecond
    yearEl.textContent = now.getFullYear();
};
                                        // Toggle Mobile Menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {     // style.css line 97 and 327
    if (!mobileMenu) return; // stop clause: if mobilmenu doesnt exist return nothing
    if (isMenuOpen === false) { // when you click menu, it says false, enabling it to open
        mobileMenu.classList.add("is-open"); // because we add is-open from style.css
        isMenuOpen = true; // once the menu is open, it returns true
    } else {
        mobileMenu.classList.remove("is-open"); // is-open added means the menu is open, clicking will close the menu
        isMenuOpen = false; // isMenuOpen is currently false because "is-open" has been added. so clicking the menu will close it.
    }
};
                                        // Close Mobile menu (used when link is clicked)
const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};
                                        // Reusable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};
                                        // ----- Event Listeners ------
                                        // 1) Set year on page load
setCurrentyYear();
                                        // 2) Hamburger Menu Toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu ();
    });
}
                                        // 3) Close Mobile Menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
    mobileMenu.addEventListener("click", (Event) => {
        // if they click on <a> inside the menu, close it
        if (Event.target.tagName === "A") {
            closeMobileMenu();
        }
    });
}