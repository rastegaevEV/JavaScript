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
        var tdDelete = document.createElement("button");

        tdNumber.value = tableRows.children.length;
        tdFirst.textContent = firstName.value;
        tdSecond.textContent = secondName.value;
        tdPhone.textContent = phone.value;
        tdDelete.textContent = "X";
        tdDelete.className = "delete";

        tr.appendChild(tdNumber);
        tr.appendChild(tdFirst);
        tr.appendChild(tdSecond);
        tr.appendChild(tdPhone);
        tr.appendChild(tdDelete);
        tableRows.appendChild(tr);
        console.log(tableRows.children.length);

        $('#phone-book tbody tr').each(function(i) {
            var number = i + 1;
            $(this).find('td:first').text(number);
        });
        tdDelete.addEventListener("click", function () {
            tableRows.removeChild(tr);
            $('#phone-book tbody tr').each(function(i) {
                var number = i + 1;
                $(this).find('td:first').text(number);
            });
        });
    });
});