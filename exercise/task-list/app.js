// Variables importantes genericas //
const tasklist = document.getElementById("task-list");
const inputId = document.getElementById("input-Id");
const btnAdd = document.getElementById("btn-add");

// Clase tarea //

class Task{
    constructor(id, text, isCompleted = false){
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
        this.element = null;

        this.createElement();
    }

    createElement(){
        let li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `
            <div class="task-container">
            <button class="btn-check">✓</button>
            <span class="task-name">${this.text}</span>
        </div>
        <button class="btn delete">🗑</button>`;
        
        
    console.log(li);
        this.element = li;
    }
}

function addTask(){
    
    const id = new Date().getTime();
    const taskText = inputId.value.trim();
    const taskToAdd = new Task(id, taskText);
    tasklist.prepend(taskToAdd.element);
    inputId.value = "";

}

