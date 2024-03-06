import { useSelector } from "react-redux";
import cn from "classnames";

import { getDataCountStatus } from "../../../../redux/todo/todo-selectors";

import styles from "./CountStatus.module.scss";

const CountStatus = () => {
  const { inProcess, completed } = useSelector(getDataCountStatus);

  return (
    <div className={styles.container}>
      <span className={cn(styles.count, styles.inProcess)}>
        In process: {inProcess}
      </span>
      <span className={cn(styles.count, styles.completed)}>
        Completed: {completed}
      </span>
    </div>
  );
};

export default CountStatus;
