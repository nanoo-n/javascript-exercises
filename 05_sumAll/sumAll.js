const sumAll = function(start, end) {
    let sum = 0;
    if (typeof (start && end) === 'number' && start >= 0 && end >= 0 && Number.isInteger(start) && Number.isInteger(end)) {
        if (start < end) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        } else if (end < start) {
            for (let i = end; i <= start; i++) {
                sum += i;
            }
        } 
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
