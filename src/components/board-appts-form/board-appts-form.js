import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AppartmentsService from "../../services/appts.service";
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
    this.handleEditAppt = this.handleEditAppt.bind(this);

    this.state = {
      project: "",
      livingArea: "",
      summerArea: "",
      fullArea: "",
      entrance: "",
      bathroom: "",
      bedroom1: "",
      bedroom2: "",
      livingRoom: "",
      loading: false,
      message: "",
    };
  }

  componentDidMount() {
    let apptId = this.props.apptId;
    if (apptId) {
      console.log(apptId);
      this.setState({loading:true});
      AppartmentsService.getOneAppartment(apptId).then(
        (res) => {
          console.log(res)
          this.setState({
            project: res.data.project,
            name: res.data.name,
            floors: res.data.floors,
            sold:res.data.sold,
            livingArea: res.data.livingArea,
            summerArea: res.data.summerArea,
            fullArea: res.data.fullArea,
            entrance: res.data.entrance,
            bathroom: res.data.bathroom,
            bedroom1: res.data.bedroom1,
            bedroom2: res.data.bedroom2,
            livingRoom: res.data.livingRoom,
            loading: false,
            message: "",
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleAddAppt(e) {
    e.preventDefault();

    this.setState({
      loading: true,
      message: "",
    });

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AppartmentsService.addAppartment(
        this.state.project,
        this.state.livingArea,
        this.state.summerArea,
        this.state.fullArea,
        this.state.entrance,
        this.state.bathroom,
        this.state.bedroom1,
        this.state.bedroom2,
        this.state.livingRoom
      ).then(() => {
        this.setState({ loading: false });
        this.props.onAppartmentAdded();
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  handleEditAppt(e) {
    e.preventDefault();

    this.setState({
      loading: true,
      message: "",
    });

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AppartmentsService.editAppartment(
        this.props.apptId, {
          project:this.state.project,
          livingArea: this.state.livingArea,
          summerArea: this.state.summerArea,
          fullArea: this.state.fullArea,
          entrance: this.state.entrance,
          bathroom: this.state.bathroom,
          bedroom1: this.state.bedroom1,
          bedroom2: this.state.bedroom2,
          livingRoom: this.state.livingRoom
        }
        
      ).then(() => {
        this.setState({ loading: false });
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    return (
      <BoardApptsFormStyled>
        <Form
          onSubmit={this.props.apptId?this.handleEditAppt:this.handleAddAppt}
          ref={(c) => {
            this.form = c;
          }}
        >
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="project">პროექტი N</label>
                <Input
                  type="number"
                  className="form-control"
                  name="project"
                  value={this.state.project}
                  onChange={this.handleInputChange}
                  validations={[required]}
                  disabled = {this.props.apptId}
                />
              </div>
              <div className="form-group">
                <label htmlFor="livingArea">საცხოვრებელი ფართი</label>
                <Input
                  type="number"
                  className="form-control"
                  name="livingArea"
                  value={this.state.livingArea}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="summerArea">საზაფხულო ფართი</label>
                <Input
                  type="number"
                  className="form-control"
                  name="summerArea"
                  value={this.state.summerArea}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="fullArea">სრული ფართი</label>
                <Input
                  type="number"
                  className="form-control"
                  name="fullArea"
                  value={this.state.fullArea}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="entrance">შემოსასვლელი</label>
                <Input
                  type="number"
                  className="form-control"
                  name="entrance"
                  value={this.state.entrance}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bathroom">სველი წერტილი</label>
                <Input
                  type="number"
                  className="form-control"
                  name="bathroom"
                  value={this.state.bathroom}
                  onChange={this.handleInputChange}
                  validations={[required]}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="bedroom1">საძინებელი</label>
                <Input
                  type="number"
                  className="form-control"
                  name="bedroom1"
                  value={this.state.bedroom1}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bedroom2">საძინებელი 2</label>
                <Input
                  type="number"
                  className="form-control"
                  name="bedroom2"
                  value={this.state.bedroom2}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="livingRoom">მისაღები</label>
                <Input
                  type="number"
                  className="form-control"
                  name="livingRoom"
                  value={this.state.livingRoom}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group text-right">
                <button
                  className={
                    this.props.apptId ? "btn btn-success" : "btn btn-primary"
                  }
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>{this.props.apptId ? "შენახვა" : "დამატება"}</span>
                </button>
              </div>
            </div>

            {this.state.message && (
              <div className="col-md-12">
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />

            {/* TODO: add images array */}
          </div>
        </Form>
      </BoardApptsFormStyled>
    );
  }
}

export default BoardApptsForm;
