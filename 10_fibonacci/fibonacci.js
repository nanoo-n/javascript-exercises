const fibonacci = function(position) {

    let count
    if (typeof position !== 'number') {
        count = parseInt(position)
    } else {
        count = position
    }

    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let positionZero = 0;
    let positionOne = 1;

    for(let i = 1; i < count; i++) {
        let positionCurrent = positionZero + positionOne;
        positionZero = positionOne;
        positionOne = positionCurrent;
    }

    return positionOne;
    //FinP (example 4) => 1,1,2,[3]
};

// Do not edit below this line
module.exports = fibonacci;
