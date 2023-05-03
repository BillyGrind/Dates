//Const body
export const futuroscopeContainer = document.getElementsByClassName(
  " futuroscope-container"
)[0];

//Hours
export function takeHours() {
  let now = new Date(Date.now());
  let hours = now.toLocaleTimeString();
  //   console.log(hours);
  return hours;
}
setInterval(takeHours, 1000);

//Day
export function takeDay() {
  let now = new Date(Date.now());
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  return day;
}

//Day
export function takeDateDay() {
  let now = new Date(Date.now());
  let options = { day: "2-digit" };
  let formatter = new Intl.DateTimeFormat("en-US", options);
  let day = formatter.format(now);
  return day;
}

//Month
export function takeDateMonth() {
  let now = new Date(Date.now());
  let options = { month: "short" };
  let formatter = new Intl.DateTimeFormat("en-US", options);
  let month = formatter.format(now);
  return month;
}

//Year
export function takeYear() {
  let now = new Date(Date.now());
  let year = now.getFullYear();
  return year;
}
