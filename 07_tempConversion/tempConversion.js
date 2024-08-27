const convertToCelsius = function(fahrenheitDegrees) {
  let celsiusDegrees = (fahrenheitDegrees - 32) * (5/9);
  return Math.round(celsiusDegrees * 10) / 10;
};

const convertToFahrenheit = function(celsiusDegrees) {
  let fahrenheitDegrees = celsiusDegrees * (9/5) + 32;
  return Math.round(fahrenheitDegrees * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
