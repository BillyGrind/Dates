import { futuroscopeContainer } from "./const.js";
import { takeHours } from "./const.js";

//Create basic Design with DOM
export function createFuturoscopeDate() {
  //Create Calendar
  let futuroscopeCalendar = document.createElement("div");
  futuroscopeCalendar.classList.add("futuroscope-calendar");
  futuroscopeContainer.appendChild(futuroscopeCalendar);
  console.log("hello");

  //Create and Insert items Date in Calendar
  let calendarDay = document.createElement("section");
  calendarDay.classList.add("calendar-day");
  calendarDay.textContent = "Day";
  let calendarDate = document.createElement("section");
  calendarDate.classList.add("calendar-date");
  calendarDate.textContent = "Date";
  let calendarYear = document.createElement("section");
  calendarYear.classList.add("calendar-year");
  calendarYear.textContent = "Year";
  futuroscopeCalendar.appendChild(calendarDay);
  futuroscopeCalendar.appendChild(calendarDate);
  futuroscopeCalendar.appendChild(calendarYear);

  //Create Hours
  let futuroscopeHours = document.createElement("div");
  futuroscopeHours.classList.add("futuroscope-hours");
  //   futuroscopeHours.textContent = hours;
  futuroscopeContainer.appendChild(futuroscopeHours);
  setInterval(() => {
    let hours = takeHours();
    let hoursParagraph = document.querySelector(".futuroscope-hours");
    hoursParagraph.textContent = hours;
  }, 1000);
}


// réparer bug du début 