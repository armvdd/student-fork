let menuIcon = document.querySelector(".menuMobile-icon");
let menuList = document.querySelector(".menuMobile");

menuIcon.addEventListener("click", function () {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});
