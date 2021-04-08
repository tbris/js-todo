import { Containers, Root } from "./domUtilities";
import { projectList } from "./projectFactory";
import { Todo } from "./todoFactory";
import { buildTodo } from "./domTodoStrc";
import { appendTodo } from "./domTodo";
import { submitNew } from "./formUtilities";
import { storeOne } from "./storage";

let todoProps = ["todoTitle" ,"todoDescription",
                 "todoPriority", "todoDate"];
let reqTodoProps = ["todoTitle", "todoDate"];

Containers.todoForm.addEventListener("submit", e => {
  submitNew(e, todoProps, reqTodoProps, makeTodo);
});

function makeTodo(props) {
  let todo = Todo(
    props.todoTitle, props.todoDescription, props.todoPriority,
    new Date(props.todoDate)
  );
  let projectId = Root.currentProject().dataset.projectId;
  let todoId = projectList[projectId].addTodo(todo);
  storeOne(projectId, todoId);
  appendTodo(buildTodo(todo, todoId, projectId));
}
