import React from "react";
import { Avatar, Card, CardContent } from "@material-ui/core";
import styles from "./UserCard.module.scss";

const UserCard = () => {
  return (
    <Card className={`${styles.wrapper} ${styles.card}`}>
      <CardContent className="text-center">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={styles.image}
        />
        <h3>Dina khaled</h3>
        <p className="mb-0">dina.elghndour@gmail.com</p>
      </CardContent>
    </Card>
  );
};

export default UserCard;
