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

//Date
export function takeDate() {
  let now = new Date(Date.now());
  let date = now.toLocaleDateString();
  console.log(date);
}
