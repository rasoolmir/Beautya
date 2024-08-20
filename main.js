const section = document.querySelector("section"),
overlay = document.querySelector(".overlay"),
showBtn = document.querySelector(".show-modal"),
closeBtn = document.querySelector(".filter__heaing--close");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () =>
section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
section.classList.remove("active")
);


/////// nav

// Menu Open Close 
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
}

//Close Menu On Scroll 
window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
}

//ScrollReveal Animotion
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '1500',
  delay: '400',
});

animate.reveal(".nav");
animate.reveal(".home-text", {origin: "left"});
animate.reveal(".home-img", {origin: "bottom"});
animate.reveal(".ser-box, .product-box, .team-box, .book-data", {interval: 100});