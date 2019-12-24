/* Instructions:
Given three arrays of integers, return the sum of elements of that are common in all three
arrays.

For example:
common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
Array lengths in random tests run from 5000 to 10000 elements.

More examples in the test cases.
*/

//* regex solution (very slow/inefficient)
const regexCommon = (a, b, c) => {
  let group = a.concat(b, c).sort((a, b) => b - a);
  let pattern = /[0]{3}|[1]{3}|[2]{3}|[3]{3}|[4]{3}|[5]{3}|[6]{3}|[7]{3}|[8]{3}|[9]{3}|/g;
  let matches = group
    .join("")
    .match(pattern)
    .filter(i => i !== "");
  let res = 0;
  matches.forEach(i => (res += +i[0]));
  return res;
};

function common(a, b, c) {
  // keys count === number of arrays (in this case 3) its common
  // Todo figure out how to handle duplicate common elements
  let arrayCounts = {};
  let allItems = a.concat(b, c);
  allItems.forEach(element => {
    arrayCounts[element]
      ? (arrayCounts[element] += 1)
      : (arrayCounts[element] = 1);
  });
  console.log(arrayCounts);
  console.log(allItems);
}

common([1, 2, 3], [5, 3, 2], [7, 3, 2]); // 5 because 2 & 3 are common in all 3 arrays
common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]); // 7 because 2,2 & 3 are common in the 3 arrays

/*
const commonElements = (a, b, c) => {
	let hash = {};
  let group = a.concat(b,c)
  let res = [];
  console.log(group)
  for (let i = 0; i <= group.length - 1; i++) {
    if (hash[group[i]]) {
      hash[group[i]] += 1;
    } else {
      hash[group[i]] = 1;
    }
  }
  for (let val in hash) {
    if (hash[val] % 3 === 0) {
      res.push(+val);
    }
  }
  return res;
};
*/
