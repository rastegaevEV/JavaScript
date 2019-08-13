document.addEventListener("DOMContentLoaded", function () {
    var newText = document.querySelector(".text-field");
    var button = document.querySelector(".add");
    var todoList = document.querySelector(".todo-list");

    button.addEventListener("click", function () {
        var text = newText.value;
        if (text === "") {
            return;
        }
        var empty = document.createElement("li");
        var li = document.createElement("li");
        li.textContent = text;
        todoList.appendChild(empty);
        empty.appendChild(li);
        newText.value = "";

        var editText = document.createElement("input");
        editText.type = "text";
        editText.style.display = "none";
        empty.appendChild(editText);

        var clear = document.createElement("button");
        var lastChild = todoList.lastChild;

        clear.textContent = "Удалить";
        clear.setAttribute("class", "delete-button");
        clear.style.marginLeft = "10px";
        empty.appendChild(clear);
        clear.addEventListener("click", function () {
            todoList.removeChild(lastChild);
        });

        var edit = document.createElement("button");
        edit.textContent = "Редактировать";
        edit.style.marginLeft = "10px";
        empty.appendChild(edit);

        var cancel = document.createElement("button");
        cancel.textContent = "Отмена";
        cancel.style.display = "none";
        cancel.style.marginLeft = "10px";
        empty.appendChild(cancel);

        var save = document.createElement("button");
        save.textContent = "Сохранить";
        save.style.display = "none";
        save.style.marginLeft = "10px";
        empty.appendChild(save);
        empty.children[0].style.display = "inline-block";

        function resetDisplay() {
            empty.children[0].style.display = "inline-block";
            empty.children[1].style.display = "none";
            empty.children[2].style.display = "inline-block";
            empty.children[3].style.display = "inline-block";
            empty.children[4].style.display = "none";
            empty.children[5].style.display = "none";
        }

        edit.addEventListener("click", function () {
            empty.children[1].value = "";
            empty.children[0].style.display = "none";
            empty.children[1].style.display = "inline-block";
            empty.children[2].style.display = "inline-block";
            empty.children[3].style.display = "none";
            empty.children[4].style.display = "inline-block";
            empty.children[5].style.display = "inline-block";
        });

        save.addEventListener("click", function () {
            empty.children[0].textContent = empty.children[1].value;
            resetDisplay();
        });

        cancel.addEventListener("click", function () {
            resetDisplay();
        });
    });
});
