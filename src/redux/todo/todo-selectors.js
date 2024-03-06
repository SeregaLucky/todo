import { createSelector } from "reselect";

import { FilterStatus } from "const/filter-status";

const getTodoList = (state) => state.todoReducer.todoList;

export const getIsEmptyList = (state) => getTodoList(state).length === 0;

export const getFilterStatus = (state) => state.todoReducer.filterStatus;

export const getIsGetTodoListLoading = (state) => {
  return state.todoReducer.isGetTodoListLoading;
};

export const getIsAddTodoLoading = (state) => {
  return state.todoReducer.isAddTodoLoading;
};

export const getDataCountStatus = createSelector([getTodoList], (list) => {
  return list.reduce(
    (acc, todo) => {
      if (todo.isCompleted) {
        acc.completed += 1;
        return acc;
      }

      acc.inProcess += 1;
      return acc;
    },
    { "completed": 0, "inProcess": 0 },
  );
});

const getRemoveTodoIdsLoading = (state) => {
  return state.todoReducer.removeTodoIdsLoading;
};
export const getIsRemoveTodoIdsLoading = ({ state, id }) => {
  return getRemoveTodoIdsLoading(state).some((itemId) => itemId === id);
};

const getChangeStatusTodoIdsLoading = (state) => {
  return state.todoReducer.changeStatusTodoIdsLoading;
};
export const getIsChangeStatusTodoLoading = ({ state, id }) => {
  return getChangeStatusTodoIdsLoading(state).some((itemId) => itemId === id);
};

export const getFilterByFilterStatus = createSelector(
  [getTodoList, getFilterStatus],
  (todoList, filterStatus) => {
    if (filterStatus === FilterStatus.ALL) {
      return todoList;
    }

    if (filterStatus === FilterStatus.COMPLETED) {
      return todoList.filter((todo) => todo.isCompleted);
    }

    /* In process */
    return todoList.filter((todo) => !todo.isCompleted);
  },
);
