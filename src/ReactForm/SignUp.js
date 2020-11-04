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

        var h5_1 = React.createElement('h5', {}, `${this.state.fullName}`);
        var h5_2 = React.createElement('h5', {}, `${this.state.mobile}`);
        var h5_3 = React.createElement('h5', {}, `${this.state.email}`);
        var h5_4 = React.createElement('h5', {}, `${this.state.password}`);

        var element = React.createElement('div', {}, [h5_1, h5_2, h5_3, h5_4]);
        
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
        //validation    
        if(inputName === 'mobile'){
            if(!Number(inputValue)){
                if(inputValue.length != 11){
                    this.setState(
                        {
                            mobile: "Enter a valid phone no",
                        }
                    )
                } 
            }
        }
        if(inputName === 'email'){
            var emailPatter = /\S+@\S+\.\S+/;
            if(emailPatter.test(inputValue)){
                this.setState(
                    {
                        mobile: "Enter a valid Email",
                    }
                )
            } 
        }
        if(inputName === 'password'){
            var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if(!passPattern.test(inputValue)){
                this.setState(
                    {
                        password : "Password Requirement Failed!",
                    }
                );
            }
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <h5>Need to do on change event handler, not on submit</h5>
                    <div className="container w-25 mt-4">
                        <div className="form-group">
                            <label className="float-left"><b>Full Name</b></label>
                            <input type="text" className="form-control" name="fullName" id="fullName" placeholder="Enter Name" onChange={this.onChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label className="float-left"><b>Mobile - 11 digits</b></label>
                            <input type="text" className="form-control" name="mobile" id="mobile" placeholder="017..." onChange={this.onChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label className="float-left"><b>Email address</b></label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="Enter email" onChange={this.onChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label className="float-left"><b>Password - Testing193!</b></label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="****" onChange={this.onChangeHandler}></input>
                        </div>
                        {/* <button type="submit" class="btn btn-success">Submit</button> */}
                        <input type="submit" name="submit" value="Sign Up" className="btn btn-success"></input>
                    </div>
                </form>

                <div className="bg-dark text-white" id="showValidationResult" style={{marginTop:'15px'}}>

                </div>

            </div>
        );
    }
}

export default SignUp;