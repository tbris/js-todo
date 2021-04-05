import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { appendTodo } from "./appendTodo";

function getRadioPriority(collection) {
  return collection.find(item => item.checked);
}

function parsedProps(target) {
  let a= {
    container: target.todoContainer.value,
    title: target.todoTitle.value,
    description: target.todoDescription.value,
    priority: getRadioPriority(Array.from(target.todoPriority)).value,
    date: target.todoDate.value
  };
  console.log(a)
 return a
}

function buildTodo(props) {
  let todo = projectList[props.container].addTodo(
    props.title, props.description, props.priority, props.date
  );
  appendTodo(Containers.todo, todo);
}

function submitNewTodo(e) {
  e.preventDefault();
  buildTodo(parsedProps(e.target.elements));
  return false;
}

Containers.todoForm.addEventListener("submit", submitNewTodo);
