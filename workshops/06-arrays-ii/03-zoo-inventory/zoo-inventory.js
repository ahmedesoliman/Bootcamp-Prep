// YOUR CODE BELOW

// Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.

// zooInventory should return a new, flat array. Each element in the new array should be a sentence about each of the animals in the zoo.

let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];
  
  // zooInventory(myZoo);
  // /* => ['King Kong the gorilla is 42.',
  //       'Nemo the fish is 5.'
  //       'Punxsutawney Phil the groundhog is 11.']
  // */
  
  
  
  function zooInventory(array){
    let zooStory = [];
    for( let i = 0; i < array.length; i++){
      console.log(array[i]);
      let eachAnimal = array[i];
      let animalName = eachAnimal[0];
      let animalKind = eachAnimal[1][0];
      let animalAge = eachAnimal[1][1]
      let sentence = animalName + ' the ' + animalKind + ' is ' + animalAge + '.';
      zooStory.push(sentence);
      
    }
    return zooStory
  }
  