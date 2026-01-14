const inputField = document.querySelector("#input");
const addTaskBtn = document.querySelector("#addTaskBtn")
const taskList = document.querySelector("#taskList")
const tasks = document.getElementsByClassName("li");
console.log(taskList)

addTaskBtn.addEventListener("click",addTask)
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
})

function initialiseList() {
    //addTaskBtn.addEventListener("click",addTask)
}

function addTask() {
    const value = inputField.value.trim();
    var t = document.createTextNode(value);
    const li = document.createElement("li");
    li.appendChild(t);
    li.textContent = value;

    if (value === "") {
        alert("You must type something.");
        return;
    }
    
    taskList.appendChild(li);
    li.addEventListener("click", toggleComplete);
    inputField.value = "";
}

function toggleComplete() {
    this.classList.toggle("completed");
}

function deleteTask() {

}

function clearList() {

}
