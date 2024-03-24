const convertToCelsius = function(fahrenTemp) {

  return Math.round((fahrenTemp-32)*(5/9)*10) / 10 + " Celsius";

};

const convertToFahrenheit = function(celsiusTemp) {

  return Math.round((celsiusTemp * (9/5) + 32) * 10) / 10 + " Fahrenheit";
};

console.log(convertToCelsius(48));
console.log(convertToFahrenheit(12));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
