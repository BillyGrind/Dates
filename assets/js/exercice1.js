export function findTimeZone() {
  const anchorageTimeZone = new Date().toLocaleString("en-US", {
    timeZone: "America/Anchorage",
    timeZoneName: "short",
    utc: true,
  });
  console.log("Anchorage timezone:", anchorageTimeZone);
  const reykjavikTimeZone = new Date().toLocaleString("en-US", {
    timeZone: "Atlantic/Reykjavik",
    timeZoneName: "short",
    utc: true,
  });
  console.log("Reykjavik timezone:", reykjavikTimeZone);

  // Saint-Petersburg (Russia)
  const stpetersburgTimeZone = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Moscow",
    timeZoneName: "short",
    utc: true,
  });
  console.log("Saint-Petersburg timezone:", stpetersburgTimeZone);
  const brusselTimeZone = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Brussels",
    timeZoneName: "short",
    utc: true,
  });
  console.log("Brussel timezone: ",brusselTimeZone);
}
