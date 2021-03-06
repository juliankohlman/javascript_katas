// ['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk'];
function markdownTables(arr) {
	arr.unshift(arr[0]); // Table headings
	// [] character set
	// \w match alpha chars (letters)
	// + 1 or more times
	// global
	// ignore case
	arr[1] = arr[1]
		.replace(/[\w+]/gi, '-')
		.split(',')
		.join('|');

	let table = arr.map(row => `|${row}`.replace(/,/, '|') + '|').join('\n');
	console.log(table);
	return table;
}
/*
| name | email |
| ----| -----|
| emily | emily@email.com|
| mary | maryberry@gbbs.co.uk|
*/

/* Updated solution
function markdownTables(arr) {
  arr.splice(1, 0, arr[0].replace(/[^,]/g, '-'));
  arr.forEach((string, i) => {
    arr[i] = `|${string.toString().split(',').join('|')}|`;
  });
  return arr.join('\n');
}
 */

markdownTables([
	'name,email',
	'emily,emily@email.com',
	'mary,maryberry@gbbs.co.uk'
]);
