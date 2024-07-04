document.addEventListener("DOMContentLoaded", () => {
    const updateCounters = () => {
        const totalTasks = document.querySelectorAll(".tarefas .at").length;
        const doneTasks = document.querySelectorAll(".tarefas .at input:checked").length;
        document.getElementById("createdCounter").textContent = totalTasks;
        document.getElementById("doneCounter").textContent = `${doneTasks} de ${totalTasks}`;
    };

    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll(".tarefas .at").forEach(task => {
            const text = task.querySelector("label").textContent;
            const done = task.querySelector("input").checked;
            tasks.push({ text, done });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => {
            adicionarTarefa(task.text, task.done);
        });
        updateCounters();
    };

    const adicionarTarefa = (text, done = false) => {
        const tasksContainer = document.querySelector(".tarefas");

        const newTask = document.createElement("div");
        newTask.classList.add("at");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = done;

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
    };

    document.querySelector(".tarefas").addEventListener("click", event => {
        if (event.target.classList.contains("lixo")) {
            event.target.closest(".at").remove();
            saveTasks();
            updateCounters();
        } else if (event.target.type === "checkbox") {
            const taskDiv = event.target.closest(".at");
            const tarefasDiv = document.querySelector(".tarefas");

            if (event.target.checked) {
                tarefasDiv.appendChild(taskDiv);
            } else {
                tarefasDiv.insertBefore(taskDiv, tarefasDiv.firstChild);
            }

            saveTasks();
            updateCounters();
        }
    });

    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const input = document.querySelector(".adicionarTarefa");
        const taskText = input.value;

        if (taskText !== "") {
            adicionarTarefa(taskText);
            saveTasks();
            input.value = "";
            updateCounters();
        }
    });

    loadTasks();
});
