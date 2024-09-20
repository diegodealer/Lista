function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}