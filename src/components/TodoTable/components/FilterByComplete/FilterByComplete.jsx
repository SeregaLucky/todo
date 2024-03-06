import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { FilterStatus } from "const/filterStatus";

import todoActions from "../../../../redux/todo/todoActions";
import {
  getFilterStatus,
  getIsEmptyList,
} from "../../../../redux/todo/todoSelectors";

import styles from "./FilterByComplete.module.scss";

const FilterByComplete = () => {
  const dispatch = useDispatch();

  const currentFilterStatus = useSelector(getFilterStatus);
  const isEmptyList = useSelector(getIsEmptyList);

  const onClick = (type) => dispatch(todoActions.changeFilterStatus(type));

  if (isEmptyList) return null;

  return (
    <div className={styles.controllers}>
      <button
        className={cn(styles.buttonStatus, {
          [styles.active]: currentFilterStatus === FilterStatus.ALL,
        })}
        type="button"
        onClick={() => onClick(FilterStatus.ALL)}
      >
        {FilterStatus.ALL}
      </button>

      <button
        className={cn(styles.buttonStatus, {
          [styles.active]: currentFilterStatus === FilterStatus.IN_PROGRESS,
        })}
        type="button"
        onClick={() => onClick(FilterStatus.IN_PROGRESS)}
      >
        {FilterStatus.IN_PROGRESS}
      </button>

      <button
        className={cn(styles.buttonStatus, {
          [styles.active]: currentFilterStatus === FilterStatus.COMPLETED,
        })}
        type="button"
        onClick={() => onClick(FilterStatus.COMPLETED)}
      >
        {FilterStatus.COMPLETED}
      </button>
    </div>
  );
};

export default FilterByComplete;