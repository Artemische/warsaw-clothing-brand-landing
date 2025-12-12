import bgImg from "./bg.jpg";
import styles from "./Banner.module.css";

const Banner = () => {

  return (
    <section
      className={styles.main}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <span className={styles.text}>
        "You can design and create, and build the most wonderful place in the world. But it takes people to make the
        dream a reality."
      </span>
      <span className={styles.btn}>Purchase</span>
    </section>
  );
};

export default Banner;
