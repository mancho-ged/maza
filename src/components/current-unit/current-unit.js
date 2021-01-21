import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

import Wrapper from "../wrapper/wrapper";
import TypicalAppartmentItem from "../typical-appartment-item";
import buildingImage from "../../images/korpusi-main.jpg";
import fullPlan from "../../images/fullplan.png";
import buildingBackgroundImage from "../../images/building-translucent.png";
import MazaService from "../../services/maza-service";
import FloorItem from "../floor-item";

const CurrentUnitStyled = styled.div`
  background-color: #fff;
  background-image: url(${buildingBackgroundImage});
  background-attachment: fixed;
  background-size: cover;
  height: 675px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }

  div.container {
    width: 800px;
    max-width: 100%;
    padding: 0;
  }
  .building-image-wrapper {
    position: absolute;
    z-index: 0;
    top: 76px;
    margin-top: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    img {
      width: auto;
      max-width: 100%;
    }
  }
  .floor-plan-container {
    margin-top: 30px;
    .floor-container {
      position: relative;
      svg {
        position: absolute;
        width: 100%;
        left: 0px;
        top: 0px;
      }
    }
    .legend{
      margin-bottom: 22px;
      svg{
        margin-left: 15px;
      }
    }
    .st0 {
      opacity: 0;
      transition: all 0.5s;
      cursor: pointer;
      fill: #cedae4;
      &.sold {
        fill: #000;
        opacity: 0.7;
        fill: url(#polka-dots);
        &:hover{
          opacity:.9;
        }
      }
    }

    .st0:hover {
      opacity: 0.8;
    }
  }
  .container-building {
    z-index: 1;
    position: absolute;
    top: 0;
    .st0 {
      opacity: 0;
      transition: all 0.5s;
      cursor: pointer;
      fill: #cedae4;
    }

    .st0:hover {
      opacity: 0.8;
    }
    svg {
      enable-background: new 0 0 1112 777;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
    }
  }
  .close-floor-plan {
    text-align: right;
    margin-left: 100%;
    cursor: pointer;
    height: 40px;
    width: 25px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;
    &.shown {
      opacity: 0;
      transition: all 0.3s ease-in-out;
      span {
        &:nth-child(1) {
          transform: translate(-50%, -50%) translateY(-11px);
          transition: 0.2s;
          width: 25px;
          left: 50%;
        }
        &:nth-child(2) {
          transform: translate(-50%, -50%) rotate(45deg);
          left: 50%;
        }
        &:nth-child(3) {
          transform: translate(-50%, -50%) rotate(-45deg);
          left: 50%;
        }
        &:nth-child(4) {
          transform: translate(-50%, -50%) translateY(11px);
          transition: 0.2s;
          width: 25px;
          left: 50%;
          width: 100%;
        }
      }
    }

    span {
      display: block;
      width: 25px;
      height: 2.5px;
      border-radius: 3px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #14256f;
      transition: 0.5s;
      text-align: right;
      &:nth-child(1) {
        transform: translate(-50%, -50%) translateY(-35px);
        opacity: 0;
        left: 50%;
      }
      &:nth-child(2) {
        transform: translate(-50%, -50%) rotate(45deg);
        left: 50%;
      }
      &:nth-child(3) {
        transform: translate(-50%, -50%) rotate(-45deg);
        left: 50%;
      }
      &:nth-child(4) {
        transform: translate(-50%, -50%) translateY(35px);
        opacity: 0;
        left: 50%;
      }
    }
  }
`;

export default function CurrentUnit() {
  const [modalState, setModalState] = useState(false);
  const [currentFloor, setCurrentFloor] = useState(0);

  const managePlanState = (floor) => {
    setCurrentFloor(floor);
    setModalState(!modalState);
  };

  const fullPlan = modalState ? (
    <FloorPlan managePlanState={managePlanState} currentFloor={currentFloor} />
  ) : null;
  const fullBuilding = !modalState ? (
    <FullBuilding managePlanState={managePlanState} />
  ) : null;
  return (
    <CurrentUnitStyled id="section1">
      <Wrapper>
        <div className="building-image-wrapper">
          {fullBuilding}
          {fullPlan}
        </div>
      </Wrapper>
    </CurrentUnitStyled>
  );
}

const FloorPlan = ({ managePlanState, currentFloor }) => {
  const [show, setShow] = useState(false);
  const [currentAppartment, setCurrentAppartment] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (currentAppart) => {
    setCurrentAppartment(currentAppart);
    setShow(true);
  };

  let binebi = MazaService.binebi;
  const shown = show ? "shown" : "";

  const SoldAppsOnFloor = [];

  for (let i = 0; i < binebi.length; i++) {
    SoldAppsOnFloor.push(binebi[i].sold[currentFloor - 1]);
  }

  const floorPoints = [
    {
      floorNumber: 1,
      points:
        "182.21,147.43 122.43,146.79 126.93,111.43 101.86,111.43 116.64,13.07 126.93,13.07 134,24.64 178.36,25.29 167.43,110.79 187.36,111.43",
    },
    {
      floorNumber: 2,
      points:
        "76.79,175.71 72.29,213 32.18,214.51 27.93,254.14 15.73,253.83 8.88,249.64 13.08,224.11 4.14,215.57 18.93,110.14 30.5,110.14 33.07,96 50.43,96 62.64,30.43 76.79,30.43 76.79,25.93 110.86,25.93 104.43,13.07 116.64,13.07 101.86,111.43 126.93,111.43 122.43,146.79 126.93,146.79 123.71,176.36",
    },
    {
      floorNumber: 3,
      points:
        "42.07,338 35,331.29 35,313.93 22.14,302.36 27.93,254.14 32.18,214.51 72.29,213 76.79,175.71 157.79,175.71 157.79,210.43 142.36,210.43 126.93,327.43 142.36,338 ",
    },
    {
      floorNumber: 4,
      points:
        "142.36,338 126.93,327.43 142.36,210.43 157.79,210.43 157.79,175.71 245.21,175.71 234.93,326.14 247.79,338 	",
    },
    {
      floorNumber: 5,
      points:
        "245.21,338 234.93,326.14 245.21,175.71 350,175.71 341.64,326.79 347.43,338",
    },
    {
      floorNumber: 6,
      points: "347.43,338 341.64,326.79 350,175.71 450,175.71 450,338",
    },
    {
      floorNumber: 7,
      points: "552.5,338 450,338 450,175.71 552.5,175.71 557.64,326.14",
    },
    {
      floorNumber: 8,
      points:
        "556.36,302.36 552.5,175.71 653.43,175.71 661.79,302.36 665.64,327.43 656.64,338 552.5,338 557.64,326.14 	",
    },
    {
      floorNumber: 9,
      points:
        "743.43,210.43 758.86,210.43 773,327.43 759.5,338 656.64,338 665.64,327.43 661.79,302.36 653.43,175.71 739.57,175.71",
    },
    {
      floorNumber: 10,
      points:
        "877.14,302.36 863.64,313.93 864.29,331.93 857.86,338 759.5,338 773,327.43 769.79,302.36 758.86,210.43 743.43,210.43 739.57,175.71 821.21,175.71 825.71,215.57 866.25,215.83",
    },
    {
      floorNumber: 11,
      points:
        "845,95.36 868.79,95.36 868.79,109.5 881,109.5 890,158.36 900,215.57 888.07,215.57 891.93,253.5 870.71,253.5 866.25,215.83 825.71,215.57 821.21,175.71 773,175.71 769.79,147.43 778.79,147.43 774.93,111.43 797.43,111.43 787.65,29.99 783.29,13.07 797.43,15.64 789.71,24.64 823.79,25.29 824.43,31.71 839.86,31.71",
    },
    {
      floorNumber: 12,
      points:
        "797.43,111.43 774.93,111.43 778.79,147.43 717.07,147.43 713.86,111.43 735.07,111.43 726.07,29.79 721.57,29.79 723.5,25.93 765.93,25.93 773.64,13.07 783.29,13.07 788.43,33",
    },
    {
      floorNumber: 13,
      points:
        "680.43,80.25 646.36,80.25 654.71,147.43 549.93,147.43 544.79,13.07 557,13.07 556.36,25.93 618.07,25.29 623.21,13.07 630.93,13.07 631.57,2.79 676.57,2.79 ",
    },
    {
      floorNumber: 14,
      points:
        "549.93,147.43 450,147.43 450,13.07 461.86,13.07 461.86,25.93 531.29,25.29 533.86,13.07 544.79,13.07 ",
    },
    {
      floorNumber: 15,
      points:
        "450,147.43 350,147.43 354.5,13.07 367.36,13.07 368,26.57 439.36,25.93 439.36,13.07 450,13.07",
    },
    {
      floorNumber: 16,
      points:
        "249.07,147.43 254.86,62.57 220.14,62.57 225.29,2.79 269,2.79 269,13.07 279.29,13.07 283.14,25.93 344.86,25.93 344.86,15 354.5,13.07 350,147.43",
    },
  ];

  const planFloors = floorPoints.map((AppPoints, index) => {
    return (
      <FloorItem
        floorNumber={AppPoints.floorNumber}
        points={AppPoints.points}
        key={AppPoints.floorNumber}
        handleShow={handleShow}
        sold={SoldAppsOnFloor[index]}
      />
    );
  });

  const RomanLetters = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
  ];

  return (
    <div className="container floor-plan-container">
      <div
        className={`close-floor-plan ${shown}`}
        onClick={() => {
          managePlanState(0);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h3>სართული {RomanLetters[currentFloor - 1]}</h3>
      <div className="d-flex justify-content-end legend">
        გაყიდული 
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
            <pattern
              id="polka-dots"
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Artboard-3-Copy-2" fill="#000000">
                  <rect
                    width="300"
                    height="100"
                    fill="rgba(222,222,222,0.95)"
                  />
                  <polygon id="Rectangle-9" points="5 0 6 0 0 6 0 5"></polygon>
                  <polygon id="Rectangle-9-Copy" points="6 5 6 6 5 6"></polygon>
                </g>
              </g>
            </pattern>
          </defs>
        <rect width="16px" height="16px" fill="url(#polka-dots)" />
      </svg>
      </div>
      <div className="floor-container">
        <img src={fullPlan} alt="Full Plan" />
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 900 338"
          xmlSpace="preserve"
        >
          <defs>
            <pattern
              id="polka-dots"
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="Artboard-3-Copy-2" fill="#000000">
                  <rect
                    width="300"
                    height="100"
                    fill="rgba(222,222,222,0.95)"
                  />
                  <polygon id="Rectangle-9" points="5 0 6 0 0 6 0 5"></polygon>
                  <polygon id="Rectangle-9-Copy" points="6 5 6 6 5 6"></polygon>
                </g>
              </g>
            </pattern>
          </defs>
          {/* <g id="Layer_1">
          <image width="900" height="338" xlinkHref={fullPlan}></image>
        </g> */}
          {planFloors}
        </svg>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <TypicalAppartmentItem {...binebi[currentAppartment]} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

const FullBuilding = ({ managePlanState }) => {
  return (
    <div className="container-building container">
      <img src={buildingImage} alt="current building" />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 800 600"
        xmlSpace="preserve"
      >
        <g
          id="sartuli1"
          onClick={() => {
            managePlanState(1);
          }}
        >
          <polygon
            className="st0"
            points="84,474 84,463 103,463 103,440 726,435 726,461 733,461 733,478"
          />
        </g>
        <g
          id="sartuli2"
          onClick={() => {
            managePlanState(2);
          }}
        >
          <polygon
            className="st0"
            points="106,404 728,396 728,404 722,404 723,423 728,423 726,435 103,440 	"
          />
        </g>
        <g
          id="sartuli3"
          onClick={() => {
            managePlanState(3);
          }}
        >
          <polygon
            className="st0"
            points="109,367 712,353 712,360 728,360 722,367 723,381 728,381 728,396 106,404 	"
          />
        </g>
        <g
          id="sartuli4"
          onClick={() => {
            managePlanState(4);
          }}
        >
          <polygon
            className="st0"
            points="111,330 709,313 709,321.5 723,321.5 723,343 728,343 728,360 712,360 712,353 109,367 	"
          />
        </g>
        <g
          id="sartuli5"
          onClick={() => {
            managePlanState(5);
          }}
        >
          <polygon
            className="st0"
            points="109,294 708,272 708,283 722,283 722,289 722,306 723,321.5 709,321.5 709,313 111,330 	"
          />
        </g>
        <g
          id="satuli6"
          onClick={() => {
            managePlanState(6);
          }}
        >
          <polygon
            className="st0"
            points="114,260 707,233 707,246.5 723,246.5 717,253 717,272 723,272 722,283 708,283 708,272 109,294 	"
          />
        </g>
        <g
          id="sartuli7"
          onClick={() => {
            managePlanState(7);
          }}
        >
          <polygon
            className="st0"
            points="114,225 705,195 705,210 723,210 716,218 717,233 723,233 723,246.5 707,246.5 707,233 109,259 	"
          />
        </g>
        <g
          id="sartuli8"
          onClick={() => {
            managePlanState(8);
          }}
        >
          <polygon
            className="st0"
            points="115,189 703,153 703,171 718,171 718,177 718,195 723,195 723,210 705,210 705,195 109,222 	"
          />
        </g>
        <g
          id="sartuli9"
          onClick={() => {
            managePlanState(9);
          }}
        >
          <polygon
            className="st0"
            points="115,153 702,116 702,139 718,134.5 712,144 713,153 718,153 718,171 703,171 703,153 109,187.5 	"
          />
        </g>
        <g
          id="sartuli10"
          onClick={() => {
            managePlanState(10);
          }}
        >
          <polygon
            className="st0"
            points="115,116 701,75 701,101 718,100 712,109 713,116 718,116 718,134.5 702,139 702,116 115,153 	"
          />
        </g>
        <g
          id="sartuli11"
          onClick={() => {
            managePlanState(11);
          }}
        >
          <polygon
            className="st0"
            points="115,87 109,87 109,71 704,22 704,37 699,45 700,54.5 704,66 718,67 718,100 701,101 701,75 115,116 	
		"
          />
        </g>
      </svg>
    </div>
  );
};
