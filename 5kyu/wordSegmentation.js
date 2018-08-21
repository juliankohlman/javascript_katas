/* Instructions:
Given a dictionary of words (as an array) and an input string without intervening spaces, return
the input string with spaces included such that the resulting words are all contained in the
dictionary.

If the string cannot be fully broken down using words in the dictionary, the function should
return "IMPOSSIBLE".

If there is more than one solution, return "AMBIGUOUS".

You can assume all words and input strings are lowercase letters only and will never be empty.
The dictionary, however, may be empty of words.
*/
// ! Work in progress.
function segmentify(dictionary, inputString) {
	let matches = [];
	dictionary.forEach((str, idx, arr) => {
		matches.push(inputString.match(str));
	});
}

/* Test Cases
Test.describe("Happy test cases", function () {
  Test.it("should return the correct sentence", function () {
    {
      const dictionary = ["coffee", "drink"];
      const inputString = "drinkcoffee";
      const expected = "drink coffee";
      Test.assertEquals(segmentify(dictionary, inputString), expected);
    }
    {
      const dictionary = ["weather", "the", "how", "is"];
      const inputString = "howistheweather";
      const expected = "how is the weather";
      Test.assertEquals(segmentify(dictionary, inputString), expected);
    }
  });
});
Test.describe("Unhappy test cases", function () {
  Test.it("should return \"IMPOSSIBLE\"", function () {
    {
      const dictionary = ["quick", "jumped", "brown", "fox", "the", "jumped", "lazy"];
      const inputString = "thequickbrownfoxjumpedoverthelazydog";
      const expected = "IMPOSSIBLE";
      Test.assertEquals(segmentify(dictionary, inputString), expected);
    }
    {
      const dictionary = ["somewhere", "over"];
      const inputString = "overtherainbow";
      const expected = "IMPOSSIBLE";
      Test.assertEquals(segmentify(dictionary, inputString), expected);
    }
  });
});
Test.describe("Ambiguous test case", function () {
  Test.it("should return \"AMBIGUOUS\"", function () {
    {
      const dictionary = ["examples", "over", "haul", "overhaul", "the"];
      const inputString = "overhaultheexamples";
      const expected = "AMBIGUOUS";
      Test.assertEquals(segmentify(dictionary, inputString), expected);
    }
  });
});
*/
