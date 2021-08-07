let menuIcon = document.querySelector(".menuMobile-icon");
let menuList = document.querySelector(".menuMobile");

menuIcon.addEventListener("click", function () {
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
});
