import { Project, projectList } from "./projectFactory";
import { DefaultProject } from "./domUtilities";
import { Todo } from "./todoFactory";

export { storageInit, storageRemove, storeOne, removeOne, retrieveData };

let batchSeparator = "#@$7Ncc4X7mZH";
let dataSeparator = "#@$ZmmKIPCcnV";
let todoSeparator = "#@$0BVLeiXSMb";

function storageInit(projectId) {
  let data = (projectId == DefaultProject.id) + dataSeparator + projectList[projectId].name;
  localStorage.setItem("JSTODO-" + projectId, data);
}

function storageRemove(projectId) {
  localStorage.removeItem("JSTODO-" + projectId);
}

function storeOne(projectId, todoId) {
  let [firstPart, todos, item] = getStoredItem(projectId, todoId);
  todos.push(item);
  restoreItem(projectId, firstPart, todos);
}

function removeOne(projectId, todoId) {
  let [firstPart, todos] = getStoredItem(projectId, todoId);
  todos.splice(todos.findIndex(e => e.split(dataSeparator)[0] == todoId), 1);
  restoreItem(projectId, firstPart, todos);
}

function getStoredItem(projectId, todoId) {
  let storage = localStorage.getItem("JSTODO-" + projectId);
  let item = projectList[projectId].todos[todoId];
  item =
    todoId + dataSeparator +
    item.title + dataSeparator +
    item.description + dataSeparator +
    item.priority + dataSeparator +
    item.date;

  let splitted = storage.split(batchSeparator);
  let firstPart = splitted[0];
  let todos = splitted[1] ? splitted[1].split(todoSeparator) : [];

  return [firstPart, todos, item];
}

function restoreItem(projectId, firstPart, todos) {
  todos = todos.join(todoSeparator);
  localStorage.setItem("JSTODO-" + projectId, [firstPart, todos].join(batchSeparator));
}

function retrieveData() {
  let iteration = 0;
  let keys = Object.keys(localStorage).filter(k => k.includes("JSTODO"));
  for (const i in keys.sort()) {
    iteration += 1;
    let item = localStorage.getItem(keys[i]).split(batchSeparator);
    let project = item[0].split(dataSeparator);
    let projectPreId = keys[i].split("-")[1];
    project = project[0] == "true" ? DefaultProject.initialize() : Project(project[1], projectPreId);

    if (!item[1]) continue;
    let todos = item[1].split(todoSeparator).map(props => props.split(dataSeparator));
    todos.forEach(props => {
      projectList[project].addTodo(
        Todo(props[1], props[2], props[3], props[4]), props[0]
      );
    });
  }
  return iteration;
}
