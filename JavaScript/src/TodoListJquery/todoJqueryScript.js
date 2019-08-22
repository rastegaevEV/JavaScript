$(document).ready(function () {
    var newText = $(".new-text");
    var addButton = $(".add-button");
    var todoList = $(".todo-list");
    var message = $(".message");
    var editMessageWarning = $("<span class='edit-message'>Введите текст заметки</span>");

    addButton.on("click", function () {
        var text = newText.val();
        if (text === "") {
            message.show();
            return;
        }
        message.hide();
        var li = $("<li>");
        li.appendTo(todoList);
        editMessageWarning.hide().appendTo(todoList);

        var note = $("<span>");
        note.text(text);
        note.appendTo(li);
        newText.val("");

        var editText = $("<input type='text' class='edit-text'>");
        editText.appendTo(li).hide();

        var clear = $("<input type='button' class='button' value='Удалить'>");
        li.append(clear);
        clear.on("click", function () {
            li.remove();
        });

        var edit = $("<input type='button' class='button' value='Редактировать'>");
        li.append(edit);

        var cancel = $("<input type='button' class='button' value='Отмена'>");
        cancel.hide().appendTo(li);

        var save = $("<input type='button' class='button' value='Сохранить'>");
        save.hide().appendTo(li);

        var currentNoteValue = $("<span>");
        currentNoteValue.text(text);

        edit.on("click", function () {
            note.hide();
            editText.val(currentNoteValue.text()).show();
            edit.hide();
            cancel.show();
            save.show();
        });

        save.on("click", function () {
            if (editText.val() === "") {
                editMessageWarning.show();
                return;
            }
            editMessageWarning.hide();
            currentNoteValue.text(editText.val());
            note.text(currentNoteValue.text()).show();
            editText.hide();
            save.hide();
            cancel.hide();
            edit.show();
        });

        cancel.on("click", function () {
            editText.hide();
            note.text(currentNoteValue.text()).show();
            save.hide();
            cancel.hide();
            edit.show();
            editMessageWarning.hide();
        });
    });
});