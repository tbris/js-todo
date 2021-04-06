import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { appendProjectTodo, appendAllTodo } from "./domTodo";

export { buildProject, batchAppendProject };

function batchAppendProject() {
  for (const key in projectList) {
    buildProject(projectList[key]);
  }
}

function buildProject(projectObj) {
  let project = makeProject(projectObj);
  project.addEventListener("click", showTodos);
  appendProject(project);
}

function makeProject(projectObj) {
  let item = document.createElement("div");
  item.dataset.projectId = projectObj.id;
  item.classList.add("project-item");
  item.append(makeProjectName(projectObj.name));
  if (projectObj.id != "default") item.append(makeProjectRemove());
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
  button.addEventListener("click", e => {
    e.stopPropagation();
    let todoElm = e.target.parentElement;
    let id = todoElm.dataset.projectId;
    delete projectList[id];
    todoElm.remove();
    let defaultProject = document.querySelector('[data-project-id="default"]');
    if (todoElm.className.includes("current-project") || defaultProject.className.includes("current-project")) {
      defaultProject.click();
    }
  });
  button.classList.add("project-remove");
  button.innerHTML = "&times;";
  return button;
}

function showTodos(e) {
  let project = e.path.find(elm => elm.className.includes("project-item"));
  let projectId = project.dataset.projectId;
  getTodos(projectId);
  markHiddenInput(projectId);
  addCurrentClass(projectId);
}

function getTodos(projectId) {
  if (projectId == "default") return appendAllTodo();
  appendProjectTodo(projectId)
}

function markHiddenInput(projectId) {
  Containers.todoForm.querySelector("#projectId").value = projectId;
}

function addCurrentClass(projectId) {
  document.querySelectorAll(".current-project").forEach(project => {
    project.classList.remove("current-project");
  });
  let object = document.querySelector(`[data-project-id="${projectId}"]`);
  object.classList.add("current-project");
}

function appendProject(projectElm) {
  Containers.project.append(projectElm);
  Containers.project.scrollTop = Containers.project.scrollHeight;
}
