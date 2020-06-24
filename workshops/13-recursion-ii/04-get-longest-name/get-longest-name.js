// YOUR CODE BELOW
/*Get Longest Name
Write a function, getLongestName, that takes an object. The object represents a family tree. Return the longest name in the family.*/

function getLongestName(family){
    debugger;
    let longestName = '';
    for(let name in family){
      if(name.length > longestName.length){
        longestName = name;
      }
      if(family[name]){
        let result = getLongestName(family[name]);
        if(result > longestName){
          longestName = result;
        }
      }
    }
    return longestName;
  }
  
  let family = {
    'Beverly Marquez': {
      'Nina Rhone': {
        'William Rhodes': null,
        'Paul Nell': null,
        'Sir Paddington the Fourth, of the county Wilstonshire': null
      }
    }
  };
  
  getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'