import Containers from "./domContainers";
import { Project } from "./projectFactory";
import { buildProject } from "./domProject";

Containers.projectForm.addEventListener("submit", submitNewProject);

function submitNewProject(e) {
  e.preventDefault();
  makeProject(parsedProps(e.target.elements));
  return false;
}

function parsedProps(target) {
  return {
    name: target.projectName.value
  };
}

function makeProject(props) {
  buildProject(Project(props.name));
}
