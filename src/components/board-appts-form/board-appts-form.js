import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import styled from "styled-components";

const BoardApptsFormStyled = styled.div``;

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        ეს არის აუცილებელი ველი!
      </div>
    );
  }
};

class BoardApptsForm extends Component {
  constructor(props) {
    super(props);
    this.handleAddAppt = this.handleAddAppt.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this);
    this.onChangeLivingArea = this.onChangeLivingArea.bind(this);
    this.onChangeSummerArea = this.onChangeSummerArea.bind(this);
    this.onChangeFullArea = this.onChangeFullArea.bind(this);
    this.onChangeEntrance = this.onChangeEntrance.bind(this);
    this.onChangeBathroom = this.onChangeBathroom.bind(this);

    this.state = {
      project: "",
      livingArea: "",
      summerArea:"",
      fullArea:"",
      entrance:"",
      bathroom: "",
      loading: false,
      message: "",
    };
  }
  onChangeProject(e) {
    this.setState({
      project: e.target.value,
    });
  }
  onChangeLivingArea(e) {
    this.setState({
      livingArea: e.target.value,
    });
  }
  onChangeSummerArea(e) {
    this.setState({
        summerArea: e.target.value,
    });
  }
  onChangeFullArea(e) {
    this.setState({
        fullArea: e.target.value,
    });
  }
  onChangeEntrance(e) {
    this.setState({
        fullArea: e.target.value,
    });
  }
  onChangeBathroom(e) {
    this.setState({
        fullArea: e.target.value,
    });
  }

  handleAddAppt(){

  }
  render() {
    return (
      <BoardApptsFormStyled>
        <Form onSubmit={this.handleAddAppt}
                ref={(c) => {
                  this.form = c;
                }}>
          <div className="form-group">
            <label htmlFor="project">პროექტი N</label>
            <Input
              type="number"
              className="form-control"
              name="project"
              value={this.state.project}
              onChange={this.onChangeProject}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="livingArea">საცხოვრებელი ფართი</label>
            <Input
              type="text"
              className="form-control"
              name="livingArea"
              value={this.state.livingArea}
              onChange={this.onChangeLivingArea}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="summerArea">საზაფხულო ფართი</label>
            <Input
              type="text"
              className="form-control"
              name="summerArea"
              value={this.state.summerArea}
              onChange={this.onChangeSummerArea}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullArea">სრული ფართი</label>
            <Input
              type="text"
              className="form-control"
              name="fullArea"
              value={this.state.fullArea}
              onChange={this.onChangeFullArea}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="entrance">შემოსასვლელი</label>
            <Input
              type="text"
              className="form-control"
              name="entrance"
              value={this.state.entrance}
              onChange={this.onChangeEntrance}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bathroom">სველი წერტილი</label>
            <Input
              type="text"
              className="form-control"
              name="bathroom"
              value={this.state.bathroom}
              onChange={this.onChangeBathroom}
              validations={[required]}
            />
          </div>
        </Form>
      </BoardApptsFormStyled>
    );
  }
}

export default BoardApptsForm;
