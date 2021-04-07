import { format } from "date-fns";
import { projectList } from "./projectFactory";

export { buildTodo };

function buildTodo(todoObj, todoId, projectId) {
  let todo = document.createElement("div");
  todo.id = projectId + "#" + todoId;
  todo.classList.add("todo");

  let item = makeTodoItem(todoObj);
  item.addEventListener("click", toggleDesc);

  let desc = makeTodoDesc(todoObj);
  todo.append(item, desc);
  return todo
}

function makeTodoItem(todoObj) {
  let item = document.createElement("div");
  item.classList.add("todo-item");
  item.append(
    makeItemProperty(todoPriority, todoObj.priority),
    makeItemProperty(todoTitle, todoObj.title),
    makeTodoRemove()
  );
  item.tabIndex = "0";
  return item;
}

function makeItemProperty(fname, content) {
  let property = document.createElement("span");
  fname(property, content);
  return property;
}

function todoTitle(element, content) {
  element.classList.add("todo-title");
  element.textContent = content;
}

function todoPriority(element, content) {
  let priorities = {
    1: "todo-priority-low",
    2: "todo-priority-medium",
    3: "todo-priority-high"
  }
  element.classList.add("todo-priority", priorities[content]);
}

function makeTodoRemove() {
  let button = document.createElement("button");
  button.addEventListener("click", removeTodo);
  button.classList.add("todo-remove");
  button.innerHTML = "&times;";
  return button;
}

function removeTodo(e) {
  e.stopPropagation();
  let todoElm = e.path.find(elm => elm.className == "todo");
  let ids = todoElm.id.split("#");
  delete projectList[ids[0]].todos[ids[1]];
  todoElm.remove();
}

function makeTodoDesc(todoObj) {
  let desc = document.createElement("div");
  desc.classList.add("todo-description");
  let descContent = document.createElement("div");
  descContent.classList.add("todo-desc-content");
  descContent.append(
    makeDescProperty(
      "todo-date", format(new Date(todoObj.date), "EEE MMM d, yyyy, p")
    ),
    makeDescProperty(
      "desc-content", todoObj.description
    )
  );
  desc.append(descContent);
  return desc
}

function makeDescProperty(className, content) {
  let item = document.createElement("div");
  item.classList.add(className);
  item.textContent = content;
  return item;
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
