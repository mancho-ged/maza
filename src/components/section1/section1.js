import React, {useState} from "react";
import styled from "styled-components";
import {Modal} from "react-bootstrap";

import Wrapper from "../wrapper/wrapper";
import buildingImage from "../../images/korpusi-main.jpg";
import fullPlan from '../../images/fullplan.png';
import buildingBackgroundImage from "../../images/building-translucent.png";

const Section1Styled = styled.div`
  background-color: #fff;
  background-image: url(${buildingBackgroundImage});
  background-attachment: fixed;
  background-size: cover;
  height: 657px;
  display:none;
  @media screen and (min-width:768px){
    display:block;
  }

  div.container {
    min-height: 657px;
  }
  .building-image-wrapper {
    position: absolute;
    z-index: 0;
    top: 0;
    margin-top: 76px;
    img {
      
      max-height: calc(657px - 76px);
      width: auto;
      max-width: 100%;
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
  
`;

export default function Section1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Section1Styled id="section1">
      <Wrapper>
        <div className="building-image-wrapper">
          <img src={buildingImage} alt="current building" />
          <div className="container-building container">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 800 600"
              xmlSpace="preserve"
            >
              <g id="sartuli1" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="84,474 84,463 103,463 103,440 726,435 726,461 733,461 733,478"
                />
              </g>
              <g id="sartuli2" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="106,404 728,396 728,404 722,404 723,423 728,423 726,435 103,440 	"
                />
              </g>
              <g id="sartuli3" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="109,367 712,353 712,360 728,360 722,367 723,381 728,381 728,396 106,404 	"
                />
              </g>
              <g id="sartuli4" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="111,330 709,313 709,321.5 723,321.5 723,343 728,343 728,360 712,360 712,353 109,367 	"
                />
              </g>
              <g id="sartuli5" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="109,294 708,272 708,283 722,283 722,289 722,306 723,321.5 709,321.5 709,313 111,330 	"
                />
              </g>
              <g id="satuli6" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="114,260 707,233 707,246.5 723,246.5 717,253 717,272 723,272 722,283 708,283 708,272 109,294 	"
                />
              </g>
              <g id="sartuli7" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="114,225 705,195 705,210 723,210 716,218 717,233 723,233 723,246.5 707,246.5 707,233 109,259 	"
                />
              </g>
              <g id="sartuli8" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="115,189 703,153 703,171 718,171 718,177 718,195 723,195 723,210 705,210 705,195 109,222 	"
                />
              </g>
              <g id="sartuli9" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="115,153 702,116 702,139 718,134.5 712,144 713,153 718,153 718,171 703,171 703,153 109,187.5 	"
                />
              </g>
              <g id="sartuli10" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="115,116 701,75 701,101 718,100 712,109 713,116 718,116 718,134.5 702,139 702,116 115,153 	"
                />
              </g>
              <g id="sartuli11" onClick={handleShow}>
                <polygon
                  class="st0"
                  points="115,87 109,87 109,71 704,22 704,37 699,45 700,54.5 704,66 718,67 718,100 701,101 701,75 115,116 	
		"
                />
              </g>
            </svg>
          </div>
        </div>
      </Wrapper>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 900 338"  xmlSpace="preserve">

<g id="Layer_1" >
	<image width="900" height="338" xlinkHref={fullPlan}>
	</image>
</g>
<g id="bina1" >
	<polygon class="st0" points="76.79,175.71 72.29,213 4.14,215.57 18.93,110.14 30.5,110.14 33.07,96 50.43,96 62.64,30.43 
		76.79,30.43 76.79,25.93 110.86,25.93 104.43,13.07 116.64,13.07 101.86,111.43 126.93,111.43 122.43,146.79 126.93,146.79 
		123.71,176.36 	"/>
</g>
<g id="bina2">
	<polygon class="st0" points="182.21,147.43 122.43,146.79 126.93,111.43 101.86,111.43 116.64,13.07 126.93,13.07 134,24.64 
		178.36,25.29 167.43,110.79 187.36,111.43 	"/>
</g>
<g id="bina3">
	<polygon class="st0" points="249.07,147.43 254.86,62.57 220.14,62.57 225.29,2.79 269,2.79 269,13.07 279.29,13.07 283.14,25.93 
		344.86,25.93 344.86,15 354.5,13.07 350,147.43 	"/>
</g>
<g id="bina4">
	<polygon class="st0" points="450,147.43 350,147.43 354.5,13.07 367.36,13.07 368,26.57 439.36,25.93 439.36,13.07 450,13.07 	"/>
</g>
<g id="bina5">
	<polygon class="st0" points="549.93,147.43 450,147.43 450,13.07 461.86,13.07 461.86,25.93 531.29,25.29 533.86,13.07 
		544.79,13.07 	"/>
</g>
<g id="bina6">
	<polygon class="st0" points="680.43,80.25 646.36,80.25 654.71,147.43 549.93,147.43 544.79,13.07 557,13.07 556.36,25.93 
		618.07,25.29 623.21,13.07 630.93,13.07 631.57,2.79 676.57,2.79 	"/>
</g>
<g id="bina7">
	<polygon class="st0" points="797.43,111.43 774.93,111.43 778.79,147.43 717.07,147.43 713.86,111.43 735.07,111.43 726.07,29.79 
		721.57,29.79 723.5,25.93 765.93,25.93 773.64,13.07 783.29,13.07 788.43,33 	"/>
</g>
<g id="bina8">
	<polygon class="st0" points="845,95.36 868.79,95.36 868.79,109.5 881,109.5 890,158.36 900,215.57 888.07,215.57 891.93,253.5 
		870.71,253.5 866.25,215.83 825.71,215.57 821.21,175.71 773,175.71 769.79,147.43 778.79,147.43 774.93,111.43 797.43,111.43 
		787.65,29.99 783.29,13.07 797.43,15.64 789.71,24.64 823.79,25.29 824.43,31.71 839.86,31.71 	"/>
</g>
<g id="bina9">
	<polygon class="st0" points="877.14,302.36 863.64,313.93 864.29,331.93 857.86,338 759.5,338 773,327.43 769.79,302.36 
		758.86,210.43 743.43,210.43 739.57,175.71 821.21,175.71 825.71,215.57 866.25,215.83 	"/>
</g>
<g id="bina10">
	<polygon class="st0" points="743.43,210.43 758.86,210.43 773,327.43 759.5,338 656.64,338 665.64,327.43 661.79,302.36 
		653.43,175.71 739.57,175.71 	"/>
</g>
<g id="bina11">
	<polygon class="st0" points="556.36,302.36 552.5,175.71 653.43,175.71 661.79,302.36 665.64,327.43 656.64,338 552.5,338 
		557.64,326.14 	"/>
</g>
<g id="bina12">
	<polygon class="st0" points="552.5,338 450,338 450,175.71 552.5,175.71 557.64,326.14 	"/>
</g>
<g id="bina13">
	<polygon class="st0" points="347.43,338 341.64,326.79 350,175.71 450,175.71 450,338 	"/>
</g>
<g id="bina14">
	<polygon class="st0" points="245.21,338 234.93,326.14 245.21,175.71 350,175.71 341.64,326.79 347.43,338 	"/>
</g>
<g id="bina15">
	<polygon class="st0" points="142.36,338 126.93,327.43 142.36,210.43 157.79,210.43 157.79,175.71 245.21,175.71 234.93,326.14 
		247.79,338 	"/>
</g>
<g id="bina16">
	<polygon class="st0" points="42.07,338 35,331.29 35,313.93 22.14,302.36 27.93,254.14 16.36,254.14 9.29,248.36 12.5,224.57 
		4.14,215.57 72.29,213 76.79,175.71 157.79,175.71 157.79,210.43 142.36,210.43 126.93,327.43 142.36,338 	"/>
</g>
</svg>
        </Modal.Body>
        
      </Modal>
    </Section1Styled>
  );
}
