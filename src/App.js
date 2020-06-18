import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { useStyles } from "./App.Styles";
import Account from "./Pages/Account";
function App() {
  const classes = useStyles();
  return (
    <Router>
      <Paper className={classes.header} elevation={4}>
        <Link to={"/account"} className={classes.links}>
          Register/Login
        </Link>
        <Link to={"/social/feed"} className={classes.links}>
          NewsFeed
        </Link>
      </Paper>
      <Switch>
        <Route path={"/account"} component={Account} />
        {/* <Route path={'/social/feed'} component={}/> */}
        <Route
          path={"*"}
          render={() => (
            <div style={{ textAlign: "center" }}>Page not Found</div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
