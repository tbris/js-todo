const projectList = {};
let projectCount = 0;

const projectProto = {
  addTodo(todoObj, preId = this.count) {
    this.count = +preId + 1;
    this.todos[preId] = todoObj;
    return preId;
  },
  removeTodo(id) {
    delete this.todos[id];
  },
};

const Project = (name, preId = projectCount) => {
  const projectId = preId;
  projectCount = +preId + 1;
  const project = Object.assign(Object.create(projectProto), {
    id: projectId,
    name,
    todos: {},
    count: 0,
  });
  projectList[projectId] = project;
  return projectId;
};

export { Project, projectList };
