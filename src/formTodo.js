import Todo from './todoFactory';
import buildTodo from './domTodoStrc';
import submitNew from './formUtilities';
import { Containers, Root } from './domUtilities';
import { projectList } from './projectFactory';
import { appendTodo } from './domTodo';
import { storeOne } from './storage';

const todoProps = ['todoTitle', 'todoDescription', 'todoPriority', 'todoDate'];
const reqTodoProps = ['todoTitle', 'todoDate'];

function makeTodo(props) {
  const todo = Todo(
    props.todoTitle,
    props.todoDescription,
    props.todoPriority,
    new Date(props.todoDate),
  );
  const { projectId } = Root.currentProject().dataset;
  const todoId = projectList[projectId].addTodo(todo);
  storeOne(projectId, todoId);
  appendTodo(buildTodo(todo, todoId, projectId));
}

Containers.todoForm.addEventListener('submit', (e) => {
  submitNew(e, todoProps, reqTodoProps, makeTodo);
});
