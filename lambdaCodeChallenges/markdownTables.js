function markdownTables(arr) {
  arr.unshift(arr[0]);
  // [] character set
  // \w match alpha chars
  // + 1 or more times
  // global
  // ignore case
  arr[1] = (arr[1].replace(/[\w+]/gi, '-')).split(',').join('|');

  let table = arr.map(s => '|' + 's'.replace(/,/, '|') + '|').join("\r\n");
  console.log(table);
  return table;
}

markdownTables(['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk']);