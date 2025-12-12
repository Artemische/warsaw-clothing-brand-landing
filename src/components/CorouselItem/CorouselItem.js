import { useState } from "react";
import styles from "./CorouselItem.module.css";

const CorouselItem = ({ name, price, img }) => {
  const [isHover, setIsHover] = useState(false);
  const opacity = isHover ? "1" : "0";

  return (
    <div className={styles["c-item"]} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <img src={img} />
      <div style={{ opacity: opacity, transition: "opacity 0.5s" }} className={styles.capture}>
        <h4>{name}</h4>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CorouselItem;
