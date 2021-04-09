import Todo from './todoFactory';
import { Project, projectList } from './projectFactory';
import { DefaultProject } from './domUtilities';

const batchSeparator = '#@$7Ncc4X7mZH';
const dataSeparator = '#@$ZmmKIPCcnV';
const todoSeparator = '#@$0BVLeiXSMb';

function storageInit(projectId) {
  const data = (projectId === DefaultProject.id) + dataSeparator + projectList[projectId].name;
  localStorage.setItem(`JSTODO-${projectId}`, data);
}

function storageRemove(projectId) {
  localStorage.removeItem(`JSTODO-${projectId}`);
}

function getStoredItem(projectId, todoId) {
  const storage = localStorage.getItem(`JSTODO-${projectId}`);
  let item = projectList[projectId].todos[todoId];

  item = todoId
    + dataSeparator
    + item.title
    + dataSeparator
    + item.description
    + dataSeparator
    + item.priority
    + dataSeparator
    + item.date;

  const splitted = storage.split(batchSeparator);
  const firstPart = splitted[0];
  const todos = splitted[1] ? splitted[1].split(todoSeparator) : [];

  return [firstPart, todos, item];
}

function restoreItem(projectId, firstPart, todos) {
  const joined = todos.join(todoSeparator);
  localStorage.setItem(`JSTODO-${projectId}`, [firstPart, joined].join(batchSeparator));
}

function storeOne(projectId, todoId) {
  const [firstPart, todos, item] = getStoredItem(projectId, todoId);
  todos.push(item);
  restoreItem(projectId, firstPart, todos);
}

function removeOne(projectId, todoId) {
  const [firstPart, todos] = getStoredItem(projectId, todoId);
  todos.splice(todos.findIndex((e) => e.split(dataSeparator)[0] === todoId), 1);
  restoreItem(projectId, firstPart, todos);
}

function retrieveData() {
  let iteration = 0;
  const keys = Object.keys(localStorage).filter((k) => k.includes('JSTODO'));
  keys.sort().forEach((key) => {
    iteration += 1;
    const item = localStorage.getItem(key).split(batchSeparator);
    let project = item[0].split(dataSeparator);
    const projectPreId = key.split('-')[1];
    project = project[0] === 'true' ? DefaultProject.initialize() : Project(project[1], projectPreId);

    if (item[1]) {
      const todos = item[1].split(todoSeparator)
        .map((props) => props.split(dataSeparator));
      todos.forEach((props) => {
        projectList[project].addTodo(
          Todo(props[1], props[2], props[3], props[4]), props[0],
        );
      });
    }
  });
  return iteration;
}

export {
  storageInit, storageRemove, storeOne, removeOne, retrieveData,
};
