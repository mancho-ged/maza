import { Component } from "react";
import AdminNavbar from "../admin-navbar";
import BoardApptsForm from "../board-appts-form";
import AppartmentsService from "../../services/appts.service";
import BoardAppt from "../board-appt";
import buildingBackgroundImage from "../../images/building-translucent.png";
import styled from "styled-components";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allAppartments: [],
      loading: true,
      message: "",
      appartments: [],
      adding: false,
      apptLoading: false,
    };
  }

  componentDidMount() {
    AppartmentsService.getAllAppartments().then(
      (res) => {
        let newAllAppartments = Object.keys(res.data).map((i) => res.data[i]);
        this.setState({
          allAppartments: newAllAppartments,
          loading: false,
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
  componentDidUpdate(prevProps, prevState) {
    if (this.state.loading === true) {
      AppartmentsService.getAllAppartments().then(
        (res) => {
          try{
            const allAppartments = Object.keys(res.data).map((i) => res.data[i]);
          this.setState(() => {
            return {
              allAppartments: allAppartments,
              loading: false,
            };
          });
          } catch(err){
            console.log(err)
          }
          
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
  componentWillUnmount() {
    this.setState(() => {
      return {
        allAppartments: null,
        loading: false,
      };
    });
}
  updateFloorsSold = (app, id, idx) => {
    this.setState({
      loading: true,
      message: "",
      apptLoading: true,
    });

    let elementValue = app.sold[idx];
    let soldOld = [...app.sold];
    let soldItems = [
      ...soldOld.slice(0, idx),
      !elementValue,
      ...soldOld.slice(idx + 1),
    ];
    console.log(app);
    AppartmentsService.editAppartment(id, {
      sold: soldItems,
    }).then(() => {
      this.setState({ loading: false, apptLoading: false });
    });
  };

  onAppartmentAdded = () => {
    this.setState({ loading: true });
  };

  deleteAppt = (id) => {  
    AppartmentsService.deleteOneAppartment(id);
    this.setState({ loading: true });   
  };

  render() {
    let AdminBoardStyled = styled.div`
      background-color: #fff;
      background-image: url(${buildingBackgroundImage});
      background-attachment: fixed;
      background-size: cover;
      .container{
        background:#fff;
      }
    `;
    let allFloors = [];
    let appartments = this.state.allAppartments.map((app, idx) => {
      if (this.state.allAppartments.length > 0) {
        allFloors = app.floors.map((floor, idx) => {
          return (
            <button
              className={`badge badge-primary mr-1 ${
                app.sold[idx] ? "sold" : "no"
              }`}
              onClick={() => {
                this.updateFloorsSold(app, app.id, idx);
              }}
              key={app + floor + idx}
            >
              {floor} {app.sold[idx] === true ? "- გაყიდულია" : ""}
            </button>
          );
        });
      }
      return (
        <BoardAppt
          app={app}
          allFloors={allFloors}
          idx={idx}
          key={app.name + idx}
          onAppartmentDeleted={this.deleteAppt}
          apptLoading={this.state.apptLoading}
        />
      );
    });

    return (
      <AdminBoardStyled>
        <div className="container">
          <AdminNavbar />
          Board
          <BoardApptsForm onAppartmentAdded={this.onAppartmentAdded} />
          <div>{appartments}</div>
          {this.state.loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {this.state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )}
        </div>
      </AdminBoardStyled>
    );
  }
}

export default Board;
