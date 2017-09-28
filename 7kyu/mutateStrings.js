// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings (stringOne, stringTwo) {
  const res = [s1];
  for (let i = 0; i < s2.length; i++) {
    res.push(s2.substring(0,i+1) + s1.slice(i+1));
  }
  return Array.from(new Set(res)).join('\n') + '\n';
}

mutateMyStrings('bubble gum', 'turtle ham');
// 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n'
