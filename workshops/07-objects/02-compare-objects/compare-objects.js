// YOUR CODE BELOW

function compareObjects(object1, object2){
    let arrKeys1 = Object.keys(object1);
    let arrKeys2 = Object.keys(object2);
    
    if (arrKeys1.length !== arrKeys2.length) return false;
    
    for (let i = 0; i < arrKeys1.length; i++){
      let currKey = arrKeys1[i];
      
      if(object1[currKey] !== object2[currKey]) return false;
    }
    
    return true;
  }
  
  compareObjects({a: 1, b: 2}, {a: 1, b: 2});