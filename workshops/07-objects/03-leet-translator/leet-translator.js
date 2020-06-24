let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW

function leetTranslator(originalString){
  let leetDict = {};
  
for (let i=0; i < letters.length; ++i){
  currentLetter = letters[i];
  leetChar = leetChars[i];
  leetDict[currentLetter] = leetChar;
}

let leetString = '';
for(let i=0; i < originalString.length; ++i){
   currentLetter = originalString[i].toLowerCase();
   
  // leetString += leetDict[currentLetter];
  let leetChar = leetDict[currentLetter];
  leetString += leetChar;
}
return leetString;
}
leetTranslator('Fullstack') ;