document.getElementById("add-task-btn").addEventListener("click", function() {
    let taskInput = document.getElementById("task-input");
    if (taskInput.value.trim() !== "") {
        let taskText = taskInput.value;
        addTask(taskText);
        taskInput.value = ""; // Limpa o campo de entrada
    }
});

function addTask(taskText) {
    let taskList = document.getElementById("task-list");

    // Cria um novo item de lista
    let li = document.createElement("li");

    // Cria o texto da tarefa
    let span = document.createElement("span");
    span.textContent = taskText;

    // Botão de remover tarefa
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Deletar";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Marca a tarefa como concluída
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}