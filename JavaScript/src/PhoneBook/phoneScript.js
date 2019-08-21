$(document).ready(function () {
    var firstName = $("#first-name");
    var secondName = $("#second-name");
    var phone = $("#phone");
    var addButton = $("#add-button");
    var tableRows = $("#table-rows");
    var fillMessage = $(".fill-message");
    var phoneMessage = $(".phone-message");

    function trNumbering() {
        $("#table-rows tr").each(function (i) {
            var number = i + 1;
            $(this).find("td:first").text(number);
        });
    }

    addButton.on("click", function () {
        var tr = $("<tr>");
        var tdNumber = $("<td>");
        var tdFirst = $("<td>");
        var tdSecond = $("<td>");
        var tdPhone = $("<td>");
        var tdDelete = $("<td><input type='button' class='delete' value='X'></td>");

        tdFirst.text(firstName.val());
        tdSecond.text(secondName.val());
        tdPhone.text(phone.val());

        if (tdFirst.text() === "") {
            firstName.addClass("red-border");
            fillMessage.show();
            phoneMessage.hide();
            return;
        } else {
            firstName.removeClass("red-border");
        }
        if (tdSecond.text() === "") {
            secondName.addClass("red-border");
            fillMessage.show();
            phoneMessage.hide();
            return;
        } else {
            secondName.removeClass("red-border");
        }
        if (tdPhone.text() === "") {
            phone.addClass("red-border");
            fillMessage.show();
            phoneMessage.hide();
            return;
        } else {
            phone.removeClass("red-border");
        }

        fillMessage.hide();

        if ($.isNumeric(tdPhone.text()) === false) {
            phoneMessage.show();
            phone.addClass("red-border");
            return;
        }

        phoneMessage.hide();
        phone.removeClass("red-border");

        firstName.val("");
        secondName.val("");
        phone.val("");

        tr.append(tdNumber);
        tr.append(tdFirst);
        tr.append(tdSecond);
        tr.append(tdPhone);
        tr.append(tdDelete);
        tableRows.append(tr);

        trNumbering();

        tdDelete.on("click", function () {
            tr.remove();
            trNumbering();
        });
    });
});