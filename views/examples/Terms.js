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
import ReactGA from 'react-ga';
import { useEffect } from 'react';
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import WFooter from "components/Footers/WFooter.js";

function Terms() {

  useEffect( ()=>{

    ReactGA.initialize('G-6DR4F99CWH');
    ReactGA.pageview(window.location.pathname + window.location.search);
  
  },[] )


  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/WajidLogo.png")}
              />
            </div>
            <div className="name"> <h4 className="title">Terms &amp; Conditions <br /></h4></div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p> </p>
              <br />
              {/* <div className="name">
              <h6 className="description"><a href="http://www.mjaisstore.com/Info/" target="blank"><strong>A Project by MJais Software Consultancy</strong></a></h6>
            </div> */}

              {/* <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button> */}
            </Col>
          </Row>
          <br />
          
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Terms 
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem> */}
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        {/* <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img alt="..." className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}  />
                        </Col> */}
                        <Col /* className="ml-auto mr-auto" lg="7" md="4" xs="4" */>
                          <h6>
                          Content <br />
                            <small>"Content" means CareerBuilder's web pages, web forms, programming (including software code used on the Sites and in the Services, including (i) tools, kits, and object libraries, (ii) all third-party or open source code embedded therein, and (iii) any upgrades, updates, releases, fixes, enhancements or modifications to the foregoing), graphics, images, design (color combinations and page layout), text, information, data, resumes stored in various commercial databases operated and licensed by CareerBuilder (including, among others, its "Resume Database," "Salary Calculator Database," "TalentStream Supply & Demand Database" and the Recruitment Edge Database), data submitted via the Sites by Users and other content made available through the Sites by CareerBuilder. </small>
                          </h6>
                        </Col> 
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        
                        <Col /* lg="7" md="4" xs="4" */>
                          <h6>
                          Document <br />
                            <small>"Document" refers to any posting to a Site, whether job or resume. </small>
                          </h6>
                        </Col>
                        
                      </Row>
                    </li>

                    <hr />
                    <li>
                      <Row>
                        
                        <Col /* lg="7" md="4" xs="4" */>
                          <h6>
                          Employer <br />
                            <small>"Employer" means a person or entity that is accessing a Site to post a job or utilizing the Services for any reason related to the purpose of seeking candidates for employment. </small>
                          </h6>
                        </Col>
                        
                      </Row>
                    </li>

                    <hr />
                    <li>
                      <Row>
                        
                        <Col /* lg="7" md="4" xs="4" */>
                          <h6>
                          Job Seeker <br />
                            <small>"Job Seeker" means a User who is accessing a Site to search for a job or in any other capacity except as an Employer. </small>
                          </h6>
                        </Col>
                        
                      </Row>
                    </li>

                    <hr />
                    <li>
                      <Row>
                        
                        <Col /* lg="7" md="4" xs="4" */>
                          <h6>
                          Services <br />
                            <small>"Services" means any services provided by CareerBuilder or its agents described herein and specified more fully in the Service Activation Agreement. </small>
                          </h6>
                        </Col>
                        
                      </Row>
                    </li>

                  </ul>
                </Col>
              </Row>
            </TabPane>
            {/* <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane> */}
          </TabContent>

        </Container>
      </div>
      <WFooter />
    </>
  );
}

export default Terms;
