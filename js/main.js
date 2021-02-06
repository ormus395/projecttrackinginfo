let toggleBtn = document.querySelector(".mobile__toggle");
let mobileNav = document.querySelector(".nav__mobile");

document.querySelector("body").addEventListener("click", function (e) {
  if (e.target.classList.contains("mobile__toggle")) {
    mobileNav.classList.toggle("hidden");
  } else if (!mobileNav.classList.contains("hidden")) {
    mobileNav.classList.toggle("hidden");
  }
});
