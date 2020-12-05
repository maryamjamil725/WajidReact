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

import {Provider} from './crud/Context';
import AllUsers from './crud/GetUsers';
import Actions from './crud/Actions';


// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Table from "reactstrap/lib/Table";

// core components

class WajidJob  extends Actions  {
  render(){
    const contextValue = {
         all_users:this.state.users,
        get_users:this.fetchUsers,
        editMode:this.editMode,
        cancelEdit:this.cancelEdit,
        handleUpdate:this.handleUpdate,
        handleDelete:this.handleDelete,
        insertUser:this.insertUser 
    }
  
  return (
    <>
    
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
          
          
          <Provider value={contextValue}>
          <AllUsers/>
          </Provider>
                  </Row>
        </Container>
      </div>{" "}
    </>
  );
}
}
export default WajidJob;
