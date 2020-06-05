import { Header } from "./js/Header";
import { CreateColumn } from "./js/CreateColumn";
import { CreateElement } from "./js/helpers/index";
// import WebpackLogo from './images/webpack-logo.svg'
import "./styles/index.scss";

window.addEventListener("load", () => {
  const mainWrapper = document.getElementsByClassName("main-wrapper")[0];
  const taskManagerWrapper = CreateElement(
    "taskManagerWrapper",
    "div",
    "task-manager-wrapper"
  );
  const taskManager = CreateElement("taskManager", "div", "task-manager");

  mainWrapper.appendChild(Header());
  mainWrapper.appendChild(taskManagerWrapper);
  taskManagerWrapper.appendChild(taskManager);
  taskManager.appendChild(CreateColumn());
});
