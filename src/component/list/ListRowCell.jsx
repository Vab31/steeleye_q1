import styles from "./ListRowCell.module.css";

const ListRowCell = ({ onClick, children }) => {
  return <td className={styles.cell} onClick={onClick}>{children}</td>;
};

export default ListRowCell;
