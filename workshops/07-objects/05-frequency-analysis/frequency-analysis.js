// YOUR CODE BELOW

function frequencyAnalysis (str) {
    var freqObject = {};
    
    for ( var i =0;i < str.length;i++) {// loop through each character in the string
      // what do we do if the letter (key) isn't on the object yet
        var currentChar = str[i];// this is a character in the string array
  
      //console.log(str[i]);
      if (!freqObject[currentChar]){// if there is no object for it yet
        freqObject[currentChar] = 1;// CREATE property 'a' and ASSIGN a value of 1
      }else {//
        // otherwise add 1 to the current value of the letter
        freqObject[currentChar]++;
      }
        //console.log(freqObject);
    }
    return freqObject;// return the object you created {a: 2,b: 1, c: 1}
  }