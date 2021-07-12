import { Link } from "react-router-dom";
import styles from "../styles/menu.module.css";
const MenuItem = ({ color, name, icon, to }) => {
  return (
    <>
      <div className={`${styles.menuItem} btn btn-block`}>
        <Link to={to}>
          <div className="d-flex justify-content-center align-items-center">
            <i className={`${icon} mr-2 `}></i>
            <span>{name}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuItem;
