const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

console.log("taskList =", taskList); // test

addBtn.addEventListener("click", () => {
    const task = input.value.trim();
    if (task === "") return alert("please enter a task");

    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);

    input.value = "";
});
