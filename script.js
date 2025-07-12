"strict mode";

console.log(document.querySelector(".number-range").textContent);

let number = Math.floor(Math.random() * 20);
let numberEl = (document.querySelector(".number").textContent = number);

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guessed-number").value);
});
