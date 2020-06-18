import React, { Fragment } from "react";
import { useStyle } from "./Button.Style";
import { Button } from "@material-ui/core";
export const Keystroke = (props) => {
  let classes = useStyle();
  return (
    <Button
      onClick={() => {
        props.submit();
      }}
      variant={"contained"}
      color={"secondary"}
      size={"large"}
    >
      {props.children}
    </Button>
  );
};
