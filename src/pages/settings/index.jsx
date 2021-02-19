import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import MultiSelect from "../../components/MultiSelect";
import { setSelectedNationalites } from "../../store/nationalities/actions";
import { nationalities } from "./data";
import { ArrowBack } from "@material-ui/icons";
import history from "../../routes/History";

const Settings = () => {
  const dispatch = useDispatch();
  const selectedNationalities = useSelector(
    (state) => state.nationalities.list
  );
  const handleNationalites = (values) => {
    dispatch(setSelectedNationalites(values));
    localStorage.setItem("nationalites", JSON.stringify(values));
  };

  return (
    <>
      <h1>settings</h1>
      <MultiSelect
        options={nationalities}
        passValueToParent={handleNationalites}
        defaultValues={selectedNationalities}
        label="Nationalities"
        placeholder="Select nationalities..."
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBack />}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
    </>
  );
};

export default Settings;
