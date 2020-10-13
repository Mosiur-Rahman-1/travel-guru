import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

// firebase initializing
firebase.initializeApp(firebaseConfig);
//call the providers
var googleProvider = new firebase.auth.GoogleAuthProvider();
var fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const classes = useStyles();
// using history and location reack hooks
  const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

  //set logged in user information to the state so can access with the usercontext
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  // google sign in handle function
    const handleGoogleSignIn = () => {
      firebase.auth().signInWithPopup(googleProvider)
      .then(function(result) {
        var user = result.user;
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch(function(error) {
        console.log(error);
      });
      }
    // facebook sign in handle function
      const handleFacebookSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
          var user = result.user;
          setLoggedInUser(user);
          history.replace(from);

        }).catch(function(error) {
          console.log(error)
        });
    }
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
                Don't have an account? 
              <Link to = "/register" variant="body2">
                {"Create an Account"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box paddingTop={2} />
      <h6 align = "center">or</h6>
        <hr/>
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick = {handleFacebookSignIn}
        >
            Continue With Facebook
        </Button>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick = {handleGoogleSignIn}
        >
        Continue With Google
        </Button>
      </div>
    </Container>
    );
};

export default Login;