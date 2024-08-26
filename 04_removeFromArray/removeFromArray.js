
const removeFromArray = function(array, ...removal) {
    let newArray = array.filter((word) => !removal.includes(word));
    return newArray;
};

/*
let testArr = [1, 2, 3, 4, 3, 7, 9, 3, 12];
let toRemove = "3, 5";
let toRemove1 = toRemove.split();
let newArray = testArr.filter((word) => !toRemove1.includes(word));
console.log("3::: ", newArray);
*/


// Do not edit below this line
module.exports = removeFromArray;
