import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom';

class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            fullName : '',
            mobile : '',
            email : '',
            password : '',
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        // alert(this.state);
        console.log(this.state);
        var container = document.getElementById('showValidationResult');
        var element = `<h5>${this.state.fullName}</h5>
                        <h5>${this.state.mobile}</h5>
                        <h5>${this.state.email}</h5>
                        <h5>${this.state.password}</h5>`;
        ReactDOM.render(element,container);
    }

    onChangeHandler = (event) => {
        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState(
            {
                [inputName] : inputValue,
            }
        );
    }


    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <div className="container w-25 mt-4">
                        <div className="form-group">
                            <label className="float-left"><b>Full Name</b></label>
                            <input type="text" className="form-control" name="fullName" id="fullName" placeholder="Enter Name" onChange={this.onChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label className="float-left"><b>Mobile</b></label>
                            <input type="text" className="form-control" name="mobile" id="mobile" placeholder="+8801XXX" onChange={this.onChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label className="float-left"><b>Email address</b></label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" onChange={this.onChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label className="float-left"><b>Password</b></label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="****" onChange={this.onChangeHandler}></input>
                        </div>
                        {/* <button type="submit" class="btn btn-success">Submit</button> */}
                        <input type="submit" name="submit" value="Sign Up" className="btn btn-success"></input>
                    </div>
                </form>

                <div className="bg-dark" id="showValidationResult">

                </div>

            </div>
        );
    }
}

export default SignUp;