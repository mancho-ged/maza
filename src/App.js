import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";

export default class App extends Component{
  constructor(props){
    super(props);
    // this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  render(){
    return (
      <div className="App">
        <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/profile" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
  
}

