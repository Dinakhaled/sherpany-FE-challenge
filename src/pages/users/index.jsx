import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import UsersList from "../../components/UsersList";
import { fetchUsersRequestAction } from "../../store/users/actions";

const Users = () => {
  const stableDispatch = useCallback(useDispatch(), []);
  const usersList = useSelector((state) => state.users.list);
  const usersApiInfo = useSelector((state) => state.users.apiInfo);

  useEffect(() => {
    stableDispatch(fetchUsersRequestAction({ limit: 50, page: 1 }));
  }, [stableDispatch]);

  const fetchData = () => {
    stableDispatch(
      fetchUsersRequestAction({
        limit: 50,
        page: +usersApiInfo?.page + 1,
      })
    );
  };

  return (
    <>
      <h2>Users Book</h2>
      <InfiniteScroll
        dataLength={usersList.length}
        next={fetchData}
        hasMore={usersList.length === 1000 ? false : true}
        loader={<h4 className="text-center my-4">Loading...</h4>}
        endMessage={
          <h4 className="text-center my-4">
            <b>End of users catalog</b>
          </h4>
        }
      >
        <UsersList list={usersList} />
      </InfiniteScroll>
    </>
  );
};

export default Users;
