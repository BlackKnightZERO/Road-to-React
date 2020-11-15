import React, { Component } from 'react';
import Modulecss from '../Mycss.module.css';
import '../Mysass.scss';

class style extends Component {

    render() {
        const textStyle = {
            color:"white", 
            backgroundColor:"grey", 
            padding :"10px"
        };

        return (
            <div>
                <h1 style={{ color:"white", backgroundColor:"green", padding :"10px" }}>Arif Faysal - inline</h1>
                <h1 style={textStyle}>Rifat Zabin - js.obj</h1>
                <h1 className="lin-color">Shalini - App.css</h1>
                <h1 className={Modulecss.shuvoColor}>Shuvo - moduled css</h1>

                <h1 className="sassStyle">SASS-Runs in the server, sends css to browser</h1>
            </div>
        );
    }
}

export default style;