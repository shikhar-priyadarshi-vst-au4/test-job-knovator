import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  links: {
    textDecoration: "none",
    color: "#272727",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    cursor: "pointer",
    ["&:hover"]: {
      border: "0.5px solid #272727",
    },
  },
}));
