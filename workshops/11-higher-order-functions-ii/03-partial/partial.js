// Write a function, partial, that accepts a callback  and one argument (let's call
// it 'arg a'). Partial should return a new function. When invoked, the new
// function will:
// - Accept its own argument (let's call it 'arg b')
// - Call the callback, passing in 'arg a' as the first argument and 'arg b' as the second argument
// - Return the value returned by the callback

// YOUR CODE BELOW
function partial(num1, callback) {
  
}

var summer = function(a, b) { return a + b };
sumFive = partial(summer, 5);
sumFive(10)    // => 15;

// another solution << prob the more accurate one
function partial(callback, num){

      var returnCallback = function(num2){
        return callback(num2, num);
      }
      return returnCallback;
    }
    