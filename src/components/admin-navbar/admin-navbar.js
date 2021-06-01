import React, {Component} from "react";
import { Switch, Route, Link } from "react-router-dom";

import AuthService from "../../services/auth.service";

class AdminNavbar extends Component {
    constructor(props) {
      super(props);
      this.logOut = this.logOut.bind(this);
  
      this.state = {
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined,
      };
    }
  
    componentDidMount() {
      const user = AuthService.getCurrentUser();
  
      if (user) {
        this.setState({
          currentUser: user,
          showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
          showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        });
      } 
    }
  
    logOut() {
      AuthService.logout();
    }
  
    render() {
      const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
  
      return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Maza CP
            </Link>
            <div className="navbar-nav mr-auto">
 
              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}
  
              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/board"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}
            </div>
  
            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/mazacp"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
  
                {/* <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li> */}
              </div>
            )}
          </nav>
  
          
        </div>
      );
    }
  }
  
  export default AdminNavbar;