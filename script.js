const inputField = document.querySelector("#input");
const addTaskBtn = document.querySelector("#addTaskBtn")
const taskList = document.querySelector("#taskList")
const tasks = document.getElementsByClassName("li");

addTaskBtn.addEventListener("click",addTask)
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
})
taskList.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});

function addTask() {
    const value = inputField.value.trim();
    var t = document.createTextNode(value);

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("class", "checkbox");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + value));
    li.setAttribute("class", "taskElement");

    if (value === "") {
        alert("You must type something.");
        return;
    }
    
    // local storage to be implemented here
    taskList.appendChild(li);
    inputField.value = "";
}

function clearList() {

}
