let taskList = document.getElementById("taskList");

function addTask(){
    let task = document.getElementById("taskInput").value;
    let date = document.getElementById("dueDate").value;

    if(task.trim()==="") return;

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${task} - <small>${date}</small></span>
        <button onclick="completeTask(this)">✓</button>
        <button onclick="deleteTask(this)" style="background:#ff6984;">X</button>
    `;

    taskList.appendChild(li);
}

function completeTask(btn){
    btn.parentElement.classList.toggle("completed");
}

function deleteTask(btn){
    btn.parentElement.remove();
}
