import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { Todo } from "./todoFactory";
import { buildTodo } from "./domTodo";

Containers.todoForm.addEventListener("submit", submitNewTodo);

function submitNewTodo(e) {
  e.preventDefault();
  makeTodo(parsedProps(e.target.elements));
  return false;
}

function parsedProps(target) {
  return {
    container: target.todoContainer.value,
    title: target.todoTitle.value,
    description: target.todoDescription.value,
    priority: getRadioPriority(Array.from(target.todoPriority)).value,
    date: target.todoDate.value
  };
}

function makeTodo(props) {
  let todo = Todo(props.title, props.description, props.priority, props.date);
  let projectId = props.container == "default" ? 0 : props.container;
  let todoId = projectList[projectId].addTodo(todo);
  buildTodo(todo, todoId, projectId);
}

function getRadioPriority(collection) {
  return collection.find(item => item.checked);
}
