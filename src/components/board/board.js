import { Component } from "react";
import AdminNavbar from "../admin-navbar";
import BoardApptsForm from '../board-appts-form'
import AppartmentsService from "../../services/appts.service";
import styled from "styled-components";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allAppartments: [],
      loading: true,
      message: "",
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
  render() {
    const BoardItemStyled = styled.div`
      margin: 15px 0px;
      border: 1px solid #d8dad6;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 3px 0 rgba(14, 41, 77, 0.1);
      margin-bottom: 20px;
      background: #fff;
      .badge {
        font-size: 13px;
        padding: 7px 3px 4px 6px;
        letter-spacing: 3px;
        &.sold {
          opacity: 0.8;
          background: #dedede;
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
    `;

    let appartments = this.state.allAppartments.map((app) => {
      const allFloors = app.floors.map((floor, idx) => {
        return (
          <button
            className="badge badge-primary mr-1"
            issold={app.sold[idx] === true ? "yes" : "no"}
            key={app + floor + idx}
          >
            {floor} {app.sold[idx] === true ? "- გაყიდულია" : ""}
          </button>
        );
      });
      return (
        <BoardItemStyled>
          <h2>{app.name}</h2>
          <div className="projectinfo">{allFloors}</div>
        </BoardItemStyled>
      );
    });

    return (
      <div className="container">
        <AdminNavbar />
        Board
        <BoardApptsForm />
        <div>{appartments}</div>
        {this.state.loading && (
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
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
