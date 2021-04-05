import Containers from "./domContainers";
import { Project } from "./projectFactory";
import { appendProject } from "./appendProject";

function parsedProps(properties) {
  return {
    name: properties.projectName
  };
}

function buildProject(props) {
  appendProject(Containers.project, Project(props.name));
}

function submitNewProject(e) {
  e.preventDefault();
  let properties = {};
  for (let i = 0; i < e.target.elements.length; i++) {
    let element = e.target.elements.item(i);
    properties[element.name] = element.value;
  }
  buildProject(parsedProps(properties));
  return false;
}

Containers.projectForm.addEventListener("submit", submitNewProject);
