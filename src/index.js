import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { batchAppendProject } from "./appendProject";
import { batchAppendTodo } from "./appendTodo";
import "./projectForm";
import "./todoForm";
import "./domSidebar";
import { seed } from "./seed";

seed();

batchAppendProject(Containers.project);
document.querySelector('[data-project-id="default"]').click();
