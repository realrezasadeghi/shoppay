import styles from "./styles.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

function Dropdown({ title, header, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_header} onClick={() => setOpen(!open)}>
        {title ? (
          <span className={styles.dropdown_header__title}>{title}</span>
        ) : (
          header
        )}
        {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>
      {open ? <div className={styles.dropdown_content}>{children}</div> : null}
    </div>
  );
}

export default Dropdown;
