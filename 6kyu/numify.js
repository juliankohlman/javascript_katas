// Write

// function Word2Num(str)
// that takes in a str from one to ten and allows us to do the following:

// Word2Num("one") + Word2Num("two") + Word2Num("three") === 6;

// var arr = [Word2Num("seven"), Word2Num("eight")];
// arr.join() === 'seven,eight';

// arr.sort((a,b)=> b-a).join() === 'eight,seven';

function Word2Num(str) {
    //code me
    let num = str.split()
    console.log(str)
    const data = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10
    };
    //   console.log(Object.keys(data))
    //   console.log(str)
    return str.split(',')
    //   return data[str];
}