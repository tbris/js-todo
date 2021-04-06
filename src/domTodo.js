import Containers from "./domContainers";
import { projectList } from "./projectFactory";

export { buildTodo, appendProjectTodo, appendAllTodo };

function appendProjectTodo(projectId) {
  Containers.todo.innerHTML = "";
  batchAppendTodo(projectId);
}

function appendAllTodo() {
  Containers.todo.innerHTML = "";
  for (const i in projectList) {
    batchAppendTodo(i);
  }
}

function batchAppendTodo(projectId) {
  let project = projectList[projectId];
  for (const key in project.todos) {
    buildTodo(project.todos[key]);
  }
}

function buildTodo(todoObj) {
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let item = makeTodoItem(todoObj);
  item.addEventListener("click", toggleDesc);
  let desc = makeTodoDesc(todoObj);
  todo.append(item, desc);
  appendTodo(todo);
}

function makeTodoItem(todoObj) {
  let item = document.createElement("div");
  item.classList.add("todo-item");
  item.append(makeTodoProperty("todo-priority", todoObj.priority));
  item.append(makeTodoProperty("todo-title", todoObj.title));
  item.append(makeTodoProperty("todo-date", todoObj.date));
  item.tabIndex = "0";
  return item;
}

function makeTodoDesc(todoObj) {
  let desc = document.createElement("div");
  desc.classList.add("todo-description");
  desc.textContent = todoObj.description;
  return desc
}

function makeTodoProperty(todoClass, content) {
  let property = document.createElement("span");
  property.classList.add(todoClass);
  property.textContent = content;
  return property;
}

function toggleDesc(e) {
  let container = e.path.find(elm => elm.classList == "todo");
  let desc = container.querySelector(".todo-description");
  let factor = "0";
  if (!desc.style.height || desc.style.height == "0px") {
    factor = "auto";
  }
  desc.style.height = factor;
}

function appendTodo(todoElm) {
  Containers.todo.append(todoElm);
  Containers.todo.scrollTop = Containers.todo.scrollHeight;
}
