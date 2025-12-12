import NavBarItem from "../NavBarItem/NavBarItem";
import styles from "./Header.module.css";

const Header = () => {
  const title = "Lerias";
  const navItems = [
    { title: "about us", url: "#about" },
    { title: "catalog", url: "#catalog" },
    { title: "delivery", url: "#delivery" },
    { title: "contacts", url: "#contacts" },
  ];

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.nav}>
        {navItems.map((item) => <NavBarItem key={item.url} title={item.title} url={item.url} />)}
      </div>
      <div className={styles.menu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
