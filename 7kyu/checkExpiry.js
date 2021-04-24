/**
 * It is a simple, real world task. You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits). These are separated by one character ("-" or "/", maybe some spaces too). For example:

02/21
02 / 21
02 / 2021
02-2021
Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry date is not in the past. Note, current month should still return true.
 */

const checkExpiryValid = (date) => {
  // solution here
  // split on space, /, or -
  // create regex the process from there
  const re = /[/-]|[ ]/;
  const dateInfo = date.split(re);
  // console.log(dateInfo);
  const yearInfo = dateInfo[dateInfo.length - 1];
  const monthInfo = dateInfo[0];
  console.log(monthInfo, yearInfo);
  // console.log(monthInfo);
  // let month;
  // let year;
  if (yearInfo.length === 4) {
    res = yearInfo.slice(2);
  } else {
    res = yearInfo.slice(0, 2);
  }
  console.log(res); // need to process 2 vs 4 digit data coming back
  // add check for current month to final check
  // check month and year
  return res > 21;
  // * check year digits against 21?????
};

console.log(checkExpiryValid("03/15")); // false, "should not approve dates in the past";

console.log(checkExpiryValid("03/33")); //true, "should approve dates in the future";

console.log(checkExpiryValid("03-15")); //false, "should work with any separator";

console.log(checkExpiryValid("03 / 15")); //false, "should work with any separator";

console.log(checkExpiryValid("03-2015")); //false, "should work with any length of separators";
