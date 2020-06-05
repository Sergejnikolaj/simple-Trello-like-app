import { CreateElement } from "./helpers/index";

export const Header = () => {
  const header = CreateElement("header", "div", "header");
  header.innerHTML = "<h1>Simple Trello like App</h1>";

  return header;
};
