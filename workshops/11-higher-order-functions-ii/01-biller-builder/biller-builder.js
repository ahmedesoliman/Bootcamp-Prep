// YOUR CODE BELOW
function biller(state){
    if(state === 'NY'){
      return function(price){
        return price * 1.03 * 1.04;
      }
    }
    else{
      return function(price){
        return price * 1.05 * 1.06625;
      }
    }
  }