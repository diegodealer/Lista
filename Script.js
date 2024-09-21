function addTask() {
    let taskInput = document.getElementById("taskInput");
    let tasklist = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        let checkbox  = document.createElement("Input");
        checkbox.type =  "checkbox";
        checkbox.className = "taskCheckbox";
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskInput.value));
        tasklist.appendChild(li);
        taskInput.value = "";
    }
}

function clearSelectedTasks() {
    let taskList = document.getElementById("taskList");
    let tasks = taskList.getElementsByTagName("li");

    // Recorrer las tareas en reversa para evitar problemas al eliminar elementos
    for (let i = tasks.length - 1; i >= 0; i--) {
        let checkbox = tasks[i].getElementsByTagName("input")[0]; // obtener el checkbox dentro de cada 'li'
        if (checkbox.checked) {
            taskList.removeChild(tasks[i]); // eliminar el 'li' si el checkbox está seleccionado
        }
    }
}