// #Input: string containing a single positive valid hex number without  symbol.
// #Ex: 'FF'.

// #Output: converted decimal number, 255

// #Restriction: code length <= 26 characters

weirdHexToDec=x=>+`0x${x}`

weirdHexToDec('FF')
