document.addEventListener("DOMContentLoaded", () => {
    const updateCounters = () => {
        const totalTasks = document.querySelectorAll(".tarefas .at").length;
        const doneTasks = document.querySelectorAll(".tarefas .at input:checked").length;

        document.getElementById("createdCounter").textContent = totalTasks;
        document.getElementById("doneCounter").textContent = `${doneTasks} de ${totalTasks}`;
    };

    document.querySelectorAll(".delete-icon").forEach(icon => {
        icon.addEventListener("click", event => {
            event.target.closest(".at").remove();
            updateCounters();
        });
    });

    document.querySelectorAll(".tarefas .at input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", event => {
            const taskDiv = event.target.closest(".at");
            const tarefasDiv = document.querySelector(".tarefas");
            
            if (event.target.checked) {
                tarefasDiv.appendChild(taskDiv);
            } else {
                tarefasDiv.insertBefore(taskDiv, tarefasDiv.firstChild);
            }

            updateCounters();
        });
    });

    updateCounters();
});
