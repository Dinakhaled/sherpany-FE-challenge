import React from "react";
import { Grid } from "@material-ui/core";
import UserCard from "../UserCard";

const UsersList = ({ list = [] }) => (
  <Grid container spacing={3} className="mt-4">
    {list.map((item, index) => (
      <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
        <UserCard
          fullName={`${item?.name?.first} ${item?.name?.last}`}
          userName={item?.login?.username}
          image={item?.picture?.thumbnail}
          email={item?.email}
        />
      </Grid>
    ))}
  </Grid>
);

export default UsersList;
