import { Project } from "./projectFactory";
import { appendProject } from "./appendProject";
import "./styles.css";

let projectsContainer = document.getElementById("project-list");
let project1 = Project("nana");
project1.addTodo("HAHA", "haha", 3, new Date());
project1.addTodo("HAHA", "haha", 1, new Date());
let project2 = Project("baba");
project2.addTodo("HAHA", "haha", 3, new Date());
project2.addTodo("HAHA", "haha", 1, new Date());

appendProject(projectsContainer);
