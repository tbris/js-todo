import flatpickr from "flatpickr";
import "../node_modules/flatpickr/dist/themes/confetti.css";
import "./scss/index.scss";
import { batchAppendProject } from "./domProject";

import "./formProject";
import "./formTodo";
import "./domSidebar";
import "./domSort";

import { DefaultProject } from "./domUtilities";
DefaultProject.initialize()

import { seed } from "./seed";

seed();

batchAppendProject();
DefaultProject.element().click();

flatpickr('[name="todoDate"]', {
  altInput: true,
  altFormat: "D M j, Y, h:i K",
  minDate: "today",
  enableTime: true,
});
