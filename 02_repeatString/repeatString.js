const repeatString = function(string, num) {
    let concatString = "";

    for (let i = 0; i < num; i++) {
        concatString += string;
    }

    if (num < 0) {
        return "ERROR";
    }
    return concatString;
};

// Do not edit below this line
module.exports = repeatString;
