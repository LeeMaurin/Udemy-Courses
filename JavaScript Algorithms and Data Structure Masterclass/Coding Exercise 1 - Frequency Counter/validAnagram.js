// This code checks if two inputs are anagrams. 

function validAnagram(input1, input2) {
  // check if input1 length is equal to input2 length,
  // if not, then the function ends with false.
  if (input1.length !== input2.length) {
    return console.log(false);
  }

  // initialize an object used in the comparision
  const test = {};

  // build object for input1
  for (let i = 0; i < input1.length; i++) {
    let letter = input1[i];
    test[letter] ? (test[letter] += 1) : (test[letter] = 1);
  }

  console.log(test);

  for (let i = 0; i < input2.length; i++) {
    let letter = input2[i];
    // can't find letter or if letter is zero, then it's not an anagram
    if (!test[letter]) {
      return console.log(false);
    } else {
      test[letter] -= 1;
    }
  }
  return console.log(true);
}

validAnagram('anagrams', 'nagaramm');
validAnagram('anagrams', 'nagasram');
validAnagram('let', 'tel');
validAnagram('rat', 'car');
validAnagram('awesome', 'awesom');
validAnagram('something', 'thingsome');
validAnagram('praise', 'slime');
validAnagram('123456', '654321');
