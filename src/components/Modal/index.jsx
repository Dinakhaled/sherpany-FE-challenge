import React from "react";
import {
  Dialog,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./Modal.module.scss";

const Modal = ({ header, infos = [], isOpen = false, handleClose }) => {
  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <div className={styles.header}>
        <div>{header}</div>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        <Grid container spacing={0} className="p-3">
          {infos.map((info, index) => (
            <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
              <ListItem>
                <div className={styles.icon}>{info.icon}</div>
                <ListItemText className={styles.listText} primary={info.text} />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
    </Dialog>
  );
};

export default Modal;
