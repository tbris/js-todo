import Containers from "./domContainers";
import { sortTodos } from "./sortTodos";

Containers.sortChanger.addEventListener("click", e => {
  let factor = e.target.dataset.sortFactor;
  let projectId = Containers.todoForm.querySelector("#projectId").value;
  switch (factor) {
    case "date":
      factor = "priority";
      e.target.dataset.sortFactor = "priority";
      e.target.style.textShadow = "3px 3px 2px #ff0000";
      break;
    case "priority":
      factor = "none";
      e.target.dataset.sortFactor = "none";
      e.target.style = "";
      break;
    case "none":
      factor = "date";
      e.target.dataset.sortFactor = "date";
      e.target.style.textShadow = "3px 3px 2px #00ff00";
      break;
  }
  sortTodos(factor, projectId);
})
