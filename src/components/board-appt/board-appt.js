import React, { Component } from "react";
import styled from "styled-components";
import BoardApptsForm from "../board-appts-form";

class BoardAppt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editBlockOpen: false,
      deleteLoading: false
    };
  }
  handleOpenEdit = () => {
    this.setState((prevState) => {
      return { editBlockOpen: !prevState.editBlockOpen };
    });
  };

  render() {
    const BoardItemStyled = styled.div`
      .item-card {
        margin: 15px 0px;
        border: 1px solid #d8dad6;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 3px 0 rgba(14, 41, 77, 0.1);
        margin-bottom: 20px;
        background: #fff;
        display: flex;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        .badge {
          font-size: 14px;
          padding: 7px 3px 4px 6px;
          letter-spacing: 3px;
          margin-bottom: 8px;
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
          min-width: 226px;
          button {
            span {
              svg {
                fill: #fff;
                width: 12px;
                height: auto;
                margin-right: 4px;
                margin-left: -1px;
                margin-bottom: 4px;
              }
              &.open {
                svg {
                  transform: rotate(-90deg);
                }
              }
            }
          }
        }
      }
      .appt-edit-block {
        padding: 20px 15px 3px 15px;
        border: 1px solid #d8dad6;
        border-top: none;
        margin-top: -26px;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 3px 0 rgba(14, 41, 77, 0.1);
        margin-bottom: 20px;
      }
    `;

    let { app, idx, allFloors } = this.props;

    return (
      <BoardItemStyled key={app.name + idx}>
        <div className="item-card">
          <div>
            <h2>{app.name}</h2>
            <div className="projectinfo">
              {allFloors}
              {this.props.apptLoading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </div>
          </div>
          <div className="buttons">
            <button
              className="btn btn-warning"
              onClick={() => {
                this.setState({deleteLoading:true});
                this.props.onAppartmentDeleted(app.id);
              }}
              
            >
                {this.state.deleteLoading&&(<span className="spinner-border spinner-border-sm"></span>)}
              წაშლა
            </button>
            <button
              className="btn btn-success ml-1"
              onClick={this.handleOpenEdit}
            >
              <span className={this.state.editBlockOpen ? "open" : ""}>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="451.847px"
                  height="451.847px"
                  viewBox="0 0 451.847 451.847"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    />
                  </g>
                </svg>
                რედაქტირება
              </span>
            </button>
          </div>
        </div>
        {this.state.editBlockOpen && (
          <div className="appt-edit-block">
            <BoardApptsForm apptId={app.id} />
          </div>
        )}
      </BoardItemStyled>
    );
  }
}

export default BoardAppt;
