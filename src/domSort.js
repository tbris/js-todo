import Containers from "./domContainers";
import { sortTodos } from "./sortTodos";

Containers.sortChanger.addEventListener("click", e => {
  let factor = e.target.dataset.sortFactor;
  let projectId = Containers.todoForm.querySelector("#projectId").value;
  sortTodos(factor, projectId);
  e.target.dataset.sortFactor = factor == "date" ? "priority" : "date";
})
