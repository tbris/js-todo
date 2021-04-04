const todoProto = {}

const Todo = (title, description, importance, date) => {
  return Object.assign(Object.create(todoProto), {
    title, description, importance, date
  })
}

export default Todo
