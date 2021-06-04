import { Component } from "react";
import AdminNavbar from "../admin-navbar";
import BoardApptsForm from "../board-appts-form";
import AppartmentsService from "../../services/appts.service";
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
    };
  }

  componentDidMount() {
    AppartmentsService.getAllAppartments().then(
      (res) => {
        const allAppartments = Object.keys(res.data).map((i) => res.data[i]);
        this.setState({
          allAppartments: allAppartments,
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
    if(this.state.loading === true){
      AppartmentsService.getAllAppartments().then(
        (res) => {
          const allAppartments = Object.keys(res.data).map((i) => res.data[i]);
          this.setState(() => {
            return{
              allAppartments: allAppartments,
              loading: false,
            }
            
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

  onAppartmentAdded = () => {
    this.setState({loading:true})
  };

  deleteAppt = (id) => {
    AppartmentsService.deleteOneAppartment(id);
    this.setState({loading:true})
  }

  render() {
    const BoardItemStyled = styled.div`
      margin: 15px 0px;
      border: 1px solid #d8dad6;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 3px 0 rgba(14, 41, 77, 0.1);
      margin-bottom: 20px;
      background: #fff;
      display: flex;
      .badge {
        font-size: 14px;
        padding: 7px 3px 4px 6px;
        letter-spacing: 3px;
        margin-bottom:8px;
        &.sold {
          opacity: 0.8;
        }
      }

      img {
        max-width: 100%;
        height: auto;
      }
      h4 {
        margin-top: 15px;
      }
      h6 {
        font-size: 22px;
        margin-top: 20px;
      }
      .buttons {
        margin-left: auto;
      }
    `;
    let allFloors = [];
    let appartments = this.state.allAppartments.map((app, idx) => {
      if (this.state.allAppartments.length > 0) {
        allFloors = app.floors.map((floor, idx) => {
          return (
            <button
              className={`badge badge-primary mr-1 ${app.sold[idx] ? "sold" : "no"}`}
              
              key={app + floor + idx}
            >
              {floor} {app.sold[idx] === true ? "- გაყიდულია" : ""}
            </button>
          );
        });
      }
      return (
        <BoardItemStyled key={app.name + idx}>
          <div>
            <h2>{app.name}</h2>
            <div className="projectinfo">{allFloors}</div>
          </div>
          <div className="buttons">
            <button className="btn btn-warning" onClick={()=>{this.deleteAppt(app.id)}}>წაშლა</button>
          </div>
        </BoardItemStyled>
      );
    });

    return (
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
    );
  }
}

export default Board;
