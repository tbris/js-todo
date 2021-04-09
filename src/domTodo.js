import { Containers } from './domUtilities';
import { projectList } from './projectFactory';
import buildTodo from './domTodoStrc';

function appendTodo(todoElm) {
  Containers.todo.append(todoElm);
  Containers.todo.scrollTop = Containers.todo.scrollHeight;
}

function batchAppendTodo(projectId) {
  const project = projectList[projectId];
  Object.keys(project.todos).forEach((key) => {
    const todo = buildTodo(project.todos[key], key, projectId);
    appendTodo(todo);
  });
}

function appendProjectTodo(projectId) {
  Containers.todo.innerHTML = '';
  batchAppendTodo(projectId);
}

function appendAllTodo() {
  Containers.todo.innerHTML = '';
  Object.keys(projectList).forEach((key) => {
    batchAppendTodo(key);
  });
}

export { appendProjectTodo, appendAllTodo, appendTodo };
