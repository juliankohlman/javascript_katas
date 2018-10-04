// Calculate and return the number of days between two dates as a string.
// Dates may be in any combination of ISO, short or long formats.

function daysBetween(start, end) {
	// store start and end dates
	// convert the start and endtimes to ms using .getTime()
	// .getTime() => date's value in ms
	let s = new Date(start).getTime();
	let e = new Date(end).getTime();
	// let sConversion = s.getTime();
	// let eConversion = e.getTime();

	// 1000 * 60 * 60 * 24 === number of ms in a day
	// diff in ms between start and end dates divided by number of ms in a day which is (1000 * 60 * 60 * 24)
	// round down to nearest int and convert it to a string
	const msPerDay = 1000 * 60 * 60 * 24;
	// subtrack (endMS - startMS) / number of ms in one day
	return Math.floor((e - s) / msPerDay).toString();
}

console.log(daysBetween('12/02/2014', '11/04/2016'));
