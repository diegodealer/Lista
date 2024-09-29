function addTask() {
    let taskInput = document.getElementById("taskInput");
    let tasklist = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        let checkbox  = document.createElement("Input");
        checkbox.type =  "checkbox";
        checkbox.style.display = "none";
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                taskText.style.textDecoration = 'underline'; 
            } else {
                taskText.style.textDecoration = 'none'; 
            }
        });

        let taskText = document.createElement("Span");
        taskText.textContent = taskInput.value;
        taskText.addEventListener('click', function() {
            checkbox.checked = !checkbox.checked; 
            if (checkbox.checked) {
                taskText.style.textDecoration = 'underline'; 
            } else {
                taskText.style.textDecoration = 'none'; 
            }
        });

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                taskText.style.textDecoration = 'underline'; 
            } else {
                taskText.style.textDecoration = 'none'; 
            }
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        let index = tasklist.children.length;
        if((index + 1)% 2 === 0){
            li.style.color = "blue";
        } else {
            li.style.color = "black";
        }
        tasklist.appendChild(li);
        taskInput.value = "";
    }
    else if (taskInput.value.trim() == "") {
        alert("No ha agregado una tarea");
    }
}

function TareaCompleta() {
    let taskList = document.getElementById("taskList");
    let CompleteTask = document.getElementById("CompleteTask");
    let tasks = taskList.getElementsByTagName("li");

    for (let i = tasks.length - 1; i >= 0; i--) {
        let checkbox = tasks[i].getElementsByTagName("input")[0]; 
        if (checkbox.checked) {
            CompleteTask.appendChild(tasks[i]); 
            checkbox.disabled = true;
        }
    }

    verificarListaVacia(CompleteTask);
}

function verificarListaVacia(lista) {
    if (lista.children.length === 0) {
        lista.style.display = 'none';
    } else {
        lista.style.display = 'block';
    }
}

function clearSelectedTasks() {
    let taskList = document.getElementById("taskList");
    let tasks = taskList.getElementsByTagName("li");


    for (let i = tasks.length - 1; i >= 0; i--) {
        let checkbox = tasks[i].getElementsByTagName("input")[0]; 
        if (checkbox.checked) {
            taskList.removeChild(tasks[i]); 
        }
    }

}

