// window.addEventListener("load", () => {

const activeImg = document.querySelector(".active-work img"),
  images = document.querySelectorAll(".work-gallery img"),
  activeDesc = document.querySelector(".active-img-desc"),
  nav = document.querySelector("nav"),
  menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-btn"),
  mobileNav = document.querySelector(".mobile-nav"),
  mobileNavLinks = document.querySelectorAll(".mobile-nav a");

// Mobile Nav

menuBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
});
// mob nav links
mobileNavLinks.forEach(link =>
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
  })
);
//   Array.prototype.map.images
changeActiveImg = e => {
  activeImg.src = e.target.src;
  activeDesc.innerHTML = e.target.nextElementSibling.innerText;
};
images.forEach(img => img.addEventListener("click", changeActiveImg));
// });

// Scroll Menu add Class
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 30) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});
