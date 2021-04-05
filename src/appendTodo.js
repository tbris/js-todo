import { projectList } from "./projectFactory";

function makeProperty(todoClass, content) {
  let property = document.createElement("span");
  property.classList.add(todoClass);
  property.textContent = content;
  return property;
}

function makeTodo(todoObj) {
  let item = document.createElement("div");
  item.classList.add("todo-item");
  item.append(makeProperty("todo-priority", todoObj.priority));
  item.append(makeProperty("todo-title", todoObj.title));
  item.append(makeProperty("todo-date", todoObj.date));
  item.tabIndex = "0";
  return item;
}

function appendTodo(container, todoObj) {
  container.append(makeTodo(todoObj));
  container.scrollTop = container.scrollHeight;
}

function batchAppendTodo(container, projectId) {
  container.innerHTML = "";
  let project = projectList[projectId];
  for (const key in project.todos) {
    appendTodo(container, project.todos[key]);
  }
}

export { appendTodo, batchAppendTodo };
