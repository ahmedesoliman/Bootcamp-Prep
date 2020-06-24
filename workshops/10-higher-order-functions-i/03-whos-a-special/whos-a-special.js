// YOUR CODE BELOW
// Who's a Special?
// Write a function whosASpecial that takes an array of pets and returns a string confirming what you already knew: all of the pets are very special! Feel free to add your own special pets to the array!

// Use .forEach in your answer.

// alernative solution using a named function, ES6 string interpolation, and join

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

function whosASpecial(arrayOfPets) {
  let results = [];

  arrayOfPets.forEach(pushStringOntoResults);

  function pushStringOntoResults(petObject) {
    results.push(petObject.name + ' the ' + petObject.species + ' is very special!');
  }
  return results.join(' ');
}

// function whosASpecial(specialPets) {
//   let truth = '';

//   // passing an anoymous function into forEach
//   specialPets.forEach(function(petObject, idx) {

//     // the anonymous function concatenates the new string onto the truth value
//     truth += petObject.name + ' the ' + petObject.species + ' is very special!';

//     // if the current element is not the last element...
//     if (idx < specialPets.length - 1) {

//       // ... add a space between this element and the next element
//       truth += ' ';
//     }
//   });

//   return truth;
// }






whosASpecial(specialPets);
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!



// let specialPets = [{
//     name: 'Sadie',
//     species: 'cat'
//   }, {
//     name: 'Layla',
//     species: 'cat'
//   }, {
//     name: 'Bogie',
//     species: 'dog'
//   }
// ];

// whosASpecial(specialPets);
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!