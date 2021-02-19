import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import UsersList from "../../components/UsersList";
import { fetchUsersRequestAction } from "../../store/users/actions";

const Users = () => {
  const selectedNationalities = useSelector(
    (state) => state.nationalities.list
  );

  const getSelectedNatFormated = () => {
    if (selectedNationalities?.length === 0) {
      return "";
    }
    return selectedNationalities.map((item) => item.value).join(",");
  };

  const stableDispatch = useCallback(useDispatch(), []);
  const stableGetSelectedNatFormated = useCallback(
    getSelectedNatFormated(),
    []
  );
  const usersList = useSelector((state) => state.users.list);
  const usersApiInfo = useSelector((state) => state.users.apiInfo);
  const searchKeyword = useSelector((state) => state.search.keyword);

  useEffect(() => {
    stableDispatch(
      fetchUsersRequestAction({
        limit: 50,
        page: 1,
        nat: stableGetSelectedNatFormated,
      })
    );
  }, [stableDispatch, stableGetSelectedNatFormated]);

  const fetchData = () => {
    stableDispatch(
      fetchUsersRequestAction({
        limit: 50,
        page: +usersApiInfo?.page + 1,
        nat: stableGetSelectedNatFormated,
      })
    );
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h2>Users Book</h2>
      </div>
      {!searchKeyword ? (
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
      ) : (
        <UsersList
          list={usersList.filter(
            (item) =>
              `${item?.name?.first} ${item?.name?.last}`.toLowerCase() ===
              searchKeyword.toLowerCase()
          )}
          showNoResults={true}
        />
      )}
      {usersList.length === 0 && searchKeyword && (
        <h4 className="text-center my-4">
          <b>No results</b>
        </h4>
      )}
    </>
  );
};

export default Users;
