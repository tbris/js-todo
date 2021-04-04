import { projectList } from "./projectFactory";

function makeProject(projectObj) {
  let item = document.createElement("div");
  item.textContent = projectObj.name
  item.classList.add("project-item");
  return item;
}

function appendProject(container) {
  for (const key in projectList) {
    container.append(makeProject(projectList[key]));
  }
}

export { appendProject };
