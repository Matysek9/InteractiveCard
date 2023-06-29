import React from "react";
import styles from "./UserCardComponent.module.scss";

const UserCardComponent = () => {
  return <div className={styles.userCard}>
    <img src="../../public/images/bg-card-front.png" alt="" />
    <div className={styles.cardData}>
        <img src="images/card-logo.svg" alt="" />
       <span>0000 0000 0000 0000</span>
       <span>Mateusz WYc</span>
       <span>00/00</span>

    </div>
  </div>;
};

export default UserCardComponent;
