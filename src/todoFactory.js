const todoProto = {}

export { Todo };

const Todo = (title, description, priority, date) => {
  return Object.assign(Object.create(todoProto), {
    title, description, priority, date
  })
}
