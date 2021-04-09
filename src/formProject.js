import { Containers } from './domUtilities';
import { Project, projectList } from './projectFactory';
import { buildProject } from './domProjectStrc';
import { appendProject } from './domProject';
import submitNew from './formUtilities';
import { storageInit } from './storage';

const projectProps = ['projectName'];
const reqProjectProps = ['projectName'];

function makeProject(props) {
  const project = Project(props.projectName);
  storageInit(project);
  appendProject(buildProject(projectList[project]));
}

Containers.projectForm.addEventListener('submit', (e) => {
  submitNew(e, projectProps, reqProjectProps, makeProject);
});
