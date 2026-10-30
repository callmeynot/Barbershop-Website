// ================
// File: js/main.js
// Vintage Barbershop Project
// ================
// ---- DOM Elements ----
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
const siteHeader = document.querySelector(".site-header");
// -- modal elements --
const serviceModal = document.getElementById("serviceModal");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalPrice = document.getElementById("serviceModalPrice");
const serviceModalList = document.getElementById("serviceModalList");
// ---- services data (array of objects) ----
const services = [
  {
    id: 1,
    title: "Classic Haircut",
    image: "assets/images/feature-1.jpg",
    alt: "Classic Haircut",
    description: "Timeless cuts with modern precision tailored to your style",
    price: 25,
    popular: true,
    details: [
      "Consultation with you barber before the cut begins.",
      "Hair sectioning and shape-up based on your preferred style.",
      "Professional clippers, trimmers, and shears used for precision.",
      "Neckline cleanup and finishing touches.",
      "Light styling product applied for a clean finished look."
    ]
  },
  {
    id: 2,
    title: "Beard Trim",
    image: "assets/images/feature-2.jpg",
    alt: "Beard Trim",
    description: "Shape and line-up your beard for a clean, shape finish.",
    price: 15,
    popular: false,
    details: [
      "Beard assessment and shaping based on face structure.",
      "Line-up around cheeks, jawline, and neckline.",
      "Trimmers and detail tools used for crisp edges.",
      "Conditioning beard  product may be applied.",
      "Final symmetry check for a polished finish."
    ]
    },
      {
    id: 3,
    title: "Straight Razor Shave",
    image: "assets/images/feature-3.jpg",
    alt: "Straight Razor Shave",
    description: "Hot towel treatment with a smooth tradtional shave.",
    price: 30,
    popular: true,
    details: [
      "Hot towel prep to soften facial hair and open pors.",
      "Premium shaving cream or lather applied to protect the skin.",
      "Straight razor shave performed with careful detailing.",
      "Second hot towel may be used for comfort and cleanup.",
      "Aftershave or soothing skin product applied after service."
    ]
    },
    {
     id: 4,
    title: "Fade & Style",
    image: "assets/images/feature-2.jpg",
    alt: "Fade Haircut",
    description: "A clean fade with finishing detail for a sharp, modern look.",
    price: 35,
    popular: false,
    details: [
      "Style consultation before clipper work begins.",
      "Fade blended to your preferred level and finish.",
      "Detailing around temples, neckline, and beard area if needed.",
      "Scissors and clipper-over-comb may be used for texture.",
      "Styling product added to complete the final look."
    ]
    },
      {
     id: 5,
    title: "Kids-Cut",
    image: "assets/images/feature-1.jpg",
    alt: "Kids Harircut",
    description: "Clean, comfortable haircut service for younger clients.",
    price: 20,
    popular: false,
    details: [
      "Simple consultation with child and parent if needed.",
      "Age-appropriate haircut with comfort in mind.",
      "Careful clipper and scissor work for a clean finish.",
      "Light cleanup around the neckline and ears.",
      "Styled neatly before leaving."
    ]
    },
      {
     id: 6,
    title: "Head Shave",
    image: "assets/images/feature-3.jpg",
    alt: "Head Shave",
    description: "Smooth head shave with classic barbershop treatment.",
    price: 28,
    popular: true,
    details: [
      "Scalp prep with warm towel treatment.",
      "Protective shave product applied before razor work.",
      "Close shave performed for a smooth finsih.",
      "Scalp cleaned and checked for even consistency.",
      "Moistorizing scalp product applied after the shave."
    ]
    },
]
// const services = [   !======= BEFORE MODALS =======!
//     {
//         title: "Classic Haircut",
//         text: "Timeless cuts with modern precision tailored to your style",
//         image: "assets/images/feature-1.jpg"
//     },
//     {
//         title: "Beard Trim",
//         text: "Shape and line-up your beard for a clean, shape finish.",
//         image: "assets/images/feature-2.jpg"
//     },
//     {
//         title: "Straight Razor Shave",
//         text: "Hot towel treatment with a smooth tradtional shave.",
//         image: "assets/images/feature-3.jpg"
//     }
// ];
// ---- Navigation Data 16-18 index.html ---->
const navLinks = [
  {label: "Home", href: "#hero"},
  {label: "Services", href: "#features"},
  {label: "Book", href: "#footer"},
  {label: "Contact", href: "#footer"},
];
// ------ Helpers / Functions -----
// Update footer year automatically
const setCurrentYear = () => {
  const now = new Date(); // stores year, month, day, hour, minute, second, millisecond
  yearEl.textContent = now.getFullYear();
};
// Toggle Mobile Menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
  // style.css line 97 and 327
  if (!mobileMenu) return; // stop clause: if mobilmenu doesnt exist return nothing
  if (isMenuOpen === false) {
    // when you click menu, it says false, enabling it to open
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
// adds the is-scrolled class to the site-header DOM element
const handleHeaderOnScroll = () => {
  if (!siteHeader) return;
  if (window.scrollY > 10) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  }
}; // is-scrolled is in the css file
// --- Modal Logic ---
const openServiceModal = (serviceId) => {
  if (!serviceModal || !serviceModalTitle || !serviceModalPrice || !serviceModalList) return;
  const selectedService = services.find((service) => service.id === Number(serviceId));
  if (!selectedService) return;
  serviceModalTitle.textContent = selectedService.title;
  serviceModalPrice.textContent = `$${selectedService.price}`;
  serviceModalList.innerHTML = selectedService.details.map((detail) => `<li>${detail}</li>`)
  .join("");
  serviceModal.classList.add("is-open");
  serviceModal.setAttribute("aria-hidden", "false"); // true in index.html
  document.body.style.overflow = "hidden";
};
const closeServiceModal = () => {
  if (!serviceModal) return;
  serviceModal.classList.remove("is-open");
  serviceModal.sertAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};
// ----- Event Listeners ------
// 1) Set year on page load
setCurrentYear();
// 2) Hamburger Menu Toggle
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    toggleMobileMenu();
  });
}
// 3) Close Mobile Menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    // if they click on <a> href inside the menu, close it
    if (event.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}
// 4) CTA Button: "book now" (placeholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - great choice!");
    });
}
// 5) Call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener("click", () => {
        // if you later set phoneLink href to tel:, this will work perfectly
        // for now, this is the beginner friendly place-holder
    if (phoneLink) {
        updateHeadingText("call us at" + phoneLink.textContent);
    } else {
        updateHeadingText("Call feature coming next!");
    }
});
}
// 6) rounds navbar and makes it sticky
window.addEventListener("scroll", handleHeaderOnScroll);
// run once on page load in case user refreshes mid scroll
handleHeaderOnScroll();
// 7) open/close service modals
if (featureGrid) {
  featureGrid.addEventListener("click", (event) => {
  const clickedButton = event.target.closest(".service-details-btn");
if (!clickedButton) return;
  const serviceId = clickedButton.dataset.serviceId;
  openServiceModal(serviceId);
   });
}
if (serviceModalClose) {
  serviceModalClose.addEventListener("click", closeServiceModal);
}
if (serviceModalOverlay) {
  serviceModalOverlay.addEventListener("click", closeServiceModal);
}
document.addEventListener("keydown", (event) => {
if (event.key === "Escape") {
  closeServiceModal();
  }
});
// --- Render Function ---
const renderNavigation = () => {
  if (nav) {
    const navHTML = navLinks.map((link) => `<a href="${link.href}" class="nav-link">${link.label}</a>`)
    .join("");
    nav.innerHTML = navHTML;
  }
  if (mobileMenu) {
    const mobileHTML = navLinks.map((link) => `<a href="${link.href}" class="mobile-link">${link.label}</a>`)
    .join("");
    mobileMenu.innerHTML = mobileHTML;
  }
};
const renderServices = () => {
  if (!featureGrid) return;
  const servicesHTML = services.map((service) => {
    let badgeHTML = "";
    if (service.popular) {
      badgeHTML = `<p class="service-badge">Popular Choice</p>`;
    } else {
      badgeHTML = `<p class="service-badge alt-badge">Barber Favorite</p>`;
    }
    return `
  <article class="feature-card">
    <img
      src="${service.image}"
      alt="${service.alt}"
      class="feature-img"
    />
    <h3 class="feature-title">${service.title}</h3>
    <p class="feature-text">${service.description}</p>
      ${badgeHTML}
    <p class="service-price">$${service.price}</p>
    <div class="service-actions">
      <button
        class="service-details-btn"
        type="button"
        data-service-id="${service.id}">
        View Details
      </button>
    </div>
  </article>
      `;
  })
  .join("");
  featureGrid.innerHTML = servicesHTML
};
// teaching breakdown
// array.forEach(item => {
// createElement
// insert data
// add to page
// });
// ^^ modern front end logic ^^
// generated by JavaScript
// data-driven
// easy to update
// change one object ---> UI updates automatically

// ---- render features using forEach ----
// const renderFeatures = () => {
//     if (!featureGrid) return;
//     services.forEach(service => {
//         const card = document.createElement("article");
//         card.classList.add("feature-card"); // innerHTML allows us to read or change anything inside of an element it has access to
//         card.innerHTML = `
//         <img src="${service.image}" alt="${service.title}" class="feature-img"
//         />
//         <h3 class="feature-title">${service.title}</h3>
//         <p class="feature-text">${service.text}</p>
//         `; // template literals uses the `${}` and allows u to structure how we want our data returened
//         featureGrid.appendChild(card);
//         });
//     };
    // const renderFeaturesMap = () => {    /// BEFORE MODALS
    //   const cardsHTML = services.map(service => { // service array 15-31 // map= return of new array 15-31 referncing featureGrid in index.html
    //     return `
    //     <article class="feature-card">
    //     <img src="${service.image}" alt="${service.title}" class="feature-img" />
    //     <h3 class="feature-title">${service.title}</h3>
    //     <p class="feature-text">${service.description}</p>
    //     </article>
    //     `;
    //   }).join("");
    //   featureGrid.innerHTML = cardsHTML // cardsHTML = [`<article></article>`, `<article></article>`, `<article></article>`]
    // };


// ---- Render navigations using map() ----- // BEFORE MODALS ========
// const renderNavigation = () => {
//   //Desktop nav // line 15-19 index.html
// if (nav) {
//   const navHTML = navLinks.map(link => {
//     return `
//     <a href="${link.href}" class="nav-link">${link.label}</a>
//     `;}).join("");
//     nav.innerHTML = navHTML;
// };
// // mobile nav // line 24-27 index.html
// if (mobileMenu) {
//   const mobileHTML = navLinks.map(link => {
//     return `
//     <a href="${link.href}" class="mobile-link">${link.label}</a>
//   `}).join("");
//   mobileMenu.innerHTML = mobileHTML;
// };
// };

// object Array          =    data structure
// map()                 =    transforms data
// template literals    =    dyanamic HTML
// DOM rendering        =    UI generation

// ---- function calls ----
// render features
// renderFeatures(); // forEach 112-125
// renderFeaturesMap();
renderNavigation(); // navigation call
renderServices();

// Feature Differences:
// method    =    what happens
// forEach   =    Build element manually // requires appendChild
// map()     =    returns HTML strings

// data.map()
  // which equals
// export default function cards // {data.map()} // in react