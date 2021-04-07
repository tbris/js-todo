import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { Todo } from "./todoFactory";
import { buildTodo } from "./domTodo";
import { submitNew } from "./formUtilities";

let todoProps = ["todoContainer", "todoTitle" ,"todoDescription",
                 "todoPriority", "todoDate"];
let reqTodoProps = ["todoTitle", "todoDate"];

Containers.todoForm.addEventListener("submit", e => {
  submitNew(e, todoProps, reqTodoProps, makeTodo);
});

function makeTodo(props) {
  let todo = Todo(props.todoTitle, props.todoDescription, props.todoPriority,
                  new Date(props.todoDate));
  let projectId = props.todoContainer == "default" ? 0 : props.todoContainer;
  let todoId = projectList[projectId].addTodo(todo);
  buildTodo(todo, todoId, projectId);
}
