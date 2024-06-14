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
