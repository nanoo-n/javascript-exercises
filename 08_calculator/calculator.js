const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	return args.reduce((total, number) => total + number, 0);
};

const multiply = function(args) {
  return args.reduce((total, number) => total * number, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  let result = 0;
  for (let i = 0; i < number; i++) {
    result += number * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
