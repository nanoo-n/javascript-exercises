const reverseString = function(word) {
    /*
    //TAKE string
    let letters = [];
    let reversedWord = "";
    //for each letter in the string unshift into array
    for (let i = 0; i < word.length; i++) {
        letters.unshift(word[i]);
    }
    //console.log(letters.join(""));
    reversedWord = letters.join("");
    //return the new string
    */
   return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
