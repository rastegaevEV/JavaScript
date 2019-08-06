document.addEventListener("DOMContentLoaded", function () {
    var temperature = document.querySelector(".temperature-number");
    var button = document.querySelector(".button");
    var tempList = document.querySelector(".temperature-list");

    button.addEventListener("click", function () {
        var newTemp = temperature.value + 273;
        var li = document.createElement("li");
        if (newTemp === Number || newTemp === "") {
            return;
        }
        li.innerHTML = newTemp;

        tempList.appendChild(li);
    })
});