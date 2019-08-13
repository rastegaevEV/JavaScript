document.addEventListener("DOMContentLoaded", function () {
    var newText = document.querySelector(".text-field");
    var button = document.querySelector(".add");
    var todoList = document.querySelector(".todo-list");

    button.addEventListener("click", function () {
        var text = newText.value;
        if (text === "") {
            return;
        }
        var li = document.createElement("li");
        todoList.appendChild(li);

        var node = document.createElement("span");
        node.textContent = text;
        li.appendChild(node);
        newText.value = "";

        var editText = document.createElement("input");
        editText.type = "text";

        var clear = document.createElement("button");

        var todoListLastChild = todoList.lastChild;
        var oldValue = document.createElement("span");
        var newValue = document.createElement("span");
        newValue.textContent = text;

        clear.textContent = "Удалить";
        clear.style.marginLeft = "10px";
        li.appendChild(clear);
        clear.addEventListener("click", function () {
            todoList.removeChild(todoListLastChild);
        });

        var edit = document.createElement("button");
        edit.textContent = "Редактировать";
        edit.style.marginLeft = "10px";
        li.appendChild(edit);

        var cancel = document.createElement("button");
        cancel.textContent = "Отмена";
        cancel.style.marginLeft = "10px";

        var save = document.createElement("button");
        save.textContent = "Сохранить";
        save.style.marginLeft = "10px";

        edit.addEventListener("click", function () {
            li.replaceChild(editText, li.children[0]);
            li.replaceChild(cancel, edit);
            li.appendChild(save);
        });

        save.addEventListener("click", function () {
            newValue.textContent = li.children[0].value;
            li.replaceChild(newValue, li.children[0]);
            li.removeChild(save);
            li.replaceChild(edit, cancel);
        });

        cancel.addEventListener("click", function () {
            oldValue = newValue;
            li.replaceChild(oldValue, li.children[0]);
            li.removeChild(save);
            li.replaceChild(edit, cancel);
        });
    });
});
