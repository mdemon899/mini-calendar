// Calling Variable from DOM
let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

// Calculating Time
let today = new Date();
date.innerHTML = today.getDate();
day.innerHTML = today.toLocaleString("en-us", { weekday: "long" });
month.innerHTML = today.toLocaleString("en-us", { month: "long" });
year.innerHTML = today.getFullYear();
