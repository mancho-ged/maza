import React, { Component } from "react";
import UserService from "../../services/user.service";

import TopNavbar from "../navbar/navbar";
import CurrentUnit from "../current-unit";
import Section2 from "../section2";
import Section3 from "../section3";
import PartnerCompanies from "../partner-companies";
import CompletedUnits from "../completed-units";
import Footer from "../footer";
import TypicalAppartments from "../typical-appartments";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* ეს დაკომენტარებული მაქვს სადაც გამოდის ნეთვორკ ერორი ან დათა */}
        {/* <h3>{this.state.content}</h3> */}
        <TopNavbar />
        <CurrentUnit />
        <Section2 />
        <TypicalAppartments />
        <Section3 />
        <PartnerCompanies />
        <CompletedUnits />
        <Footer />
      </React.Fragment>
    );
  }
}
