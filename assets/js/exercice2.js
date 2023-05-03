// find days between today and my birth
export function daysPassedSinceMyBirth() {
  let now = new Date("2023-05-03");
  let birthDate = new Date("1994-10-27");
  console.log(
    "There are : " +
      (now.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24 +
      "days passed since my birth"
  );
}
