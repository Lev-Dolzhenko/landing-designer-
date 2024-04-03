const openButton = document.querySelector(".header__button");
const closeButton = document.querySelector(".headerr__nav_button-mobile");
const overlayMobMenu = document.querySelector(".overlay-mobile");
const mobMenu = document.querySelector(".header__nav-mobile");

openButton.addEventListener("click", () => {
  mobMenu.classList.add("showMobMenu");
  mobMenu.classList.remove("hideMobMenu");
  overlayMobMenu.style.opacity = "1";
  overlayMobMenu.style.zIndex = "9";
});

closeButton.addEventListener("click", () => {
  mobMenu.classList.remove("showMobMenu");
  mobMenu.classList.add("hideMobMenu");
  overlayMobMenu.style.opacity = "0";
  overlayMobMenu.style.zIndex = "-1";
});
