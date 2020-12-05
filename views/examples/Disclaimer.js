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

function Disclaimer() {

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
            <div className="name"> <h4 className="title">Disclaimer <br /></h4></div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>

This is to inform that Wajid is a free service to jobseekers for placements.<br />

Wajid does not guarantee any interview/meeting/discussion with any employer basis any amount of initial monetary payment by the jobseeker.
<br />
Wajid is not responsible for any frivolous email, sms or phone call by any fraudulent person pretending to be part of Zecruiters. Any communication from official domain of Zecruiters shall only be considered as genuine.
<br />
Jobseekers are advised not to indulge in any monetary engagement with any source in the name of guaranteed interviews with employers.
 </p>
              <br />
              

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

export default Disclaimer;
