import itemsTypes from "./itemsTypes";

/* GET_ITEMS */
const getItemsStart = () => ({
  type: itemsTypes.GET_ITEMS_START,
});

const getItemsSuccess = listItems => ({
  type: itemsTypes.GET_ITEMS_SUCCESS,
  payload: { listItems },
});

const getItemsFailure = error => ({
  type: itemsTypes.GET_ITEMS_FAILURE,
  payload: { error },
});

/* ADD_ITEM */
const addItemStart = () => ({
  type: itemsTypes.ADD_ITEM_START,
});

const addItemSuccess = newItem => ({
  type: itemsTypes.ADD_ITEM_SUCCESS,
  payload: { newItem },
});

const addItemFailure = error => ({
  type: itemsTypes.ADD_ITEM_FAILURE,
  payload: { error },
});

/* CHANGE_STATUS_ITEM */
const changeCompletedStatusInItemStart = id => ({
  type: itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_START,
  payload: { id },
});

const changeCompletedStatusInItemSuccess = ({ id, isCompleted }) => ({
  type: itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_SUCCESS,
  payload: { id, isCompleted },
});

const changeCompletedStatusInItemFailure = ({ error, id }) => ({
  type: itemsTypes.CHANGE_COMPLETED_STATUS_IN_ITEM_FAILURE,
  payload: { error, id },
});

/* REMOVE_ITEM */
const removeItemStart = id => ({
  type: itemsTypes.REMOVE_ITEM_START,
  payload: { id },
});

const removeItemSuccess = id => ({
  type: itemsTypes.REMOVE_ITEM_SUCCESS,
  payload: { id },
});

const removeItemFailure = ({ error, id }) => ({
  type: itemsTypes.REMOVE_ITEM_FAILURE,
  payload: { error, id },
});

/* FILTER */
const changeFilterStatus = filterStatus => ({
  type: itemsTypes.CHANGE_FILTER_STATUS,
  payload: { filterStatus },
});

export default {
  getItemsStart,
  getItemsSuccess,
  getItemsFailure,

  addItemStart,
  addItemSuccess,
  addItemFailure,

  changeCompletedStatusInItemStart,
  changeCompletedStatusInItemSuccess,
  changeCompletedStatusInItemFailure,

  removeItemStart,
  removeItemSuccess,
  removeItemFailure,

  changeFilterStatus,
};
