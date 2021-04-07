import { Containers, Root } from "./domUtilities";
import { sortTodos } from "./sortTodos";

let sorts = {
  date: ["priority", "3px 3px 2px #ff0000"],
  priority: ["none", ""],
  none: ["date", "3px 3px 2px #00ff00"]
};

Containers.sortChanger.addEventListener("click", e => {
  let factor = sorts[e.target.dataset.sortFactor];
  e.target.dataset.sortFactor = factor[0];
  e.target.style.textShadow = factor[1];
  sortTodos(factor[0], Root.currentProject().dataset.projectId);
})
