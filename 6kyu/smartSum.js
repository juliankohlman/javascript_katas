const flatten = (elements) => {
  let flat = [];
  elements.forEach(item => {
    return Array.isArray(item) ? flat = flat.concat(flatten(item)) : flat.push(item);
  });
  return flat;
};

function smartSum() {
  let input = Array.from(arguments);

  input.map(item => {
    return Array.isArray(item) ? flatten(input.concat(item)) : item;
  });
  console.log(input)
  return input.some(i => Array.isArray(i)) ? flatten(input) : input;
  console.log(input.reduce((a,b) => a + b));
}
