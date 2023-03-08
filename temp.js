var degreeType = document.getElementById("degree-type");
var temperature = document.getElementById("temperature");
var resultCelsius = document.getElementById("result-celsius");
var resultFahrenheit = document.getElementById("result-fahrenheit");
var resultKelvin = document.getElementById("result-kelvin");

function convert() {
  var temp = temperature.value;

  if (degreeType.value === "celsius") {
    var fahrenheit = (temp * 9/5) + 32;
    var kelvin = parseFloat(temp) + 273.15;

    resultCelsius.value = temp;
    resultFahrenheit.value = fahrenheit.toFixed(2);
    resultKelvin.value = kelvin.toFixed(2);

  } else if (degreeType.value === "fahrenheit") {
    var celsius = (temp - 32) * 5/9;
    var kelvin = (temp - 32) * 5/9 + 273.15;

    resultCelsius.value = celsius.toFixed(2);
    resultFahrenheit.value = temp;
    resultKelvin.value = kelvin.toFixed(2);

  } else if (degreeType.value === "kelvin") {
    var celsius = temp - 273.15;
    var fahrenheit = (temp - 273.15) * 9/5 + 32;

    resultCelsius.value = celsius.toFixed(2);
    resultFahrenheit.value = fahrenheit.toFixed(2);
    resultKelvin.value = temp;
  }
}
