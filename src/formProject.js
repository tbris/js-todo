import { Containers } from "./domUtilities";
import { Project, projectList } from "./projectFactory";
import { buildProject } from "./domProjectStrc";
import { appendProject } from "./domProject";
import { submitNew } from "./formUtilities";
import { storageInit } from "./storage";

let projectProps = ["projectName"];
let reqProjectProps = ["projectName"];

Containers.projectForm.addEventListener("submit", e => {
  submitNew(e, projectProps, reqProjectProps, makeProject);
});

function makeProject(props) {
  let project = Project(props.projectName);
  storageInit(project);
  appendProject(buildProject(projectList[project]));
}
