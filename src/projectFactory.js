import Todo from "./todoFactory";

let projectCount = 0;
let projectList = {};

const projectProto = {
  addTodo(title, description, priority, date) {
    let todo = Todo(title, description, priority, date);
    this.todos[this.count++] = todo;
    return todo;
  },
  removeTodo(id) {
    delete this.todos[id];
  }
};

const Project = (name) => {
  let projectId = projectCount++;
  let project = Object.assign(Object.create(projectProto), {
    id: projectId, name, todos: {}, count: 0
  });
  projectList[projectId] = project;
  return project
};

projectList["default"] = Object.assign(Object.create(projectProto), {
  id: "default", name: "default", todos: {}, count: 0
});

export { Project, projectList };
