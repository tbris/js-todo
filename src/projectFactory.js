import Todo from "./todoFactory";

let projectCount = 0;
let projectList = {};

const projectProto = {
  addTodo(title, description, priority, date) {
    this.todos[this.count++] = Todo(title, description, priority, date);
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

export { Project, projectList };
