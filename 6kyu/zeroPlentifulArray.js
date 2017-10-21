// An array is called zero-plentiful if it contains at least one 0 and every
// sequence of 0s is of length at least 4. Your task is to return the number of
// zero sequences if the given array is zero-plentiful else 0.

function zeroPlentiful(arr){
  console.log(arr);
  let sequence = arr.join('').split(/[^0]/).filter(i=>i.includes('0'));
  return sequence.every(i => i.match(/0{4,}/)) ? sequence.length : 0
//   console.log(sequence);
//   console.log(
//     sequence.filter(i=>i.includes('0'))
//     .every(i => i.match(/0{4,}/)
//     ));

//   return sequence.filter(i => i.match(/0{4,}/g)).length;
  return 0;
}
