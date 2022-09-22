const inp = document.querySelector("#inp");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector(".taskList");

addBtn.addEventListener("click", (e) => {
  if (inp.value) {
    const task = document.createElement("div");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const taskText = document.createElement("div");
    taskText.classList.add("taskText");
    taskText.textContent = inp.value;

    const delTask = document.createElement("button");
    delTask.classList.add("btn");
    delTask.textContent = "×";

    const delBtn = document.createElement("button");
    const cleverlypaired = document.createElement("div");
    const kedeverything = document.createElement("div");

    const spanDel = document.createElement("span");
    spanDel.textContent = "Удалить!";

    const fa1 = document.createElement("fa");
    const fa2 = document.createElement("fa");
    const fa3 = document.createElement("fa");

    delBtn.className = "variousamechanics";
    kedeverything.className = "kedeverything";
    cleverlypaired.className = "cleverlypaired";
    fa1.classList.add("fa", "fa-trash-o");
    fa2.classList.add("fa", "fa-question");
    fa3.classList.add("fa", "fa-check");

    cleverlypaired.append(fa1, fa2, fa3);
    kedeverything.append(spanDel);
    delBtn.append(cleverlypaired, kedeverything);
    delBtn.addEventListener("click", function () {
      console.log(1);
      if (this.classList.contains("samilpaken")) {
        this.classList.add("done");
        spanDel.textContent = "Удалено";
        setTimeout(() => {
          task.remove(delBtn);
        }, 1500);
        task.classList.add("task", "taskDeleted");
        task.style.opacity = "0";
      } else {
        this.classList.add("samilpaken");
        spanDel.textContent = "Рисковать ма де";
      }
    });

    task.append(checkbox);
    task.append(taskText);
    task.append(delBtn);
    taskList.prepend(task);

    inp.value = "";

    checkbox.addEventListener("change", (e) => {
      if (checkbox.checked) {
        e.target.parentElement.classList.add("done");
        e.target.classList.add("doneCheckbox");
      }
    });
  }
});
