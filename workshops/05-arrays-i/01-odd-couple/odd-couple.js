// YOUR CODE BELOW

function oddCouple(arry){
    let oddArray = [];
      for (let i=0; i<arry.length; ++i){
      let fancynum = arry[i];
      if (fancynum % 2 === 1){
          oddArray.push(fancynum);
         }
      if (oddArray.length === 2){
         return oddArray;
      }
    }
      return oddArray;
    }