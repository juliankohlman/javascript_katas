// Calculate and return the number of days between two dates as a string.
// Dates may be in any combination of ISO, short or long formats.

function daysBetween(start, end) {
  let s = new Date(start);
  let e = new Date(end);
  // .getTime() => date's value in ms
  let sConversion = s.getTime();
  let eConversion = e.getTime();

  // 1000 * 60 * 60 * 24 === number of ms  in a day
  // diff in ms between start and end dates divided by number of ms in a day which is (1000 * 60 * 60 * 24)
  // round down to nearest int and convert it to a string
  return Math.floor((eConversion - sConversion) / (1000 * 60 * 60 * 24)).toString();
}

daysBetween('04/02/2014', '11/04/2014');