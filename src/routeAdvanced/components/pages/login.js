import React, { Component } from 'react';

class login extends Component {

    constructor(){
        super();
        this.state = {
            loggedIn : false,
        }
    }

    login = () => {
        //js session storage
        sessionStorage.setItem("userName", "admin");
        this.setState({
            loggedIn : true,
        });    
        setTimeout(() => {
         alert('Login Successful!');
        }, 700);

    }

    logout = () => {
        sessionStorage.clear();
        setTimeout(() => {
            alert('Logged Out..');
          }, 300);
    }

    render() {
        return(
            <div>
                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default login;