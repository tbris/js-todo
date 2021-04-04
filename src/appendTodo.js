function makePriority(priority) {
  let priorityProp = document.createElement("span");
  priorityProp.classList.add("todo-priority");
  priorityProp.textContent = priority;
  return priorityProp
}

function makeTitle(title) {
  let titleProp = document.createElement("span");
  titleProp.classList.add("todo-title");
  titleProp.textContent = title;
  return titleProp;
}

function makeDate(date) {
  let dateProp = document.createElement("span");
  dateProp.classList.add("todo-date");
  dateProp.textContent = date;
  return dateProp;
}

function makeTodo(todoObj) {
  let item = document.createElement("div");
  item.classList.add("todo-item");
  item.append(makePriority(todoObj.priority));
  item.append(makeTitle(todoObj.title));
  item.append(makeDate(todoObj.date));
  return item;
}

function appendTodo(container, todoObj) {
  container.append(makeTodo(todoObj));
}

export { appendTodo };
