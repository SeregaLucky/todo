import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import Spinner from "../Spinner";

import itemsOperations from "../../../../redux/items/itemsOperations";
import {
  getIsChangeStatusItemLoading,
  getIsRemoveItemLoading,
} from "../../../../redux/items/itemsSelectors";

import styles from "./Item.module.scss";

const Item = ({ id, title, isCompleted }) => {
  // console.log('RENDER ITEM', title);
  const dispatch = useDispatch();

  const isRemoveLoading = useSelector(state =>
    getIsRemoveItemLoading({ state, id }),
  );
  const isChangeStatusLoading = useSelector(state =>
    getIsChangeStatusItemLoading({ state, id }),
  );

  const changeCompletedStatusInItem = () => {
    dispatch(
      itemsOperations.changeCompletedStatusInItem({
        id,
        isCompleted: !isCompleted,
      }),
    );
  };

  return (
    <li
      className={cn(styles.item, {
        [styles.removing]: isRemoveLoading,
      })}
    >
      <h4
        className={cn(styles.title, {
          [styles.completed]: isCompleted,
          [styles.changeCompletedStatusLoading]: isChangeStatusLoading,
        })}
        onClick={changeCompletedStatusInItem}
        role="presentation"
      >
        {title}

        {isChangeStatusLoading && (
          <span className={styles.containerSpinner}>
            <Spinner />
          </span>
        )}
      </h4>

      <button
        className={styles.buttonRemove}
        type="button"
        onClick={() => dispatch(itemsOperations.removeItem(id))}
      >
        X
      </button>
    </li>
  );
};

// export default Item;
export default memo(Item);
