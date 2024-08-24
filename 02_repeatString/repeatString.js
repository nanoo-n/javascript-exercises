const repeatString = function(string, num) {
    let concatString = string;
    for (let i = 0; i < (num - 1); i++) {
        concatString += string;
    }
    console.log(concatString);

    if (num === 0) {
        concatString = '';
        return concatString;
    } else if (num < 0) {
        concatString = "ERROR";
        return concatString;
    }
    else {
        return concatString;
    }
};

// Do not edit below this line
module.exports = repeatString;
