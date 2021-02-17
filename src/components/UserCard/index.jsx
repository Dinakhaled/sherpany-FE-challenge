import React from "react";
import { Avatar, Card, CardContent } from "@material-ui/core";
import styles from "./UserCard.module.scss";

const UserCard = ({ image, fullName, userName, email }) => {
  return (
    <Card className={`${styles.wrapper} ${styles.card}`}>
      <CardContent className="text-center">
        <Avatar alt="Remy Sharp" src={image} className={styles.image} />
        <h3>{fullName}</h3>
        <p className={styles.smallText}>User name: {userName}</p>
        <p className={styles.smallText}>Email: {email}</p>
      </CardContent>
    </Card>
  );
};

export default UserCard;
