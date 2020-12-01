import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class home extends Component {
    render() {

        if(sessionStorage.getItem('userName') === null){
            return <Redirect to = '/login'></Redirect>
        } else {
            return (
                <div>
                    <h1>Home</h1>
                </div>
            );
        }
    }
}

export default home;