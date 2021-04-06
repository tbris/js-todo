import "./scss/index.scss";
import flatpickr from "flatpickr";
import "../node_modules/flatpickr/dist/flatpickr.min.css";
import { projectList } from "./projectFactory";
import { batchAppendProject } from "./domProject";

import "./formProject";
import "./formTodo";
import "./domSidebar";
import "./defaultProjectFactory";

import { seed } from "./seed";

seed();

batchAppendProject();
document.querySelector('[data-project-id="default"]').click();

flatpickr('[name="todoDate"]', {});
