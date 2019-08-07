document.addEventListener("DOMContentLoaded", function () {
    var temperature = document.querySelector(".celsius");
    var button = document.querySelector(".button");
    var tempFr = document.querySelector(".fahrenheit");
    var tempKv = document.querySelector(".kelvin");

    button.addEventListener("click", function () {
        var newTemp = temperature.value;

        if (newTemp === "") {
            return;
        }
        if (isNaN(newTemp)) {
            temperature.value = "";
            temperature.placeholder = "Введите число";
            tempKv.textContent = "";
            tempFr.textContent = "";
            return;
        }
        tempKv.textContent = parseInt(newTemp) + 273.15;
        tempFr.textContent = parseInt(newTemp) * 1.8 + 32;

    })
});