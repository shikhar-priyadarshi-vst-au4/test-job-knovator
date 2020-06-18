import React, { Fragment } from "react";
import { useStyle } from "./Input.Styles";
import { TextField, Grid } from "@material-ui/core";
export const Input = (props) => {
  let classes = useStyle();
  return (
    <Fragment>
      <TextField
        label={props.name}
        name={props.name}
        value={props.value}
        type={props.type}
        className={classes.root}
        onChange={(e) => {
          props.change(e);
        }}
        variant="outlined"
      />
    </Fragment>
  );
};
