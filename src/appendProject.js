import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { batchAppendTodo } from "./appendTodo";

function makeProject(projectObj) {
  let item = document.createElement("div");
  item.dataset.projectId = projectObj.id;
  item.textContent = projectObj.name
  item.classList.add("project-item");
  return item;
}

function markHiddenInput(projectId) {
  Containers.todoForm.querySelector("#projectId").value = projectId;
}

function showTodos(e) {
  let projectId = e.target.dataset.projectId;
  batchAppendTodo(Containers.todo, projectId);
  markHiddenInput(projectId);
}

function appendProject(container, projectObj) {
  let project = makeProject(projectObj);
  project.addEventListener("click", showTodos);
  container.append(project);
}

function batchAppendProject(container) {
  for (const key in projectList) {
    appendProject(Containers.project, projectList[key]);
  }
}

export { appendProject, batchAppendProject, markHiddenInput };
