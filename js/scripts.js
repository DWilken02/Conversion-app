function celsiusToFahrenheit(userTemp) {
  return (userTemp* 9/5) + 32;
}

function fahrenheitToCelsius(userTempF) {
  let result = ((5/9)*(userTempF - 32));
  return result.toFixed(2);
}

const userNumber = parseInt(prompt("Enter a temperature in celsius"));
const userNumber2 = parseInt(prompt("Enter a temperature in Fahrenheit"));

const convertedFahrenheitTemp = celsiusToFahrenheit(userNumber);
const convertedCelsiusTemp = fahrenheitToCelsius(userNumber2);

window.alert("You gave us: " + userNumber + String.fromCodePoint(8451)  + " = " + convertedFahrenheitTemp + String.fromCodePoint(8457));

window.alert("You gave us: " + userNumber2 + String.fromCodePoint(8457) + " = " + convertedCelsiusTemp + String.fromCodePoint(8451));