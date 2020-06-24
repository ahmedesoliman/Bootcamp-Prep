// YOUR CODE BELOW
// Write a function, veryOdd. The function accepts an array of numbers, allTheNums. 
// It should return a new array that contains only the odd numbers from allTheNums. v
// eryOdd must not mutate allTheNums.
console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

function veryOdd(arr){
  var newArray = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i]%2){
      newArray.push(arr[i]);
      //newArray.push(num);
    }
    //newArray.push();
  }
  return newArray;
}
veryOdd(allTheNums);
var oddNums = veryOdd(allTheNums);

//console.log('oddNums:', oddNums); // [1, 3, 5, 7];
//console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]


