import { createSelector } from 'reselect';

import { FilterStatus } from 'const/filterStatus';

const getListItems = state => state.itemsReducer.items;

export const getIsEmptyList = state => !getListItems(state).length;

export const getFilterStatus = state => state.itemsReducer.filterStatus;

export const getIsGetItemsLoading = state =>
  state.itemsReducer.isGetItemsLoading;

export const getIsAddItemLoading = state => state.itemsReducer.isAddItemLoading;

export const dd = state =>
  getListItems(state).reduce(
    (acc, item) => {
      if (item.isCompleter) {
        acc.completer += 1;
        return acc;
      }

      acc.inProcess += 1;
      return acc;
    },
    { completer: 0, inProcess: 0 },
  );

export const getDataCountStatus = createSelector([getListItems], list => {
  return list.reduce(
    (acc, item) => {
      if (item.isCompleted) {
        acc.completed += 1;
        return acc;
      }

      acc.inProcess += 1;
      return acc;
    },
    { completed: 0, inProcess: 0 },
  );
});

const getRemoveItemsLoading = state => state.itemsReducer.removeItemIdsLoading;
export const getIsRemoveItemLoading = ({ state, id }) =>
  getRemoveItemsLoading(state).some(itemId => itemId === id);

const getChangeStatusItemIdsLoading = state =>
  state.itemsReducer.changeStatusItemIdsLoading;
export const getIsChangeStatusItemLoading = ({ state, id }) =>
  getChangeStatusItemIdsLoading(state).some(itemId => itemId === id);

export const getFilterByFilterStatus = createSelector(
  [getListItems, getFilterStatus],
  (list, filterStatus) => {
    if (filterStatus === FilterStatus.ALL) {
      return list;
    }

    if (filterStatus === FilterStatus.COMPLETED) {
      return list.filter(todo => todo.isCompleted);
    }

    /* In process */
    return list.filter(todo => !todo.isCompleted);
  },
);
