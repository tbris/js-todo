import Todo from "./todoFactory";

const projectProto = {
  addTodo(title, description, priority, date) {
    this.todos[this.count] = Todo(title, description, priority, date);
    this.count += 1;
  },
  removeTodo(id) {
    delete this.todos[id];
  }
};

const Project = (name) => {
  return Object.assign(Object.create(projectProto), {
    name, todos: {}, count: 0
  });
}

export default Project;
