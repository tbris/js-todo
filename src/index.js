import "./scss/index.scss";
import flatpickr from "flatpickr";
import "../node_modules/flatpickr/dist/themes/confetti.css";
import { projectList } from "./projectFactory";
import { batchAppendProject } from "./domProject";

import "./formProject";
import "./formTodo";
import "./domSidebar";
import "./domSort";
import "./defaultProjectFactory";

import { seed } from "./seed";

seed();

batchAppendProject();
document.querySelector('[data-project-id="default"]').click();

flatpickr('[name="todoDate"]', {
  altInput: true,
  altFormat: "D M j, Y, h:i K",
  minDate: "today",
  enableTime: true,
});
