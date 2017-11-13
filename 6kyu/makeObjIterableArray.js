// Often times as a developer you are given API data that doesn't necessarily
// conform to a shape that is easily consumable. You have to massage the data in
// some way so that you can work with it more easily in the environment you need
// it. In this code kata you will take an object and turn it into an iterable
// array. The shape of the api object will be like so:

// const timesObject = {
//   monday   : [{ open: '07:00', close: '17:00' }],
//   tuesday  : [{ open: '07:00', close: '17:00' }],
//   wednesday: [{ open: '07:00', close: '17:00' }],
//   thursday : [{ open: '07:00', close: '17:00' }],
//   friday   : [{ open: '07:00', close: '17:00' }],
//   saturday : [],
//   sunday   : [],
// }

// What this data shape is telling us is that the open times for this store are
// Monday thru Friday from 7am to 5pm. But this may not be so easily consumable
// on the front end. It would be easier if this was an array object. Your
// mission, if you choose to accept it, is to massage this data into a shape like
// so:

// const timesArray = [
//   {
//     open : '07:00',
//     close: '17:00',
//     days : ['monday','tuesday', 'wednesday', thursday', 'friday'],
//   }
// ]

// Now create a function called shapeTimesObjectIntoIterableArray that takes an
// hours object and returns an array of objects. Caveats

//     If the times object is empty/undefined/null then return an empty array



function shapeTimesObjectIntoIterableArray(timesObject) {
  // hint but not really: use Array.prototype.reduce
  const timesArray = [{open : '', close : '', days : []}];

  for (let prop in timesObject) {
    console.log(prop)
    console.log(timesObject[prop])
    console.log(timesObject[prop][0]['open'])
    console.log(timesObject[prop][0]['close'])
  }

}