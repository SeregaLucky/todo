import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getFilterByFilterStatus,
  getIsGetItemsLoading,
} from "../../../../redux/items/itemsSelectors";
import itemsOperations from "../../../../redux/items/itemsOperations";

export const useGetTodo = () => {
  const dispatch = useDispatch();

  const isListLoading = useSelector(getIsGetItemsLoading);
  const listItems = useSelector(getFilterByFilterStatus);

  useEffect(() => {
    const getAllItems = () => {
      dispatch(itemsOperations.getItems());
    };
    getAllItems();
  }, [dispatch]);

  return { isListLoading, listItems };
};
