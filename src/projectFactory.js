import Todo from "./todoFactory";

export { Project, projectList, projectProto };

let projectCount = 0;
let projectList = {};

const projectProto = {
  addTodo(todoObj) {
    this.todos[this.count++] = todoObj;
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
