//Importing all the files and dependencies for the component
import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, InputBase, makeStyles, Toolbar,fade, Box } from '@material-ui/core';
import logo from '../../Icon/Logowhite.png';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

//styles for the header
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        '&:focus': {
          width: '20ch',
        },},},
  }));

const Header = () => {
  // using the use style
    const classes = useStyles();
  // using the context or receiver
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if(loggedInUser.email){
      const user = document.getElementById("login-admin")
      user.innerText = loggedInUser.displayName;
    }

    return (
    <div className={classes.root}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
            <Link to = "/home"> <img className = "logo" src={logo} alt="logo"/></Link>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
              placeholder="Search your destination…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
            <Box display="flex">
              <ul className="nav nav-spacing">
                <li className="nav-item nav-item-spacing">
                  <a className="nav-link text-white" href="#">News</a>
                </li>
                <li className="nav-item nav-item-spacing">
                  <Link to = "/destination"><a className="nav-link text-white" href="#">Destination</a></Link>
                </li>
                <li className="nav-item nav-item-spacing">
                  <a className="nav-link text-white" href="#">Blog</a>
                </li>
                <li className="nav-item nav-item-spacing">
                  <a className="nav-link text-white" href="#">Contact</a>
                </li>
              </ul>
              <Link to = "/login"><Button color="inherit" justifyContent="flex-end" id = "login-admin" className="nav-item nav-item-spacing color">Login</Button></Link>
            </Box>
            </Toolbar>
          </Container>
        </AppBar>
    </div>
    );
};

export default Header;