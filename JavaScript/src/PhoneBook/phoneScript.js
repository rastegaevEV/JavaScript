$(document).ready(function () {
    var firstName = document.getElementById("first-name");
    var secondName = document.getElementById("second-name");
    var phone = document.getElementById("phone");
    var addButton = document.getElementById("add-button");
    var tableRows = document.getElementById("table-rows");

    addButton.addEventListener("click", function () {
        var tr = document.createElement("tr");
        var tdNumber = document.createElement("td");
        var tdFirst = document.createElement("td");
        var tdSecond = document.createElement("td");
        var tdPhone = document.createElement("td");
        var trDelete = document.createElement("button");

        tdNumber.value = tableRows.children.length;
        tdFirst.textContent = firstName.value;
        tdSecond.textContent = secondName.value;
        tdPhone.textContent = phone.value;
        trDelete.textContent = "X";

        tr.appendChild(tdNumber);
        tr.appendChild(tdFirst);
        tr.appendChild(tdSecond);
        tr.appendChild(tdPhone);
        tr.appendChild(trDelete);
        tableRows.appendChild(tr);
        console.log(tableRows.children.length);
        trDelete.addEventListener("click", function () {
            tableRows.removeChild(tr);
        });
    });
});