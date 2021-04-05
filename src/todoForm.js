import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { appendTodo } from "./appendTodo";

function parsedProps(properties) {
  return {
    container: properties.todoContainer,
    title: properties.todoTitle,
    description: properties.todoDescription,
    priority: properties.todoPriority,
    date: properties.todoDate
  };
}

function buildTodo(props) {
  let todo = projectList[props.container].addTodo(
    props.title, props.description, props.priority, props.date
  );
  appendTodo(Containers.todo, todo);
}

function submitNewTodo(e) {
  e.preventDefault();
  let properties = {};
  for (let i = 0; i < e.target.elements.length; i++) {
    let element = e.target.elements.item(i);
    properties[element.name] = element.value;
  }
  buildTodo(parsedProps(properties));
  return false;
}

Containers.todoForm.addEventListener("submit", submitNewTodo);
