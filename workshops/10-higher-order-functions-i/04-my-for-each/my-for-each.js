// YOUR CODE BELOW
// My For Each
// Write a function myForEach that accepts an array and a callback function. The behavior of myForEach should mirror the functionality of the native .forEach() array method as closely as possible

function myForEach(anArr,callback){
    for (let i=0; i<anArr.length; ++i){
      let element = anArr[i];
      callback(element, i);
    }
  }
  
  
  let nums = [1, 2, 3];
  
  
  
  
  
  
  
  
  
  
  
  // let sum = 0;
  
  // function addToSum(num) {
  //     sum += num;
  // }
  
  //let nums = [1, 2, 3];
  
  myForEach(nums, addToSum);
  
  //console.log(sum); /