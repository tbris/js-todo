import { Containers } from './domUtilities';
import { projectList } from './projectFactory';
import { buildProject } from './domProjectStrc';

function appendProject(projectElm) {
  Containers.project.append(projectElm);
  Containers.project.scrollTop = Containers.project.scrollHeight;
}

function batchAppendProject() {
  Object.keys(projectList).forEach((key) => {
    const project = buildProject(projectList[key]);
    appendProject(project);
  });
}

export { batchAppendProject, appendProject };
