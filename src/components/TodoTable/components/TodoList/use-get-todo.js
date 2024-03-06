import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getFilterByFilterStatus,
  getIsGetTodoListLoading,
} from "../../../../redux/todo/todo-selectors";
import todoOperations from "../../../../redux/todo/todo-operations";

export const useGetTodoList = () => {
  const dispatch = useDispatch();

  const isListLoading = useSelector(getIsGetTodoListLoading);
  const todoList = useSelector(getFilterByFilterStatus);

  useEffect(() => {
    const getAllItems = () => {
      dispatch(todoOperations.getTodoList());
    };
    getAllItems();
  }, [dispatch]);

  return { isListLoading, todoList };
};
