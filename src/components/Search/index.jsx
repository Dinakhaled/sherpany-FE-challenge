import React from "react";
import { FormControl, OutlinedInput } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKeyword } from "../../store/search/actions";
import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.search.keyword);

  const setSearchValue = (e) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  return (
    <FormControl variant="outlined">
      <OutlinedInput
        className={styles.search}
        value={searchKeyword}
        onChange={setSearchValue}
        placeholder="Search..."
        endAdornment={<SearchOutlined position="end" />}
      />
    </FormControl>
  );
};

export default Search;
