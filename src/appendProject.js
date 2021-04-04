import { projectList } from "./projectFactory";
import { batchAppendTodo } from "./appendTodo";
import { todosContainer } from "./domContainers";

function makeProject(projectObj) {
  let item = document.createElement("div");
  item.dataset.projectId = projectObj.id;
  item.textContent = projectObj.name
  item.classList.add("project-item");
  return item;
}

function showTodos(e) {
  batchAppendTodo(todosContainer, e.target.dataset.projectId)
}

function appendProject(container, projectObj) {
  let project = makeProject(projectObj);
  project.addEventListener("click", showTodos);
  container.append(project);
}

export { appendProject };
