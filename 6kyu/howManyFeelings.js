/* Instructions:
You have two arguments: string - a string of random letters(only lowercase) and array - an array
of strings(feelings). Your task is to return how many specific feelings are in the array.

For example:

string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'


string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'


string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'

If the feeling can be formed once - plus one to the answer.

If the feeling can be formed several times from different letters - plus one to the answer.

Each letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings:
'anger' and 'awe'.
*/

function countFeelings(string, array) {
	const feelings = array.filter(word =>
		word.split('').every(l => string.includes(l))
	);
	return feelings.length === 1 ? '1 feeling.' : `${feelings.length} feelings.`;
}

// '3 feelings.'
console.log(
	countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief'])
);
// '2 feelings.'
console.log(countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']));
// '1 feeling.'
console.log(
	countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief'])
);
// '0 feelings.'
console.log(
	countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear'])
);
