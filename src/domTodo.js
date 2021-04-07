import { Containers } from "./domUtilities";
import { projectList } from "./projectFactory";
import { buildTodo } from "./domTodoStrc";

export { appendProjectTodo, appendAllTodo, appendTodo };

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
    let todo = buildTodo(project.todos[key], key, projectId);
    appendTodo(todo);
  }
}

function appendTodo(todoElm) {
  Containers.todo.append(todoElm);
  Containers.todo.scrollTop = Containers.todo.scrollHeight;
}
