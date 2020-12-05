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
import ReactGA from 'react-ga';
import { useEffect } from 'react';
function About() {

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
            <div className="name"> <h4 className="title">Your Career Counsellor <br /></h4></div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                WAJID aims to provide jobs details around the world. 
                We are based in Pakistan with the ambition to provide good human resource and 
                searching of job with more ease.
              </p>
              <br />
              <div className="name">
              <h6 className="description"><a href="http://www.mjaisstore.com/Info/" target="blank"><strong>A Project by MJais Software Consultancy</strong></a></h6>
            </div>

              {/* <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button> */}
            </Col>
          </Row>
          <br />
          
          
        </Container>
      </div>
      <WFooter />
    </>
  );
}

export default About;
