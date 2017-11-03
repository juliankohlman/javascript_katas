// Find the minimum dollar bill's count to represent some value based on the
// availables bills.

// You will recieve the value and an array as input (the array contains the
// available bills).

// For instance:

// minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)

// minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)

// minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)

// minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

// It is guaranteed that the value can always be divided into given bills, and
// there are no "tricky" edge cases.


function minimumBillCount (value, availables) {
  let bills = availables.sort((a,b) => b - a);
//   return bills
  let billCount = 0;
  bills.forEach((i) => {
    if (i> value) return;
    billCount += Math.floor(value / i);
    value = value % i;
  })
//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] > value) continue;
//     billCount += Math.floor(value / bills[i]);
//     value = value % bills[i]
//   }
  return billCount;
}

minimumBillCount(100,[10, 50, 20]) // 2
minimumBillCount(500, [100, 50, 20]) // 5
minimumBillCount(40, [1, 10, 20]) // 2
