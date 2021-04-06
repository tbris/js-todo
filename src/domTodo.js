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
    buildTodo(project.todos[key], key, projectId);
  }
}

function buildTodo(todoObj, todoId, projectId) {
  let todo = document.createElement("div");
  todo.id = projectId + "#" + todoId;
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
  item.append(makeTodoPriority(todoObj.priority));
  item.append(makeTodoProperty("todo-title", todoObj.title));
  item.append(makeTodoProperty("todo-date", todoObj.date));
  item.append(makeTodoRemove());
  item.tabIndex = "0";
  return item;
}

function makeTodoProperty(todoClass, content) {
  let property = document.createElement("span");
  property.classList.add(todoClass);
  property.textContent = content;
  return property;
}

let priorities = {
  1: "todo-priority-low",
  2: "todo-priority-medium",
  3: "todo-priority-high"
}

function makeTodoPriority(priority) {
  let property = document.createElement("div");
  property.classList.add("todo-priority", priorities[priority]);
  return property;
}

function makeTodoRemove() {
  let button = document.createElement("button");
  button.addEventListener("click", e => {
    e.stopPropagation();
    let todoElm = e.path.find(elm => elm.className == "todo");
    let ids = todoElm.id.split("#");
    delete projectList[ids[0]].todos[ids[1]];
    todoElm.remove();
  });
  button.classList.add("todo-remove");
  button.innerHTML = "&times;";
  return button;
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

function toggleDesc(e) {
  let container = e.path.find(elm => elm.classList == "todo");
  let desc = container.querySelector(".todo-description");
  if (desc.clientHeight) {
    desc.style.height = 0;
  } else {
    let cont = desc.querySelector(".todo-desc-content");
    desc.style.height = cont.clientHeight + "px";
  }
}

function appendTodo(todoElm) {
  Containers.todo.append(todoElm);
  Containers.todo.scrollTop = Containers.todo.scrollHeight;
}
