const effecter = document.getElementsByClassName("effecter");
const btnLines1 = document.getElementById("hamburger_insider1");
const btnLines2 = document.getElementById("hamburger_insider2");
const btnLines3 = document.getElementById("hamburger_insider3");
const mobileNav = document.getElementById("mobile_nav");
const btn = document.getElementById("mobile_button");
for (let item of effecter) {
  item.addEventListener("click", () => {
    btn.classList.toggle("rotater");
    btnLines1.classList.toggle("spinner1");
    btnLines2.classList.toggle("hide_insider");
    btnLines3.classList.toggle("spinner2");
    mobileNav.classList.toggle("active");
  });
}
