import Containers from "./domContainers"
import { projectList } from "./projectFactory";
import { appendProject } from "./appendProject";
import { batchAppendTodo } from "./appendTodo";
import "./projectForm";
import { seed } from "./seed";
import "./styles.css";

seed();

for (const key in projectList) {
  appendProject(Containers.project, projectList[key]);
}


batchAppendTodo(Containers.todo, Object.keys(projectList)[0])
