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
  let todo = makeTodo(todoObj);
  appendTodo(todo);
}

function makeTodo(todoObj) {
  let item = document.createElement("div");
  item.classList.add("todo-item");
  item.append(makeTodoProperty("todo-priority", todoObj.priority));
  item.append(makeTodoProperty("todo-title", todoObj.title));
  item.append(makeTodoProperty("todo-date", todoObj.date));
  item.tabIndex = "0";
  return item;
}

function makeTodoProperty(todoClass, content) {
  let property = document.createElement("span");
  property.classList.add(todoClass);
  property.textContent = content;
  return property;
}

function appendTodo(todoElm) {
  Containers.todo.append(todoElm);
  Containers.todo.scrollTop = Containers.todo.scrollHeight;
}
