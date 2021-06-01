import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import AuthService from "./services/auth.service";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";
import Board from "./components/board";

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
              <PrivateRoute exact path="/mazacp" component={Profile} />
              <PrivateRoute exact path="/board" component={Board} />
              
        </Switch>
      </div>
    );
  }
  
}

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const user = AuthService.getCurrentUser()

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

