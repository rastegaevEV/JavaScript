document.addEventListener("DOMContentLoaded", function () {
    var newText = document.querySelector(".text-field");
    var addButton = document.querySelector(".add");
    var todoList = document.querySelector(".todo-list");
    var message = document.getElementById("message");

    addButton.addEventListener("click", function () {
        var text = newText.value;
        if (text === "") {
            message.style.display = "block";
            return;
        }
        message.style.display = "none";
        var li = document.createElement("li");
        todoList.appendChild(li);

        var node = document.createElement("span");
        node.textContent = text;
        li.appendChild(node);
        newText.value = "";

        var editText = document.createElement("input");
        editText.type = "text";

        var todoListLastChild = todoList.lastChild;

        var editMessage = document.createElement("span");
        editMessage.className = "edit-message";
        editMessage.textContent = "Введите текст заметки";

        var clear = document.createElement("button");
        clear.textContent = "Удалить";
        clear.className = "button";
        li.appendChild(editMessage);
        li.appendChild(clear);
        clear.addEventListener("click", function () {
            todoList.removeChild(todoListLastChild);
        });

        var edit = document.createElement("button");
        edit.textContent = "Редактировать";
        edit.className = "button";
        li.appendChild(edit);

        var cancel = document.createElement("button");
        cancel.textContent = "Отмена";
        cancel.className = "button";

        var save = document.createElement("button");
        save.textContent = "Сохранить";
        save.className = "button";

        var currentNodeValue = document.createElement("span");
        currentNodeValue.textContent = text;

        edit.addEventListener("click", function () {
            li.replaceChild(editText, li.firstChild);
            li.firstChild.value = currentNodeValue.textContent;
            li.replaceChild(cancel, edit);
            li.appendChild(save);
        });

        save.addEventListener("click", function () {
            if (editText.value === "") {
                editMessage.style.display = "inline-block";
                return;
            }
            editMessage.style.display = "none";
            currentNodeValue.textContent = editText.value;
            li.replaceChild(currentNodeValue, editText);
            li.removeChild(save);
            li.replaceChild(edit, cancel);
        });

        cancel.addEventListener("click", function () {
            li.replaceChild(currentNodeValue, editText);
            li.removeChild(save);
            li.replaceChild(edit, cancel);
            editMessage.style.display = "none";
        });
    });
});
