function mathEngine (arr) {
  if (arr === null) return 0;
  let posNums = arr.filter(i => i >= 0).reduce((a, b) => a * b, 1)
  let negNums = arr.filter(i => i <= 0).reduce((a, b) => a + b, 0)
  return arr.length === 0 ? 1 : posNums + negNums;
}

mathEngine([1, 2, 3, -4, -5])
