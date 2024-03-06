import {
  addTodoMock,
  getTodoListMock,
  changeCompletedStatusInTodoMock,
  removeTodoMock,
} from "../../api/api";
import todoActions from "./todo-actions";
import {
  getIsChangeStatusTodoLoading,
  getIsRemoveTodoIdsLoading,
} from "./todo-selectors";

// eslint-disable-next-line unicorn/consistent-function-scoping
const getTodoList = () => async (dispatch) => {
  dispatch(todoActions.getTodoListStart());

  try {
    const todoList = await getTodoListMock();
    dispatch(todoActions.getTodoListSuccess(todoList));
  } catch (error) {
    dispatch(todoActions.getTodoListFailure(error));
  }
};

const addTodo = (title) => async (dispatch) => {
  dispatch(todoActions.addTodoStart());

  try {
    const todo = await addTodoMock(title);
    dispatch(todoActions.addTodoSuccess(todo));
  } catch (error) {
    dispatch(todoActions.addTodoFailure(error));
  }
};

const changeCompletedStatusInTodo = (data) => async (dispatch, getState) => {
  const { id, isCompleted } = data;

  const repeat = getIsChangeStatusTodoLoading({ "state": getState(), id });
  if (repeat) return;

  dispatch(todoActions.changeCompletedStatusInTodoStart(id));

  try {
    await changeCompletedStatusInTodoMock({ id, isCompleted });
    dispatch(
      todoActions.changeCompletedStatusInTodoSuccess({ id, isCompleted }),
    );
  } catch (error) {
    dispatch(todoActions.changeCompletedStatusInTodoFailure({ error, id }));
  }
};

const removeTodo = (id) => async (dispatch, getState) => {
  const repeat = getIsRemoveTodoIdsLoading({ "state": getState(), id });
  if (repeat) return;

  dispatch(todoActions.removeTodoStart(id));

  try {
    await removeTodoMock(id);
    dispatch(todoActions.removeTodoSuccess(id));
  } catch (error) {
    dispatch(todoActions.removeTodoFailure({ error, id }));
  }
};

export default {
  getTodoList,
  addTodo,
  changeCompletedStatusInTodo,
  removeTodo,
};
