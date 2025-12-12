import CorouselItem from "../CorouselItem/CorouselItem";
import { useState, useRef } from "react";
import item1 from "./1.jpg";
import item2 from "./2.jpg";
import la from "./la.png";
import ra from "./ra.png";
import styles from "./Corousel.module.css";

const Corousel = () => {
  const [activeInd, setActiveInd] = useState(0);
  const corousel = useRef();
  const items = [
    { name: "Name", price: 100, img: item1 },
    { name: "Name", price: 100, img: item2 },
    { name: "Name", price: 100, img: item1 },
    { name: "Name", price: 100, img: item2 },
    { name: "Name", price: 100, img: item1 },
    { name: "Name", price: 100, img: item2 },
    { name: "Name", price: 100, img: item1 },
    { name: "Name", price: 100, img: item2 },
    { name: "Name", price: 100, img: item1 },
    { name: "Name", price: 100, img: item2 },
  ];
  const scrollTo = (direction) => {
    const items = corousel.current.children;
    const lastIndex = items.length - 1;
    let newInd;

    if (direction === "r" && activeInd === lastIndex) newInd = 0;
    if (direction === "r" && activeInd === lastIndex - 2) newInd = 0;
    else if (direction === "r") newInd = activeInd + 1;
    else if (direction === "l" && activeInd > lastIndex - 3) newInd = lastIndex - 3;
    else if (direction === "l" && activeInd === 0) newInd = lastIndex;
    else if (direction === "l") newInd = activeInd - 1;

    console.log(newInd);

    setActiveInd(newInd);
    items[newInd]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <section className={styles.corousel}>
      <img
        src={la}
        alt="Corouserl left button"
        onClick={() => {
          scrollTo("l");
        }}
      />
      <div ref={corousel} className={styles["c-content"]}>
        {items.map((el, ind) => (
          <CorouselItem key={ind} alt={`Product: ${el.name}`} name={el.name} price={el.price} img={el.img} />
        ))}
      </div>
      <img
        src={ra}
        alt="Corouserl right button"
        onClick={() => {
          scrollTo("r");
        }}
      />
    </section>
  );
};

export default Corousel;
