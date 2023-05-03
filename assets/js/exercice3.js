// Find the exact time and date we will be in 80000 hours.
export function findExactDate() {
  let now = new Date("2023-05-03");
  let H8000hours = 1000 * 60 * 60 * 8000;
  console.log(H8000hours);
  let when = new Date(now.getTime() - H8000hours);
  console.log(when.toString());
}

export function giveTheFutur() {
  let body = document.querySelectorAll("body")[0];
  console.log(body);
  let content = `
    <input type="text" class="input-hours">
    <input type="button" value="Watch the futur">`;
    body.innerHTML += content;
}
