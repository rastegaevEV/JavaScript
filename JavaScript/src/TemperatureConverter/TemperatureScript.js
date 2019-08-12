document.addEventListener("DOMContentLoaded", function () {
    var temperature = document.querySelector(".celsius");
    var button = document.querySelector(".button");
    var tempFahrenheit = document.querySelector(".fahrenheit");
    var tempKelvin = document.querySelector(".kelvin");

    button.addEventListener("click", function () {
        var newTemp = temperature.value;

        if (newTemp === "") {
            return;
        }
        if (isNaN(newTemp)) {
            temperature.value = "";
            temperature.placeholder = "Введите число";
            tempKelvin.textContent = "";
            tempFahrenheit.textContent = "";
            return;
        }
        tempKelvin.textContent = parseFloat(newTemp) + 273.15;
        tempFahrenheit.textContent = parseFloat(newTemp) * 1.8 + 32;
    });
});