import sortTodos from './sortTodos';
import { Containers, DefaultProject, Root } from './domUtilities';
import { projectList } from './projectFactory';
import { storageRemove } from './storage';

function makeProjectName(name) {
  const property = document.createElement('div');
  property.classList.add('project-name');
  property.textContent = name;
  return property;
}

function focusOtherProject(elm) {
  const defPr = DefaultProject.element();
  if ([elm, defPr].some((e) => e.className.includes('current-project'))) {
    defPr.click();
  }
}

function removeProject(e) {
  e.stopPropagation();
  const project = e.target.parentElement;
  const id = project.dataset.projectId;
  delete projectList[id];
  storageRemove(id);
  project.remove();
  focusOtherProject(project);
}

function makeProjectRemove() {
  const button = document.createElement('button');
  button.addEventListener('click', removeProject);
  button.classList.add('project-remove');
  button.innerHTML = '&times;';
  return button;
}

function addCurrentClass(projectId) {
  document.querySelectorAll('.current-project').forEach((project) => {
    project.classList.remove('current-project');
  });
  const object = Root.project(projectId);
  object.classList.add('current-project');
}

function showTodos(e) {
  const project = e.path.find((elm) => elm.className.includes('project-item'));
  const { projectId } = project.dataset;
  sortTodos(Containers.sortChanger.dataset.sortFactor, projectId);
  addCurrentClass(projectId);
}

function buildProject(projectObj) {
  const item = document.createElement('div');
  item.dataset.projectId = projectObj.id;
  item.classList.add('project-item');
  item.append(makeProjectName(projectObj.name));
  if (projectObj.id !== DefaultProject.id) item.append(makeProjectRemove());
  item.tabIndex = '0';

  item.addEventListener('click', showTodos);
  return item;
}

export { buildProject, showTodos };
