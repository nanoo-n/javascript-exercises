const palindromes = function (palindrome) {
    //Make array and remove spaces and punctuation
    let normalArray = [...palindrome.replace(/[^\w\']|_/g, "").toLowerCase()];
    let normalString = normalArray.join("");
    console.log(normalString);
    //Create copy & flip
    let invertedString = normalArray.reverse().join("");
    console.log(invertedString);
    
    return normalString === invertedString;
};

// Do not edit below this line
module.exports = palindromes;
