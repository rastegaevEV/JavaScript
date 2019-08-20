$(document).ready(function () {
    var newText = $("#new-text");
    var addButton = $("#add-button");
    var todoList = $("#todo-list");
    var message = $("#message");

    addButton.on("click", function () {
        var text = newText.val();
        if (text === "") {
            message.show();
            return;
        }
        message.hide();
        var li = $("<li>");
        li.appendTo(todoList);

        var note = $("<span>");
        note.text(text);
        note.appendTo(li);
        newText.val("");

        var editText = $("<input type='text' class='button'>");

        var editMessage = $("<span class='edit-message'>Введите текст заметки</span>");

        var clear = $("<input type='button' class='button' value='Удалить'>");
        li.append(editMessage);
        li.append(clear);
        clear.on("click", function () {
            li.remove();
        });

        var edit = $("<input type='button' class='button' value='Редактировать'>");
        li.append(edit);

        var cancel = $("<input type='button' class='button' value='Отмена'>");

        var save = $("<input type='button' class='button' value='Сохранить'>");

        var currentNodeValue = $("<span>");
        currentNodeValue.text(text);

        edit.on("click", function () {
            note.remove();
            editText.prependTo(li);
            editText.val(text);
            //li.replaceChild(editText, li.firstChild);
            //li.firstChild.value = currentNodeValue.textContent;
            edit.remove();
            cancel.appendTo(li);
            save.appendTo(li);
            //li.replaceChild(cancel, edit);
            // li.appendChild(save);
        });

        save.on("click", function () {
            if (editText.val() === "") {
                editMessage.show();
                return;
            }
            editMessage.hide();
            note.text(editText.val()).prependTo(li);
            editText.remove();
            save.remove();
            cancel.remove();
            li.append(edit);
            // li.replaceChild(currentNodeValue, editText);
            // li.removeChild(save);
            // li.replaceChild(edit, cancel);
        });

        cancel.on("click", function () {
            editText.remove();
            note.text(text).prependTo(li);
            save.remove();
            cancel.remove();
            li.append(edit);
            //li.replaceChild(currentNodeValue, editText);
            //li.removeChild(save);
            // li.replaceChild(edit, cancel);
            editMessage.hide();
        });
    });
});