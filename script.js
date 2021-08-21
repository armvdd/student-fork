let menuIcon = document.querySelector(".menuMobile-icon");
let menuList = document.querySelector(".menuMobile");
let zapojeniPC = document.querySelector(".menuPC-list__zapojeni--a");
let subMenu = document.querySelector(".menuPC-subMenu");
let zapojeniMobile = document.querySelector(".menuMobile-list__zapojeni");
let subMenuMobile = document.querySelector(".menuMobile-subMenu");

menuIcon.addEventListener("click", function () {
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
});


zapojeniPC.addEventListener("click", function () {
  if (subMenu.style.display === "block"){
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "block";
  }
});


zapojeniMobile.addEventListener("click", function (){
  if (subMenuMobile.style.display === "block"){
    subMenuMobile.style.display = "none"
  } else {
    subMenuMobile.style.display = "block"
  }
});