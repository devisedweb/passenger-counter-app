const valueEl = document.getElementById("value-el");
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const saveIt = document.getElementById("save-it");
let count = 0;

countEl.addEventListener("click", function () {
  count += 1;
  valueEl.textContent = count;
});

saveEl.addEventListener("click", function () {
  saveIt.textContent += count + " - ";
  count = 0;
  valueEl.textContent = 0;
});
