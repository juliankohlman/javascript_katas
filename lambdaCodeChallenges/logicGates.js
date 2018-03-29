// For this coding challenge you will be recreating low level logic gates.

// You will first create the NAND function and then you will create

// NOT, OR, AND, and XOR all using the NAND function that you created.

// Implement NAND however you would like and then use NAND to implement the

// other logic gates.

// See the link below for the truth tables for these logic gates.

// https://en.wikipedia.org/wiki/NAND_logic#NAND

// All functions should return a 1 for true and a 0 for false.

NAND = (x, y) => {
  return +!(x && y);
}
console.log(NAND(1,1))

NOT = (n) => {
  return NAND(n,n);
}
// console.log(NOT(0))

AND = (x, y) => {
  return NOT(NAND(x,y))
}
// console.log(AND(0))

OR =(x, y) => {
  return NAND(NOT(x),NOT(y));
}
console.log(OR(0,1))

XOR = (x, y) => {
  return AND(NAND(x,y), OR(x,y))
}
// console.log(XOR(0))
