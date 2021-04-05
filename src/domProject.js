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
  item.textContent = projectObj.name
  item.classList.add("project-item");
  item.tabIndex = "0";
  return item;
}

function showTodos(e) {
  let projectId = e.target.dataset.projectId;
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
