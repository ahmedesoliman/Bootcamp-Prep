// YOUR CODE BELOW
var numbers = [1, 3, 5, 64, 7, 12];
var odds = [9, 13, 15, 17];

function finderFunction (array, func) {
  
  var passesTest = [];
  
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      passesTest.push(array[i]);
    }
    }
    return passesTest;
  }
 
function isEven(num) { return !(num % 2); };

var doesThisWork = finderFunction(numbers, isEven);
console.log(doesThisWork);