// #String formatter You must complete this function which will take a set of
// #rules and then apply them to a string to format it.

// #Info The function will take in an object of rules; remove, map or filter
// will be the properties contained within the rule object(they may or may not
// exist). You must then return a function which takes a string, in that
// function you will apply the given rules to that string as to format it.

// ##remove The remove rule must always be applied first, this will be an array
// of chars which you must filter the string of.

// ##map The map rule must always be applied second, this will be a function that
// must be passed into the map method and be applied against all characters.

// ##filter The filter rule will always be applied last, this works the same as
// the map rule but will be passed into the filter method.

function StringFormatter(rules){
  console.log(Object.keys(rules).length)
  console.log(Object.keys(rules));
  console.log('remove' in rules)

  let rulesToApply = Object.keys(rules).length;
  return function(str) {

    if ('remove' in rules) {
      str = str.split('').map(i => rules.remove.includes(i) ? '' : i).join('')
      if (Object.keys(rules).length === 1) return str
    }
    if ('map' in rules) {
      str = str.split('').map(i => rules.map(i)).join('');
      if (Object.keys(rules).length === 1) return str
    }
    if ('filter' in rules) {
      str = str.split('').filter(i => rules.filter(i)).join('');
    }
    return str;
  }
}
