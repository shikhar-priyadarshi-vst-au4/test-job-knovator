import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Input, Button } from "../Components";
import { register as Register, reset } from "../redux/userReducer/user.actions";
import { login as Login, Store } from "../redux/feedReducer/feed.action";

const Account = (props) => {
  const [register, setRegister] = useState({ email: "", password: "" });
  const [login, setLogin] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (props.user.createdStatus) {
      props.dispatch(Store(props.user));
      props.dispatch(reset());
    }
  }, [props.user.createdStatus]);
  useEffect(() => {
    setMessage(props.feed.message);
  }, [props.feed.loginStatus]);
  const ChangeHandler = (e, value, cb) => {
    cb({ ...value, [e.target.name]: e.target.value });
  };
  const Submit = (type) => {
    props.dispatch(type === "Register" ? Register(register) : Login(login));
  };
  return (
    <Fragment>
      {!!message && (
        <Grid container>
          <Typography
            component={Paper}
            elevation={4}
            variant={"button"}
            style={{
              padding: "2em",
              margin: "1em 2em",
            }}
          >
            {message}
          </Typography>
        </Grid>
      )}
      <Grid container spacing={2}>
        <Grid
          item
          xs={5}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1em 2em",
          }}
        >
          <Typography variant={"body1"} style={{ margin: "1em 0em" }}>
            Register account
          </Typography>
          <Input
            name={"email"}
            value={register.email}
            type={"text"}
            change={(e) => ChangeHandler(e, register, setRegister)}
          />
          <Input
            name={"password"}
            value={register.password}
            type={"password"}
            change={(e) => ChangeHandler(e, register, setRegister)}
          />
          <Button submit={() => Submit("Register")}>register</Button>
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1em 1em",
          }}
        >
          <Typography variant={"body1"} style={{ margin: "1em 0em" }}>
            Login Account
          </Typography>
          <Input
            name={"email"}
            value={login.email}
            type={"text"}
            change={(e) => ChangeHandler(e, login, setLogin)}
          />
          <Input
            name={"password"}
            value={login.password}
            type={"password"}
            change={(e) => ChangeHandler(e, login, setLogin)}
          />
          <Button submit={() => Submit("Login")}>Login</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  let { user, feed } = state;
  return {
    user,
    feed,
  };
};
export default connect(mapStateToProps)(Account);
