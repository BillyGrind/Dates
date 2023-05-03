// Find the exact time and date we will be in 80000 hours.
export function findExactDate() {
  let now = new Date("2023-05-03");
  let H8000hours = 1000 * 60 * 60 * 8000;
  console.log(H8000hours);
  let when = new Date(now.getTime() - H8000hours);
  console.log(when.toString());
}

//  Display the time and date for any amount of hours given in the future
export function giveTheFutur() {
  let body = document.querySelectorAll("body")[0];
  console.log(body);
  let content = `
    <div class="hours-container">
    <input type="number" class="hours-input">
    <p class="hours-text">Entrez un nombre d'heure, appuyez sur la touche ENTER et voyez la date et l'heure qu'on serait dans ce nombre d'heures :</p>
    <p class="futur-text"></p>
    </div>`;
  body.innerHTML += content;
  let hoursInput = document.getElementsByClassName("hours-input")[0];
  hoursInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      let now = new Date("2023-05-03");
      let hoursValue = parseInt(hoursInput.value) * 1000 * 60 * 60;
      let futur = new Date(now.getTime() + hoursValue);
    //   console.log(futur.toString());
      let futurText = futur.toLocaleDateString()+' '+ futur.toLocaleTimeString();
      let futurTextParagraph = document.getElementsByClassName("futur-text")[0];
      futurTextParagraph.textContent=futurText;
    }
  });
}
