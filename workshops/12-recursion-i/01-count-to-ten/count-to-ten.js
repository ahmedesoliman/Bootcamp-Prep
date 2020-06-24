// YOUR CODE BELOW
function countToTen(num){
    if (num < 11){
      console.log(num);
      num++;
      countToTen(num);
    }
  }
  
  countToTen(7);