import buildTodo from './domTodoStrc';
import { Containers, DefaultProject } from './domUtilities';
import { projectList } from './projectFactory';
import { appendProjectTodo, appendAllTodo, appendTodo } from './domTodo';

function sortDefBy(factor) {
  const props = [];
  Object.keys(projectList).forEach((i) => {
    Object.keys(projectList[i].todos).forEach((y) => {
      props.push([projectList[i].todos[y], y, i]);
    });
  });
  return props.sort((a, b) => new Date(a[0][factor]) - new Date(b[0][factor]));
}

function validateDefault(factor) {
  if (factor === 'none') return appendAllTodo();
  let sorted = sortDefBy(factor);
  if (factor === 'priority') sorted = sorted.reverse();
  return sorted.forEach((batch) => {
    appendTodo(buildTodo(...batch));
  });
}

function sortBy(factor, todos) {
  return Object.keys(todos).sort((a, b) => todos[a][factor] - todos[b][factor]);
}

function validateProject(factor, projectId) {
  if (factor === 'none') return appendProjectTodo(projectId);
  const { todos } = projectList[projectId];
  let sorted = sortBy(factor, todos);
  if (factor === 'priority') sorted = sorted.reverse();
  return sorted.forEach((key) => {
    appendTodo(buildTodo(todos[key], key, projectId));
  });
}

function sortTodos(factor, projectId) {
  Containers.todo.innerHTML = '';
  if (+projectId === DefaultProject.id) {
    validateDefault(factor);
  } else {
    validateProject(factor, projectId);
  }
}

export default sortTodos;
