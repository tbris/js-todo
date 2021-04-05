import Containers from "./domContainers";
import { projectList } from "./projectFactory";
import { batchAppendProject, markHiddenInput } from "./appendProject";
import { batchAppendTodo } from "./appendTodo";
import "./projectForm";
import "./todoForm";
import "./domSidebar";
import "./styles.css";
import { seed } from "./seed";

seed();

batchAppendProject(Containers.project);

let firstKey = Object.keys(projectList)[0];
batchAppendTodo(Containers.todo, firstKey);
markHiddenInput(firstKey);
