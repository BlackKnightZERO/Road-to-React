import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class Condition1 extends Component {

    constructor(){
        super();
        this.state = {
            login : true,
        }
    }

    funLogin = (param) => {
        var updateState = {
            login : param,
        }
        this.setState(updateState);
    }
    funLogout = (param) => {
        var updateState = {
            login : param,
        }
        this.setState(updateState);
    }

    render(){
        if(this.state.login == true){
            return (
                <div>
                    <h3>Logged in</h3>
                    <button className="btn btn-danger btn-sm" onClick={this.funLogout.bind(this, false)}>logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Logged out</h3>
                    <button className="btn btn-success btn-sm" onClick={this.funLogout.bind(this, true)}>login</button>
                </div>
            );
        }
    }
}

export default Condition1