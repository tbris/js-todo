import { format } from 'date-fns';
import { projectList } from './projectFactory';
import { removeOne } from './storage';

function makeItemProperty(fname, content) {
  const property = document.createElement('span');
  fname(property, content);
  return property;
}

function todoPriority(element, content) {
  const priorities = {
    1: 'todo-priority-low',
    2: 'todo-priority-medium',
    3: 'todo-priority-high',
  };
  element.classList.add('todo-priority', priorities[content]);
}

function todoTitle(element, content) {
  const container = element;
  container.classList.add('todo-title');
  container.textContent = content;
}

function removeTodo(e) {
  e.stopPropagation();
  const todoElm = e.path.find((elm) => elm.className === 'todo');
  const ids = todoElm.id.split('#');
  removeOne(ids[0], ids[1]);
  delete projectList[ids[0]].todos[ids[1]];
  todoElm.remove();
}

function makeTodoRemove() {
  const button = document.createElement('button');
  button.addEventListener('click', removeTodo);
  button.classList.add('todo-remove');
  button.innerHTML = '&times;';
  return button;
}

function makeTodoItem(todoObj) {
  const item = document.createElement('div');
  item.classList.add('todo-item');
  item.append(
    makeItemProperty(todoPriority, todoObj.priority),
    makeItemProperty(todoTitle, todoObj.title),
    makeTodoRemove(),
  );
  item.tabIndex = '0';
  return item;
}

function toggleDesc(e) {
  const container = e.path.find((elm) => elm.className === 'todo');
  const desc = container.querySelector('.todo-description');
  if (desc.clientHeight) {
    desc.style.height = 0;
  } else {
    desc.style.height = `${
      desc.querySelector('.todo-desc-content').clientHeight
    }px`;
  }
}

function makeDescProperty(className, content) {
  const item = document.createElement('div');
  item.classList.add(className);
  item.textContent = content;
  return item;
}

function makeTodoDesc(todoObj) {
  const desc = document.createElement('div');
  desc.classList.add('todo-description');
  const descContent = document.createElement('div');
  descContent.classList.add('todo-desc-content');
  descContent.append(
    makeDescProperty(
      'todo-date',
      format(new Date(todoObj.date), 'EEE MMM d, yyyy, p'),
    ),
    makeDescProperty('desc-content', todoObj.description),
  );
  desc.append(descContent);
  return desc;
}

function buildTodo(todoObj, todoId, projectId) {
  const todo = document.createElement('div');
  todo.id = `${projectId}#${todoId}`;
  todo.classList.add('todo');

  const item = makeTodoItem(todoObj);
  item.addEventListener('click', toggleDesc);

  const desc = makeTodoDesc(todoObj);
  todo.append(item, desc);
  return todo;
}

export default buildTodo;
