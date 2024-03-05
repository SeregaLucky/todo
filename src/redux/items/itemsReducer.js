import { combineReducers } from "redux";

import itemsTypes from "./itemsTypes";
import { FilterStatus } from "const/filterStatus";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case itemsTypes.GET_ITEMS_SUCCESS:
      return payload.listItems;

    case itemsTypes.ADD_ITEM_SUCCESS:
      return [...state, payload.newItem];

    case itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_SUCCESS:
      return state.map(item =>
        item.id === payload.id
          ? { ...item, isCompleted: payload.isCompleted }
          : item,
      );

    case itemsTypes.REMOVE_ITEM_SUCCESS:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

const isGetItemsLoadingReducer = (state = true, { type }) => {
  switch (type) {
    case itemsTypes.GET_ITEMS_START:
      return true;

    case itemsTypes.GET_ITEMS_SUCCESS:
    case itemsTypes.GET_ITEMS_FAILURE:
      return false;

    default:
      return state;
  }
};

const isAddItemLoadingReducer = (state = false, { type }) => {
  switch (type) {
    case itemsTypes.ADD_ITEM_START:
      return true;

    case itemsTypes.ADD_ITEM_SUCCESS:
    case itemsTypes.ADD_ITEM_FAILURE:
      return false;

    default:
      return state;
  }
};

const removeItemIdsLoadingReducer = (state = [], { type, payload }) => {
  switch (type) {
    case itemsTypes.REMOVE_ITEM_START:
      return [...state, payload.id];

    case itemsTypes.REMOVE_ITEM_SUCCESS:
    case itemsTypes.REMOVE_ITEM_FAILURE:
      return state.filter(id => id !== payload.id);

    default:
      return state;
  }
};

const changeStatusItemIdsLoadingReducer = (state = [], { type, payload }) => {
  switch (type) {
    case itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_START:
      return [...state, payload.id];

    case itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_SUCCESS:
    case itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_FAILURE:
      return state.filter(id => id !== payload.id);

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case itemsTypes.GET_ITEMS_FAILURE:
    case itemsTypes.ADD_ITEM_FAILURE:
    case itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_FAILURE:
    case itemsTypes.REMOVE_ITEM_FAILURE:
      return payload.error;

    case itemsTypes.GET_ITEMS_START:
    case itemsTypes.ADD_ITEM_START:
    case itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_START:
    case itemsTypes.REMOVE_ITEM_START:
      return null;

    default:
      return state;
  }
};

const filterStatusReducer = (state = FilterStatus.ALL, { type, payload }) => {
  switch (type) {
    case itemsTypes.CHANGE_FILTER_STATUS:
      return payload.filterStatus;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  isGetItemsLoading: isGetItemsLoadingReducer,
  isAddItemLoading: isAddItemLoadingReducer,
  removeItemIdsLoading: removeItemIdsLoadingReducer,
  changeStatusItemIdsLoading: changeStatusItemIdsLoadingReducer,
  error: errorReducer,
  filterStatus: filterStatusReducer,
});
