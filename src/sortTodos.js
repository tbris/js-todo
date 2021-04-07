import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { buildTodo } from "./domTodo";
import { appendProjectTodo, appendAllTodo } from "./domTodo";

export { sortTodos };

function sortTodos(factor, projectId) {
  Containers.todo.innerHTML = "";
  if (projectId == "default") {
    if (factor == "none") return appendAllTodo();
    let sorted = sortDefBy(factor)
    if (factor == "priority") sorted = sorted.reverse();
    sorted.forEach(batch => buildTodo(...batch));
  } else {
    if (factor == "none") return appendProjectTodo(projectId);
    let todos = projectList[projectId].todos;
    let sorted = sortBy(factor, todos);
    if (factor == "priority") sorted = sorted.reverse();
    sorted.forEach(key => buildTodo(todos[key], key, projectId))
  }
}

function sortDefBy(factor) {
  let props = [];
  for (const i in projectList) {
    for (const y in projectList[i].todos) {
      props.push([projectList[i].todos[y], y, i])
    }
  }
  return props.sort((a,b) => a[0][factor] - b[0][factor])
}

function sortBy(factor, todos) {
  return Object.keys(todos).sort((a, b) => todos[a][factor] - todos[b][factor])
}
