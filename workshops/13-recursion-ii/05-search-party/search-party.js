// YOUR CODE BELOW
/*Search Party
Write a function, searchParty, that accepts a name and a world object. The keys in the world objects describe a location. The values can be any combination of strings, arrays, or other objects.

Search through the whole world for the given name. Return an array with directions to the person if you find them. Return null if you can't find them.*/


// function searchParty(name, world){
//   for(let place in world){
//     let person = world[place];
//     //console.log(person);
//     if(typeof person === 'string'){
//       if(person === name){
//         return [place];
//       }
//     }
//     else if(Array.isArray(person)){
//       if(person.includes(name)){
//         return [place];
//       }
//     }
//     else{
//       let obj = searchParty(name, person);
//         if(obj){
//           return [place].concat(obj);
//         }
      
//     }
      
//   }
//   return null;
// }

function searchParty(name, world){
    for(let place in world){
      let person = world[place];
      if(typeof person === 'string'){
        if(person === name){
          return [place];
        }
      }
      else if(Array.isArray(person)){
        if(person.includes(name)){
          return [place];
        }
      }
      else{
        let obj = searchParty(name, person);
        if(obj){
          return [place].concat(obj);
        }
      }
    }
    return null;
  }
  
  let world = {
    'Fullstack': {
      '11th floor': 'Marge',
      '25th floor': 'Francis'
    },
    'Subway': ['Jackie', 'Grumio']
  };
  
  //searchParty('Francis', world); // => ['Fullstack', '25th floor']
  searchParty('Grumio', world); 
  //searchParty('Franco', world); // => null