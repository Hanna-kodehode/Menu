import React from "react";
import styles from "./assets/components/Dish.module.css";

export default function MenuCard({
  data: { img, tittel, pris, ingredienser, kategori },
}) {
  const defaultImg =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  return (
    <div className={styles.menuCards}>
      <img src={img || defaultImg} alt={`Bilde av ${tittel}`} />
      <div>
        <h3>
          <strong>{tittel}</strong>
        </h3>
        <h4>
          <strong>{pris}</strong>
        </h4>
        <p>
          <strong>Ingredienser:</strong> {ingredienser}
        </p>
      </div>
    </div>
  );
}
