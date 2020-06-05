import {
  CreateElement,
  SelectFocusInput,
  OnEnterHandler,
  TrimTitle,
} from "./helpers/index";

export const TaskCardHeader = () => {
  const defaultName = "default task value";
  const deleteColumnWrap = CreateElement(
    "deleteColumnWrap",
    "div",
    "delete-column-wrap"
  );
  const deleteColumnBtn = CreateElement(
    "deleteColumnBtn",
    "button",
    "delete-column-btn"
  );
  const columnTitleWrap = CreateElement(
    "columnTitleWrap",
    "div",
    "column-title-wrap"
  );
  const columnTitle = CreateElement("columnTitle", "span", "column-title");

  const deleteColumnFromDesk = () => {
    const deleteColumnBtn = event.srcElement;
    const taskListItem = deleteColumnBtn.parentNode.parentNode;
    const askListItem = deleteColumnBtn.parentNode.parentNode.parentNode;
    askListItem.removeChild(taskListItem);
  };

  const changeTaskColumnName = (val) => {
    const taskBlock = event.srcElement;
    const prevVal = taskBlock.textContent;
    const taskListItem = taskBlock.parentNode;
    const taskColumnTitle = CreateElement(
      "taskColumnTitle",
      "input",
      "task-column-title"
    );
    const saveTask = CreateElement("saveTask", "button", "save-task-value");

    taskColumnTitle.value = prevVal;
    saveTask.innerHTML = "&#10004;";

    taskColumnTitle.onclick = () => SelectFocusInput(taskColumnTitle);

    taskColumnTitle.addEventListener("keyup", () =>
      OnEnterHandler(saveTask, event)
    );

    saveTask.onclick = () => {
      taskListItem.removeChild(taskColumnTitle);
      taskListItem.removeChild(saveTask);
      taskBlock.innerText = TrimTitle(taskColumnTitle.value, 2);
      taskListItem.appendChild(taskBlock);
    };

    taskListItem.removeChild(taskBlock);
    taskListItem.appendChild(taskColumnTitle);
    taskListItem.appendChild(saveTask);
    SelectFocusInput(taskColumnTitle);
  };

  deleteColumnBtn.innerHTML = "&times;";
  columnTitle.innerText = "column title";

  deleteColumnBtn.onclick = () => {
    deleteColumnFromDesk();
  };

  columnTitle.onclick = () => {
    changeTaskColumnName(defaultName);
  };

  columnTitleWrap.appendChild(columnTitle);
  deleteColumnWrap.appendChild(columnTitleWrap);
  deleteColumnWrap.appendChild(deleteColumnBtn);

  return deleteColumnWrap;
};
