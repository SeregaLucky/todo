import { combineReducers } from "redux";

import todoTypes from "./todoTypes";
import { FilterStatus } from "const/filterStatus";

const todoListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case todoTypes.GET_TODO_LIST_SUCCESS: {
      return payload.todoList;
    }

    case todoTypes.ADD_TODO_SUCCESS: {
      return [...state, payload.newTodo];
    }

    case todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_SUCCESS: {
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, isCompleted: payload.isCompleted };
        }

        return todo;
      });
    }

    case todoTypes.REMOVE_TODO_SUCCESS: {
      return state.filter((todo) => todo.id !== payload.id);
    }

    default: {
      return state;
    }
  }
};

const isGetTodoListLoadingReducer = (state = true, { type }) => {
  switch (type) {
    case todoTypes.GET_TODO_LIST_START: {
      return true;
    }

    case todoTypes.GET_TODO_LIST_SUCCESS:
    case todoTypes.GET_TODO_LIST_FAILURE: {
      return false;
    }

    default: {
      return state;
    }
  }
};

const isAddTodoLoadingReducer = (state = false, { type }) => {
  switch (type) {
    case todoTypes.ADD_TODO_START: {
      return true;
    }

    case todoTypes.ADD_TODO_SUCCESS:
    case todoTypes.ADD_TODO_FAILURE: {
      return false;
    }

    default: {
      return state;
    }
  }
};

const removeTodoIdsLoadingReducer = (state = [], { type, payload }) => {
  switch (type) {
    case todoTypes.REMOVE_TODO_START: {
      return [...state, payload.id];
    }

    case todoTypes.REMOVE_TODO_SUCCESS:
    case todoTypes.REMOVE_TODO_FAILURE: {
      return state.filter((id) => id !== payload.id);
    }

    default: {
      return state;
    }
  }
};

const changeStatusTodoIdsLoadingReducer = (state = [], { type, payload }) => {
  switch (type) {
    case todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_START: {
      return [...state, payload.id];
    }

    case todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_SUCCESS:
    case todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_FAILURE: {
      return state.filter((id) => id !== payload.id);
    }

    default: {
      return state;
    }
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case todoTypes.GET_TODO_LIST_FAILURE:
    case todoTypes.ADD_TODO_FAILURE:
    case todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_FAILURE:
    case todoTypes.REMOVE_TODO_FAILURE: {
      return payload.error;
    }

    case todoTypes.GET_TODO_LIST_START:
    case todoTypes.ADD_TODO_START:
    case todoTypes.CHANGE_COMPLETED_STATUS_IN_TODO_START:
    case todoTypes.REMOVE_TODO_START: {
      return null;
    }

    default: {
      return state;
    }
  }
};

const filterStatusReducer = (state = FilterStatus.ALL, { type, payload }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case todoTypes.CHANGE_FILTER_STATUS: {
      return payload.filterStatus;
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  todoList: todoListReducer,
  isGetTodoListLoading: isGetTodoListLoadingReducer,
  isAddTodoLoading: isAddTodoLoadingReducer,
  removeTodoIdsLoading: removeTodoIdsLoadingReducer,
  changeStatusTodoIdsLoading: changeStatusTodoIdsLoadingReducer,
  error: errorReducer,
  filterStatus: filterStatusReducer,
});
