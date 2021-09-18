// Create a new list item when click un enter keyboard
let input = document.getElementById("todo_input");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        let list_item = document.createElement("li");
        let input_value = document.getElementById("todo_input").value;
        let add_item = document.createTextNode(input_value);

        list_item.appendChild(add_item);
        if (input_value === "") {
            alert("Please enter your todo lists...");
        } else {
            document.getElementById("todo_list").appendChild(list_item);
        }
        document.getElementById("todo_input").value = "";
    }
});

let list = document.getElementById("todo_list");
// Delete list item when right clicking on a list items
list.addEventListener("contextmenu", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});

//  Deone list item when clicking on a list items
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
            event.target.style.color = "black";
        } else {
            event.target.style.textDecoration = "line-through";
            event.target.style.color = "gray";
        }
    }
});