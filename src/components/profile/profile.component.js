import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import AdminNavbar from "../admin-navbar"

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
    
  }
  

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <AdminNavbar />
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> პროფილი
          </h3>
        </header>
        <p>
          <strong>ტოკენი:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>ელ-ფოსტა:</strong> {currentUser.email}
        </p>
        <strong>როლები:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );
  }
}
