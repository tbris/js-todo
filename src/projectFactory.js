import Todo from "./todoFactory";

let projectCount = 0;

const projectProto = {
  addTodo(title, description, priority, date) {
    this.todos[this.count++] = Todo(title, description, priority, date);
  },
  removeTodo(id) {
    delete this.todos[id];
  }
};

const Project = (name) => {
  return Object.assign(Object.create(projectProto), {
    id: projectCount++, name, todos: {}, count: 0
  });
}

export default Project;
