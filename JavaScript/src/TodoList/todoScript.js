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
        li.textContent = text;
        todoList.appendChild(li);
        newText.value = "";

        var editText = document.createElement("input");
        editText.type = "text";
        editText.style.display = "none";
        li.appendChild(editText);

        var clear = document.createElement("button");
        var lastChild = todoList.lastChild;

        clear.textContent = "Удалить";
        li.appendChild(clear);
        clear.addEventListener("click", function () {
            todoList.removeChild(lastChild);
        });

        var edit = document.createElement("button");
        edit.textContent = "Редактировать";
        li.appendChild(edit);
        edit.addEventListener("click", function () {

        });
    })
});