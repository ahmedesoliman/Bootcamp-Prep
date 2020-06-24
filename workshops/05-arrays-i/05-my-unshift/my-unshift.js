// YOUR CODE BELOW
function myUnshift(arr, arg){
    let newArr = [];
    newArr.push(arg);
    for(let i = 0; i < arr.length; i++){
      let element = arr[i];
      newArr.push(element);
      
    }
    
    return newArr;
  }
  