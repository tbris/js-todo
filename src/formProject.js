import Containers from "./domContainers";
import { Project } from "./projectFactory";
import { buildProject } from "./domProject";
import { submitNew } from "./formUtilities";

let projectProps = ["projectName"];
let reqProjectProps = ["projectName"];

Containers.projectForm.addEventListener("submit", e => {
  submitNew(e, projectProps, reqProjectProps, makeProject);
});

function makeProject(props) {
  buildProject(Project(props.projectName));
}
