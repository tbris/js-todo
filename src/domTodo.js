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
  let descContent = document.createElement("div");
  descContent.classList.add("todo-desc-content");
  descContent.textContent = todoObj.description;
  desc.append(descContent);
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
  let cont = desc.querySelector(".todo-desc-content");
  desc.style.height = Math.abs(desc.clientHeight - cont.clientHeight) + "px";
}

function appendTodo(todoElm) {
  Containers.todo.append(todoElm);
  Containers.todo.scrollTop = Containers.todo.scrollHeight;
}
