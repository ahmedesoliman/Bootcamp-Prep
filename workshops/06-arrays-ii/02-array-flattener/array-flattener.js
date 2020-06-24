// YOUR CODE BELOW






// ### Array Flattener

// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
// ```





function arrayFlattener(twoDimensionalArray){
    let flatArray = [];
    for (let i=0; i<twoDimensionalArray.length ; ++i){
       let element = twoDimensionalArray[i];
       if (Array.isArray(element)){
          for (let j=0; j<element.length; ++j){
          flatArray.push(element[j]);
         }
       }
       else{
         flatArray.push(element);
    }
   }
   return flatArray;
  }