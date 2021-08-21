let menuIcon = document.querySelector(".menuMobile-icon");
let menuList = document.querySelector(".menuMobile");
let zapojeniA = document.querySelector(".menuPC-list__zapojeni--a");
let subMenu = document.querySelector(".menuPC-subMenu");

menuIcon.addEventListener("click", function () {
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
});


zapojeniA.addEventListener("click", function () {
  if (subMenu.style.display === "block"){
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "block";
  }

})