import { TaskCard } from "./TaskCard";
import { CreateElement, AddToSortable } from "./helpers/index";

export const CreateColumn = () => {
  const taskManager = document.getElementsByClassName("task-manager")[0];
  const createColumn = CreateElement(
    "createColumn",
    "div",
    "create-new-column"
  );
  const createColumnBtn = CreateElement(
    "createColumnBtn",
    "button",
    "create-task-list"
  );

  createColumnBtn.innerText = "+";
  createColumn.innerHTML = "<span>Create new task column</span>";

  const createNewTaskColumn = () => {
    taskManager.appendChild(TaskCard());
  };

  createColumnBtn.onclick = () => {
    createNewTaskColumn();
	AddToSortable();
  };

  createColumn.appendChild(createColumnBtn);

  return createColumn;
};
