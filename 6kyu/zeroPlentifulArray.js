// An array is called zero-plentiful if it contains at least one 0 and every
// sequence of 0s is of length at least 4. Your task is to return the number of
// zero sequences if the given array is zero-plentiful else 0.

function zeroPlentiful (arr) {
  let sequence = arr.join('').split(/[^0]/).filter(i => i.includes(0));
  return sequence.every(i => i.match(/0{4,}/)) ? sequence.length : 0;
}

// CW solution
// const zeroPlentiful = arr =>  /(^|[^0])0{1,3}(?!=$|0)/.test(arr.join('')) ? 0 : ( arr.join('').match(/000(0)+/g)||[]).length;

zeroPlentiful([3, 0, 0, 0, 0, 6, 9])
zeroPlentiful([3, 2, 1, 0])
zeroPlentiful([-3, 2, 1, 3, -1, -2])
zeroPlentiful([0, 1, 2, 3])
zeroPlentiful([0, 1, 3, -2, 5, 4])
zeroPlentiful([3, 2, 10, 4, 1, 6])
zeroPlentiful([0, 2, 19, 4, 4])
zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0])
zeroPlentiful([-3, 2, 1, 3, -1, -2])
zeroPlentiful([])
