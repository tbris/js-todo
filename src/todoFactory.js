const todoProto = {};

const Todo = (title, description, priority, date) => {
  const todo = Object.assign(Object.create(todoProto), {
    title, description, priority, date,
  });
  return todo;
};

export default Todo;
