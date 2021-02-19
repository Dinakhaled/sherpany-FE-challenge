import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "lodash";
import styles from "./MultiSelect.module.scss";

const MultiSelect = ({
  options,
  passValueToParent,
  defaultValues,
  label,
  placeholder,
}) => {
  const [values, setValues] = useState(defaultValues);
  const handleChange = (e, values) => {
    setValues(values);
    passValueToParent(values);
  };
  return (
    <div className="my-5">
      <label className={styles.label}>{label}</label>
      <Autocomplete
        multiple
        options={_.differenceWith(options, defaultValues, _.isEqual)}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        className={styles.multiSelect}
        defaultValue={defaultValues}
        onChange={handleChange}
        value={values}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder={placeholder} />
        )}
      />
    </div>
  );
};

export default MultiSelect;
