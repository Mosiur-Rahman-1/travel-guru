import React, { createContext } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import DestinationCoxs from './Components/DestinationCoxs/DestinationCoxs';
import DestinationSreemangal from './Components/DestinationSreemangal/DestinationSreemangal';
import DestinationSundarbans from './Components/DestinationSundarbans/DestinationSundarbans';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useState } from 'react';
import Hotels from './Components/Hotels/Hotels';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

//declaring create context
export const UserContext = createContext();

function App() {
  //declaring the state
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    //declaring the context api provider
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header/>
        <Switch>
          <Route path = "/home">
            <Home/>
          </Route>
          <Route path = "/destination/coxs">
            <DestinationCoxs/>
          </Route>
          <Route path = "/destination/sreemangal">
            <DestinationSreemangal/>
          </Route>
          <Route path = "/destination/sundarbans">
            <DestinationSundarbans/>
          </Route>
          <Route path = "/login">
            <Login/>
          </Route>
          <Route path = "/register">
            <CreateAccount/>
          </Route>
          <PrivateRoute path = "/hotels">
            <Hotels/>
          </PrivateRoute>
          <Route path = "/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
