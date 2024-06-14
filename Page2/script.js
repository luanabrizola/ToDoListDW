const updateCounters = () => {
    const totalTasks = document.querySelectorAll(".tarefas .at").length;
    const doneTasks = document.querySelectorAll(".tarefas .at input:checked").length;
    // Atualiza os contadores
    document.getElementById("createdCounter").textContent = totalTasks;
    document.getElementById("doneCounter").textContent = `${doneTasks} de ${totalTasks}`;
};

document.querySelector(".tarefas").addEventListener("click", event => {
    if (event.target.classList.contains("lixo")) { // Se o elemento clicado tem a classe 'lixo', remove o elemento .at
        event.target.closest(".at").remove();
        updateCounters();
    } else if (event.target.type === "checkbox") { // Verifica se o elemento clicado é um checkbox
        const taskDiv = event.target.closest(".at"); // Seleciona a div mais próxima que contém a tarefa
        const tarefasDiv = document.querySelector(".tarefas");

        if (event.target.checked) {
            tarefasDiv.appendChild(taskDiv); // Move a tarefa para o final da lista
        } else {
            tarefasDiv.insertBefore(taskDiv, tarefasDiv.firstChild); // Insere a div desmarcada antes do primeiro filho, movendo para cima
        }

        updateCounters();
    }
});
updateCounters();


const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();


    const input = document.querySelector(".adicionarTarefa");

    const taskText = input.value;
    
    if (taskText !== "") {
        adicionarTarefa(taskText);
        input.value = "";
    }
});

function adicionarTarefa(text) {
    const tasksContainer = document.querySelector(".tarefas");

    const newTask = document.createElement("div");
    newTask.classList.add("at");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const label = document.createElement("label");
    label.textContent = text;

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "../imagens/delete_24dp_FILL0_wght400_GRAD0_opsz24.png";
    deleteIcon.alt = "Delete";
    deleteIcon.classList.add("lixo");

    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(deleteIcon);

    tasksContainer.appendChild(newTask);
}





