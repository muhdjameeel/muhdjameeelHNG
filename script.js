// Days Js
const date = new Date();
const currentDate = date.getUTCDay();
const days = [
  "Sunday",
  "Monday",
  "Teusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = days[currentDate];

// Display the Day
document.getElementById(
  "day"
).innerHTML = ` Day Of The Week: ${currentDay}`;

// Time Js

function milliseconds() {
  const date = new Date();
  const currentTime = date.getTime();
  document.getElementById(
    "time"
  ).innerHTML = ` UTC Time:  ${currentTime}`;
}

// An interval to update the milliseconds every 1000 milliseconds
setInterval(milliseconds, 1000);