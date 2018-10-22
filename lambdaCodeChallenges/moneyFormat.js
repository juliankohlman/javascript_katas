/*
Given a positive float number, write a function called moneyFormat that formats the float into a string.

  Example:
moneyFormat(2310000.159897); should return '$2,310,000.16'
*/

function moneyFormat(float) {
	return `$${float
		.toFixed(2)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

moneyFormat(2310000.159879);
