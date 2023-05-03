import { futuroscopeContainer } from "./const.js";
import {
  takeHours,
  takeYear,
  takeDay,
  takeDateDay,
  takeDateMonth,
} from "./const.js";

//Create basic Design with DOM
export function createFuturoscopeDate() {
  //Create Calendar
  let futuroscopeCalendar = document.createElement("div");
  futuroscopeCalendar.classList.add("futuroscope-calendar");
  futuroscopeContainer.appendChild(futuroscopeCalendar);

  //Create and Insert items Date in Calendar
  //Day
  let calendarDay = document.createElement("section");
  calendarDay.classList.add("calendar-day");
  let dayValue = takeDay();
  calendarDay.textContent = dayValue;
  //Date
  let calendarDate = document.createElement("section");
  calendarDate.classList.add("calendar-date");
  let dateDayValue = takeDateDay();
  let dateMonthValue = takeDateMonth();
  calendarDate.innerHTML = `
  <p class="calendar-date-day">${dateDayValue}</p>
  <p class="calendar-date-month">${dateMonthValue}</p>`;

  //Year
  let calendarYear = document.createElement("section");
  calendarYear.classList.add("calendar-year");
  let yearValue = takeYear();
  calendarYear.textContent = yearValue;
  //Append tout chill
  futuroscopeCalendar.appendChild(calendarDay);
  futuroscopeCalendar.appendChild(calendarDate);
  futuroscopeCalendar.appendChild(calendarYear);

  //Create Hours
  let futuroscopeHours = document.createElement("div");
  futuroscopeHours.classList.add("futuroscope-hours");
  futuroscopeContainer.appendChild(futuroscopeHours);
  let hoursParagraph = document.querySelector(".futuroscope-hours");
  //Insert Varibale Hours in text
  let hoursValue = takeHours();
  hoursParagraph.textContent = hoursValue;
  setInterval(() => {
    let hoursValue = takeHours();
    hoursParagraph.textContent = hoursValue;
  }, 1000);
}
