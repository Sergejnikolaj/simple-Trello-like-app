import {
  CreateElement,
  SelectFocusInput,
  OnEnterHandler,
  TrimTitle,
} from "./helpers/index";

export const TaskListItem = () => {
  const defaultTitle = "task title";
  const taskListItem = CreateElement("taskListItem", "li", "item");
  const newTask = CreateElement("newTask", "span", "default-task-name");
  const deleteTaskBtn = CreateElement(
    "deleteTaskBtn",
    "button",
    "delete-task-btn"
  );

  newTask.innerText = defaultTitle;
  deleteTaskBtn.innerHTML = "&times;";

  const deleteTaskFromList = () => {
    const deleteTaskBtn = event.srcElement;
    const taskList = deleteTaskBtn.parentNode.parentNode;
    const taskListItem = deleteTaskBtn.parentNode;
    taskList.removeChild(taskListItem);
  };

  const setTaskTitle = () => {
    const taskBlock = event.srcElement;
    const prevVal = taskBlock.textContent;
    const taskListItem = taskBlock.parentNode;
    const taskTxtArea = CreateElement(
      "taskTxtArea",
      "textarea",
      "task-text-area"
    );
    const saveTaskBtn = CreateElement("saveTaskBtn", "button", "save-task-btn");

    saveTaskBtn.innerHTML = "&#10004;";
    taskTxtArea.value = prevVal;
    taskTxtArea.onclick = () => SelectFocusInput(taskTxtArea);
    taskTxtArea.addEventListener("keyup", () =>
      OnEnterHandler(saveTaskBtn, event)
    );

    saveTaskBtn.onclick = () => {
      taskListItem.removeChild(taskTxtArea);
      taskListItem.removeChild(saveTaskBtn);
      taskBlock.innerText = TrimTitle(taskTxtArea.value, 2);
      taskListItem.appendChild(taskBlock);
    };

    taskListItem.removeChild(taskBlock);
    taskListItem.appendChild(taskTxtArea);
    taskListItem.appendChild(saveTaskBtn);
    SelectFocusInput(taskTxtArea);
  };

  deleteTaskBtn.onclick = () => {
    deleteTaskFromList();
  };
  newTask.onclick = () => {
    setTaskTitle(defaultTitle);
  };

  taskListItem.appendChild(newTask);
  taskListItem.appendChild(deleteTaskBtn);

  return taskListItem;
};
