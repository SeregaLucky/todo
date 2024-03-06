import todoTypes from "./todo-types";

/* GET_TODO_LIST */
const getTodoListStart = () => ({
  "type": todoTypes.GET_TODO_LIST_START,
});

const getTodoListSuccess = (todoList) => ({
  "type": todoTypes.GET_TODO_LIST_SUCCESS,
  "payload": { todoList },
});

const getTodoListFailure = (error) => ({
  "type": todoTypes.GET_TODO_LIST_FAILURE,
  "payload": { error },
});

/* ADD_TODO */
const addTodoStart = () => ({
  "type": todoTypes.ADD_TODO_START,
});

const addTodoSuccess = (newTodo) => ({
  "type": todoTypes.ADD_TODO_SUCCESS,
  "payload": { newTodo },
});

const addTodoFailure = (error) => ({
  "type": todoTypes.ADD_TODO_FAILURE,
  "payload": { error },
});

/* CHANGE_STATUS_TODO */
const changeCompletedStatusInTodoStart = (id) => ({
  "type": todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_START,
  "payload": { id },
});

const changeCompletedStatusInTodoSuccess = ({ id, isCompleted }) => ({
  "type": todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_SUCCESS,
  "payload": { id, isCompleted },
});

const changeCompletedStatusInTodoFailure = ({ error, id }) => ({
  "type": todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_FAILURE,
  "payload": { error, id },
});

/* REMOVE_TODO */
const removeTodoStart = (id) => ({
  "type": todoTypes.REMOVE_TODO_START,
  "payload": { id },
});
// Todo
const removeTodoSuccess = (id) => ({
  "type": todoTypes.REMOVE_TODO_SUCCESS,
  "payload": { id },
});

const removeTodoFailure = ({ error, id }) => ({
  "type": todoTypes.REMOVE_TODO_FAILURE,
  "payload": { error, id },
});

/* FILTER */
const changeFilterStatus = (filterStatus) => ({
  "type": todoTypes.CHANGE_FILTER_STATUS,
  "payload": { filterStatus },
});

export default {
  getTodoListStart,
  getTodoListSuccess,
  getTodoListFailure,

  addTodoStart,
  addTodoSuccess,
  addTodoFailure,

  changeCompletedStatusInTodoStart,
  changeCompletedStatusInTodoSuccess,
  changeCompletedStatusInTodoFailure,

  removeTodoStart,
  removeTodoSuccess,
  removeTodoFailure,

  changeFilterStatus,
};
