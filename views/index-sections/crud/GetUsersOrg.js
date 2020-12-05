import React, {Component} from 'react';
import {AppContext} from './Context';
class GetUsers extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_users();
    }

    render(){
        let allUsers;
        let mainData;
        
        allUsers = this.context.all_users.map(({id,jobpost,companyname,companyEmail,	category,salary, 	
            details,	city,link ,  	sources ,	isEditing}) => {
            return isEditing === true ? (
                <tr key={id}>
                {/* <td><input className="form-control" type="text" ref={(item) => this.name = item} defaultValue={user_name}/></td>
                <td><input className="form-control" type="email" ref={(item) => this.email = item} defaultValue={user_email}/></td>
                 */}<td>
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Save</button>
                    <button onClick={() => this.context.cancelEdit(id)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ) : (
                <tr key={id}>
                    
                    
                    <td>{jobpost}</td>
                    <td>{companyname}</td>
                    <td>{companyEmail}</td>

                    <td>{category}</td>
                    <td>{salary}</td>
                    <td>{details}</td>
                    <td>{city}</td>

                    <td><a href={link} target="blank">{sources}</a></td>
                </tr>
            );
        });

        if(this.context.all_users.length > 0){
            mainData = (
                <table className="table table-striped " style={{color : "white"}}>
                    <thead>
                        <tr>
                            <th>Job Post</th>
                            <th>Company Name</th>
                            <th>Company Email</th>
                            <th>Category</th>
                            <th>Salary</th>
                            <th>Details</th>
                            <th>City</th>
                            <th>Sources</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers}
                    </tbody>
                </table>
            );
        }
        else{
            mainData = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No User Found!</h4>
                    <hr/>
                    <p>Jobs will be Updated Soon </p>
                </div>
            );
        }
        return(
            <>
            {mainData}
            </>
        );
    }

}
export default GetUsers;