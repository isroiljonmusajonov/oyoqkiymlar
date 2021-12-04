const login = document.querySelector(".login-box");
const user = document.querySelector(".user");
const submit = document.querySelector(".submit");
const serch = document.querySelector(".serch");
const search_box = document.querySelector(".serch-box");
const exis = document.querySelector("#ex");
// window.addEventListener("scroll", () => {
//   let nav = document.querySelector("nav");
//   nav.classList.toggle("sticky", window.scrollY > 0);
// });

search_box.addEventListener("click", () => {
  serch.classList.add("active");
});
submit.addEventListener("click", () => {
  login.classList.add("show");
});
user.addEventListener("click", () => {
  login.classList.add("active");
});
exis.addEventListener("click", () => {
  serch.classList.add("show");
});
