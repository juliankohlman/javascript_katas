function mathEngine (arr) {
  if (arr === null) return 0;
  const posNums = arr.filter(i => i >= 0).reduce((a, b) => a * b, 1)
  const negNums = arr.filter(i => i <= 0).reduce((a, b) => a + b, 0)
  return arr.length === 0 ? 1 : posNums + negNums;
}

mathEngine([1, 2, 3, -4, -5])
