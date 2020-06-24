// YOUR CODE BELOW
/*Very Odd Mutant
' >Write a function, 'veryOddMutant'. The function accepts an array of numbers.
  >The function should mutate the given array 
   by 
  > replacing every even number in the array with the string 'normie'.

'veryOddMutant' should return a count of the number of even numbers it replaced.

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log('allTheNums:', allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log('countRemoved:', countRemoved);
// 4

1. loop through array of number
2. find even number
3. replace even number with "normie"
4. every even number replaced should add to the counter; hence let counter=0;
5. new variable to make a ref to initial variable...this will allow mutation
*/

function veryOddMutant(arrayOfNums){
    let countRemoved=0;
    
    for(let i=0; i<arrayOfNums.length; i++){
     let currentNumber = arrayOfNums[i];
    
    if(currentNumber%2===0){
      arrayOfNums[i]="normie";
      countRemoved++;
    }
    }
    return countRemoved;
       
  }
  veryOddMutant([1,2,3,4,5,6]);
  
  
  