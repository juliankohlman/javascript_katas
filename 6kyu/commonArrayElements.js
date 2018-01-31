// Given three arrays of integers, return the sum of elements of that are common in all three
// arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
// Array lengths in random tests run from 5000 to 10000 elements.

// More examples in the test cases.

// Good luck!

function common(a,b,c){
 let arrs = [a,b,c];
 let elementHash = {};
 for (let i = 0; i < 3; i++) {
   arrs[i].forEach((i => {
   if (elementHash[i]) {
     elementHash[i]++;
   } else elementHash[i] = 1;
   }));
 }

   console.log(elementHash);
}