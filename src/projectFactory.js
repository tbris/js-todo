import Todo from "./todoFactory";

export { Project, projectList, projectProto };

let projectCount = 1;
let projectList = {};

const projectProto = {
  addTodo(todoObj) {
    let idx = this.count++
    this.todos[idx] = todoObj;
    return idx
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
