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
        this.setState({
            loggedIn : false,
        });  
        sessionStorage.clear();
        setTimeout(() => {
            alert('Logged Out..');
          }, 300);
    }

    render() {
        if(sessionStorage.getItem('userName') === 'admin'){
            return(
                <div>
                    <button onClick={this.logout}>Logout</button>
                </div>
            );
        } else {
            return(
                <div>
                    <button onClick={this.login}>Login</button>
                </div>
            );
        }
        
    }
}

export default login;