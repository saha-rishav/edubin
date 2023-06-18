/* Mobile Nav */

let hamburger = document.getElementById("hamburger");
let mobile_menu = document.getElementById("mobile-nav");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  if (mobile_menu.classList.contains("active")) {
    mobile_menu.classList.remove("active");
  } else {
    mobile_menu.classList.add("active");
  }
});

/* Parallax */

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
