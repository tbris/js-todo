import { projectList } from "./projectFactory";
import { batchAppendProject } from "./domProject";

import "./projectForm";
import "./todoForm";
import "./domSidebar";
import "./defaultProjectFactory";

import { seed } from "./seed";

seed();

batchAppendProject();
document.querySelector('[data-project-id="default"]').click();
