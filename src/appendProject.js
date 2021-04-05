import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { batchAppendTodo, appendAllTodo } from "./appendTodo";

function makeProject(projectObj) {
  let item = document.createElement("div");
  item.dataset.projectId = projectObj.id;
  item.textContent = projectObj.name
  item.classList.add("project-item");
  item.tabIndex = "0";
  return item;
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

function showTodos(e) {
  let projectId = e.target.dataset.projectId;
  let isDefault = projectId == "default";
  if (isDefault) {
    appendAllTodo(Containers.todo);
  } else {
    batchAppendTodo(Containers.todo, projectId, isDefault);
  }
  markHiddenInput(projectId);
  addCurrentClass(projectId);
}

function appendProject(container, projectObj) {
  let project = makeProject(projectObj);
  project.addEventListener("click", showTodos);
  container.append(project);
  container.scrollTop = container.scrollHeight;
  return project;
}

function batchAppendProject(container) {
  for (const key in projectList) {
    appendProject(Containers.project, projectList[key]);
  }
}

export { appendProject, batchAppendProject };
