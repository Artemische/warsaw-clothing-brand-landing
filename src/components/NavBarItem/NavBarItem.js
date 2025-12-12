import styles from "./NavBarItem.module.css";

const NavBarItem = ({title, url}) => {
  console.log(url)
  return (
    <div className={styles["nav-item"]}>
      <a className={styles["nav-a"]} href={url}>{title}</a>
    </div>
  );
};

export default NavBarItem;
