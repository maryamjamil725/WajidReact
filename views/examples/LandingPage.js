/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import SectionExamples from "views/index-sections/SectionExamples.js";
import WajidJob from "views/index-sections/WajidJob.js";
import WFooter from "components/Footers/WFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main" id="StartPoint">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Find Career Opportunities </h2>
                <h5 className="description">
                  Best Place to Find New News &amp; Knowledge of Different Careers, Industries &amp; Jobs.  
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#jobs"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            
            <br />
            <Row>
              <Col md="3">
                <div className="info" id="jobs">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Industry News</h4>
                   {/*  <p className="description"> Spend your time generating new ideas. You don't have to
                      think of implementing. </p>
                    <Button className="btn-link" color="info" href="#pablo"> See more</Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Opportunities</h4>
                    {/* <p> Larger, yet dramatically thinner. More powerful, but  remarkably power efficient. </p>
                    <Button className="btn-link" color="info" href="#pablo"> See more</Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Tons of Companies</h4>
                    {/* <p>Choose from a veriety of many colors resembling sugar paper pastels. </p>
                    <Button className="btn-link" color="info" href="#pablo"> See more </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Interview Tips</h4>
                    {/* <p>Find unique and handmade delightful designs related items directly from our sellers.</p>
                    <Button className="btn-link" color="info" href="#pablo"> See more </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

                    
        <WajidJob/>


       
      </div>
      <WFooter />
    </>
  );
}

export default LandingPage;
