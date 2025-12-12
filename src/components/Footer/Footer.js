import logo from "./logo.jpg";
import styles from "./Footer.module.css";

const Footer = () => {

  return (
      <footer className={styles.footer}>
        <img alt="logo" src={logo} />

        <nav className={styles.nav}>
          <span>ABOUT</span>
          <ul>
            <li>About us</li>
            <li>Delivery</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <span>FOLLOW</span>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Pinterest</li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <span>ARCHIVE</span>
          <ul>
            <li>Gift cards</li>
            <li>Help & Support</li>
          </ul>
        </nav>
      </footer>
  );
};

export default Footer;
