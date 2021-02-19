import React, { useState } from "react";
import { Avatar, Card, CardContent, Button } from "@material-ui/core";
import { getUserDetails } from "../../utils/users";
import Modal from "../Modal";
import styles from "./UserCard.module.scss";
import { MoreHorizOutlined, MoreVertOutlined } from "@material-ui/icons";

const UserCard = ({ image, fullName, userName, email, fullItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setIsOpen(true)}
        className={`${styles.wrapper} ${styles.card}`}
      >
        <CardContent className="text-center">
          <Avatar alt={fullName} src={image} className={styles.image} />
          <h3>{fullName}</h3>
          <p className={styles.smallText}>User name: {userName}</p>
          <p className={styles.smallText}>Email: {email}</p>
          <Button variant="contained" color="primary" className="mt-4">
            Show More
          </Button>
        </CardContent>
      </Card>
      <Modal
        isOpen={isOpen}
        header={
          <div className="d-flex align-items-center">
            <Avatar alt={fullName} src={image} className={styles.image} />
            <h3 className="mx-3 mb-0">{fullName}</h3>
          </div>
        }
        handleClose={() => setIsOpen(false)}
        infos={getUserDetails(fullItem)}
      />
    </>
  );
};

export default UserCard;
