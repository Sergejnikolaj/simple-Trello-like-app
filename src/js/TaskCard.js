import { TaskCardHeader } from "./TaskCardHeader";
import { TaskListItem } from "./TaskListItem";
import { CreateElement, AddToSortable } from "./helpers/index";
import Sortable from 'sortablejs';

export const TaskCard = () => {
  const cardListWrapper = CreateElement(
    "cardListWrapper",
    "div",
    "card-list-wrapper"
  );
  const cardActWrapper = CreateElement(
    "cardActWrapper",
    "div",
    "card-act-wrapper"
  );
  const addTaskBtnWrap = CreateElement(
    "addTaskBtnWrap",
    "div",
    "add-task-wrap"
  );
  const addTaskBtn = CreateElement("addTaskBtn", "button", "add-task-btn");
  const taskListWrap = CreateElement("taskListWrap", "div", "task-list-wrap");
  const taskList = CreateElement("taskList", "ul", "task-list");

  const addListItem = () => {
    const addTaskBtn = event.srcElement;
    const parentList = addTaskBtn.parentNode.parentNode;
    const taskList = parentList.childNodes[1].childNodes[0];

    taskList.appendChild(TaskListItem());
  };

  addTaskBtn.innerText = "Add Task";

  addTaskBtn.onclick = () => {
    addListItem();
    AddToSortable();
  };

  addTaskBtnWrap.appendChild(addTaskBtn);
  taskListWrap.appendChild(taskList);
  cardListWrapper.appendChild(cardActWrapper);
  cardActWrapper.appendChild(TaskCardHeader());
  cardActWrapper.appendChild(taskListWrap);
  cardActWrapper.appendChild(addTaskBtnWrap);

  return cardListWrapper;
};
