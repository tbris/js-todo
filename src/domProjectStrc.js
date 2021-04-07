import { Containers, DefaultProject, Root } from "./domUtilities";
import { projectList } from "./projectFactory";
import { appendProjectTodo, appendAllTodo } from "./domTodo";
import { sortTodos } from "./sortTodos";

export { makeProject, showTodos };

function makeProject(projectObj) {
  let item = document.createElement("div");
  item.dataset.projectId = projectObj.id;
  item.classList.add("project-item");
  item.append(makeProjectName(projectObj.name));
  if (projectObj.id != DefaultProject.id) item.append(makeProjectRemove());
  item.tabIndex = "0";
  return item;
}

function makeProjectName(name) {
  let property = document.createElement("div");
  property.classList.add("project-name");
  property.textContent = name;
  return property;
}

function makeProjectRemove() {
  let button = document.createElement("button");
  button.addEventListener("click", removeProject);
  button.classList.add("project-remove");
  button.innerHTML = "&times;";
  return button;
}

function removeProject(e) {
  e.stopPropagation();
  let project = e.target.parentElement;
  let id = project.dataset.projectId;
  delete projectList[id];
  project.remove();
  focusOtherProject(project);
}

function focusOtherProject(elm) {
  let defPr = DefaultProject.element();
  if (![elm, defPr].some(e => e.className.includes("current-project"))) return;
  defPr.click();
}

function showTodos(e) {
  let project = e.path.find(elm => elm.className.includes("project-item"));
  let projectId = project.dataset.projectId;
  sortTodos(Containers.sortChanger.dataset.sortFactor, projectId);
  addCurrentClass(projectId);
}

function addCurrentClass(projectId) {
  document.querySelectorAll(".current-project").forEach(project => {
    project.classList.remove("current-project");
  });
  let object = Root.project(projectId);
  object.classList.add("current-project");
}
