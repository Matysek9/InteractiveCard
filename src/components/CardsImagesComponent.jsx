import React from "react";
import styles from "./CardsImagesComponent.module.scss";
import UserCardComponent from "./UserCardComponent";

const CardsImagesComponent = () => {
  return (
    <div className={styles.backgroundCardContainer}>
      <picture className={styles.backgroundGradient}>
        <source media="(max-width: 40em)" srcSet="images/bg-main-mobile.png" />
        <source srcSet="images/bg-main-desktop.png" />
        <img src="images/bg-main-desktop.png" alt="backgroundGradient" />
      </picture>
      <img
        src="../../public/images/bg-card-back.png" alt="blank card image"
        className={styles.blankCardImage}
      />
      <UserCardComponent/>
    </div>
  );
};

export default CardsImagesComponent;
