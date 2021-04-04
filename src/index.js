import { projectList } from "./projectFactory";
import { appendProject } from "./appendProject";
import { batchAppendTodo } from "./appendTodo";
import { seed } from "./seed";
import { projectsContainer, todosContainer } from "./domContainers"
import "./styles.css";

seed();

for (const key in projectList) {
  appendProject(projectsContainer, projectList[key]);
}

batchAppendTodo(todosContainer, Object.keys(projectList)[0])
