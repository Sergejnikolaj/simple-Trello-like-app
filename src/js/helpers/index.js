import Sortable from "sortablejs";

export const CreateElement = (elName, element, className) => {
  elName = document.createElement(`${element}`);
  elName.className = className;

  return elName;
};

export const OnEnterHandler = (el, event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    el.click();
  }
};

export const SelectFocusInput = (input) => {
  input.focus();
  input.select();
};

export const TrimTitle = (val, minLength) => {
  const cleanVal = val.trim();
  const newValue =
    cleanVal.length >= minLength
      ? cleanVal
      : `must be ${minLength} symbol at least`;
  return newValue;
};

export const AddToSortable = () => {
  const nodes = document.querySelectorAll(".task-list");
  for (let i = 0; nodes[i]; i++) {
    let node = nodes[i];
    var sortable = new Sortable(node, {
      group: ".task-list",
      animation: 150,
    });
  }
};
