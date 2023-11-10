function convertToCelsius() {
    var celsius = parseFloat(document.getElementById("inputCelsius").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").innerText = fahrenheit.toFixed(2) + "°F";
    } else {
        document.getElementById("result").innerText = "Please enter a valid number.";
    }
}