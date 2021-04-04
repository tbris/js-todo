import { projectList } from "./projectFactory";
import { appendProject } from "./appendProject";
import { appendTodo } from "./appendTodo";
import { seed } from "./seed";
import "./styles.css";

let projectsContainer = document.getElementById("project-list");
let todosContainer = document.getElementById("todo-list");

seed();

for (const key in projectList) {
  appendProject(projectsContainer, projectList[key]);
}

let firstProject = projectList[Object.keys(projectList)[0]];
for (const key in firstProject.todos) {
  appendTodo(todosContainer, firstProject.todos[key])
}
