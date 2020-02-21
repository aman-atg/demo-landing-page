window.addEventListener("load", () => {
  alert("dsf");
  const activeImg = document.querySelector(".active-work img"),
    images = document.querySelectorAll(".work-gallery img"),
    activeDesc = document.querySelector(".active-img-desc");
  //   Array.prototype.map.images
  changeActiveImg = e => {
    activeImg.src = e.target.src;
    activeDesc.innerHTML = e.target.nextElementSibling.innerText;
  };
  images.forEach(img => img.addEventListener("click", changeActiveImg));
});
