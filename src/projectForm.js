import Containers from "./domContainers";
import { Project } from "./projectFactory";
import { appendProject } from "./appendProject";

function buildProject(name) {
  appendProject(Containers.project, Project(name));
}

function submitNewProject(e) {
  e.preventDefault();
  let properties = {};
  for (let i = 0; i < e.target.elements.length; i++) {
    let element = e.target.elements.item(i);
    properties[element.name] = element.value;
  }
  buildProject(properties.projectName);
  return false;
}

Containers.projectForm.addEventListener("submit", submitNewProject);
