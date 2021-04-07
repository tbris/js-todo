import { Containers } from "./domUtilities";
import { projectList } from "./projectFactory";
import { makeProject, showTodos } from "./domProjectStrc";

export { buildProject, batchAppendProject };

function batchAppendProject() {
  for (const key in projectList) {
    buildProject(projectList[key], true);
  }
}

function buildProject(projectObj) {
  let project = makeProject(projectObj);
  project.addEventListener("click", showTodos);
  appendProject(project);
}

function appendProject(projectElm) {
  Containers.project.append(projectElm);
  Containers.project.scrollTop = Containers.project.scrollHeight;
}
