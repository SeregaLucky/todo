import {
  addItemMock,
  getItemsMock,
  changeCompletedStatusInItemMock,
  removeItemMock,
} from "../../api/api";
import itemsActions from "./itemsActions";
import {
  getIsChangeStatusItemLoading,
  getIsRemoveItemLoading,
} from "./itemsSelectors";

const getItems = () => async dispatch => {
  dispatch(itemsActions.getItemsStart());

  try {
    const items = await getItemsMock();
    dispatch(itemsActions.getItemsSuccess(items));
  } catch (error) {
    dispatch(itemsActions.getItemsFailure(error));
  }
};

const addItem = title => async dispatch => {
  dispatch(itemsActions.addItemStart());

  try {
    const item = await addItemMock(title);
    dispatch(itemsActions.addItemSuccess(item));
  } catch (error) {
    dispatch(itemsActions.addItemFailure(error));
  }
};

const changeCompletedStatusInItem =
  ({ id, isCompleted }) =>
  async (dispatch, getState) => {
    const repeat = getIsChangeStatusItemLoading({ state: getState(), id });
    if (repeat) return;

    dispatch(itemsActions.changeCompletedStatusInItemStart(id));

    try {
      await changeCompletedStatusInItemMock({ id, isCompleted });
      dispatch(
        itemsActions.changeCompletedStatusInItemSuccess({ id, isCompleted }),
      );
    } catch (error) {
      dispatch(itemsActions.changeCompletedStatusInItemFailure({ error, id }));
    }
  };

const removeItem = id => async (dispatch, getState) => {
  const repeat = getIsRemoveItemLoading({ state: getState(), id });
  if (repeat) return;

  dispatch(itemsActions.removeItemStart(id));

  try {
    await removeItemMock(id);
    dispatch(itemsActions.removeItemSuccess(id));
  } catch (error) {
    dispatch(itemsActions.removeItemFailure({ error, id }));
  }
};

export default {
  getItems,
  addItem,
  changeCompletedStatusInItem,
  removeItem,
};
