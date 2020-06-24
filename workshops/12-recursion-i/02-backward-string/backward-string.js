// YOUR CODE BELOW
// NOTE: As with the last problem, the tests will check how many times console.log is called.

// function backwardString(str) {
// 	if (str.length - 1 >= 0) {
// 		console.log(str.charAt(str.length - 1));
// 		str = str.slice(0, str.length - 1);
// 		backwardString(str);
// 	}
// }

// backwardString('happy');

const backwardString = str => {
    if (str.length === 1) console.log(str);
    else {
      const lastChar = str.slice(-1);
      const restOfTheChars = str.slice(0, -1);
      
      console.log(lastChar);
        backwardString(restOfTheChars);
    }
  };