import { Containers } from "./domUtilities";
import { projectList } from "./projectFactory";
import { buildProject, showTodos } from "./domProjectStrc";

export { batchAppendProject, appendProject };

function batchAppendProject() {
  for (const key in projectList) {
    let project = buildProject(projectList[key]);
    appendProject(project)
  }
}

function appendProject(projectElm) {
  Containers.project.append(projectElm);
  Containers.project.scrollTop = Containers.project.scrollHeight;
}
