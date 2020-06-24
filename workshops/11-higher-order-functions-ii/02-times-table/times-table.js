// YOUR CODE BELOW

function timesTable(numIn)
{
  var numOut = function(num2)
  {
    return num2 * numIn;
  };
  return numOut;
}

// another solution

function timesTable(time1){
    return function(time2){
      return time1 * time2;
    }
  }
  
/// another solution

var timesTable = function (num){
    console.log(num);
    return function(operand){
      return num * operand;
    }
  }