import React from "react";
import UsersList from "../../components/UsersList";

const Users = () => {
  return (
    <>
      <h2>Users Book</h2>
      <UsersList list={[1, 2, 3, 4, 5]} />
    </>
  );
};

export default Users;
