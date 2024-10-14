const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumEl = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
const month = date.getMonth();
const year = date.getFullYear();

monthNameEl.innerText = date.toLocaleString("en", { month:"long"});
dayNameEl.innerText = date.toLocaleString("en", {weekday:"long"});
dayNumEl.innerText = date.getDate();
yearEl.innerText = year;