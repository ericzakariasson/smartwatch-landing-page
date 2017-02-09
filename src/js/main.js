// toggla menyikon och mobilmeny
function toggleMenu() {
	this.classList.toggle("active");
	menu.classList.toggle("menu-visible");
}

var menu = document.querySelector(".menu");
var menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", toggleMenu);

function mobileHoverAdd() {
  this.className += " menu-item-hover";
}

function mobileHoverRemove() {
  this.className = "menu-item";
}

// skapa hover-effekt för touchenheter
var menuItems = document.querySelectorAll(".menu-item");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("touchstart", mobileHoverAdd);
}
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("touchend", mobileHoverRemove);
}
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("touchcancel", mobileHoverRemove);
}

// sätt höjden för watch-slideshow baserat på höjden av transparebt-watch
var greenscreen = document.getElementById("transparent-watch");
var greenscreenHeight = greenscreen.offsetHeight;
var watchSlideshow = document.getElementById("watch-slideshow");
watchSlideshow.style.height = greenscreenHeight + "px";

// när fönstret skalas om sätt ny höjd
var onresize = function() {
	greenscreenHeight = greenscreen.offsetHeight;
	watchSlideshow.style.height = greenscreenHeight + "px";
}

window.addEventListener("resize", onresize);

// starta ScrollReveal
window.sr = ScrollReveal({ scale: 1, reset: true});
sr.reveal(".reveal");
