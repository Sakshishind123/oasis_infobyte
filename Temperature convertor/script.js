function convertTemperature() {
    const tempInput = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");

    // Input validation: Check if the input is a valid number
    if (isNaN(tempInput) || tempInput.trim() === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp = "";
    let resultText = "";

    if (unit === "Celsius") {
        const toFahrenheit = (temperature * 9 / 5 + 32).toFixed(2);
        const toKelvin = (temperature + 273.15).toFixed(2);
        convertedTemp = `${toFahrenheit} °F (Fahrenheit) | ${toKelvin} K (Kelvin)`;
    } else if (unit === "Fahrenheit") {
        const toCelsius = ((temperature - 32) * 5 / 9).toFixed(2);
        const toKelvin = (((temperature - 32) * 5 / 9) + 273.15).toFixed(2);
        convertedTemp = `${toCelsius} °C (Celsius) | ${toKelvin} K (Kelvin)`;
    } else if (unit === "Kelvin") {
        const toCelsius = (temperature - 273.15).toFixed(2);
        const toFahrenheit = ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);
        convertedTemp = `${toCelsius} °C (Celsius) | ${toFahrenheit} °F (Fahrenheit)`;
    }

    resultText = `Converted Temperatures: ${convertedTemp}`;
    resultDiv.textContent = resultText;
}
