import React, { Component } from 'react';
import reactDOM from 'react-dom';

class Render extends Component {

    triggerRenderFun = () => {
        var container = document.getElementById("containerID");
        var element = <span>I am Arif, I'm from reactDOM</span>
        
        var container2 = document.getElementById("callBackID");
        var element2 = <span>callback...{'\u2728'}</span>

        var container3 = document.getElementById("forceRefreshID");
        var element3 = <button>again</button>
        
        var callBack = () => {
            setTimeout(() => {  
                reactDOM.render(element2,container2)
                console.log("callback..!"); 
                reactDOM.render(element3,container3);
            }, 700);
        }
        reactDOM.render(element,container, callBack);
    }

    render() {
        return (
            <div>
                <div style={{ padding:"4%" }}>
                    <button onClick={this.triggerRenderFun}>change</button>
                    <br/>
                    <h3 id="containerID">I am Ayon</h3>
                    <h5 id="callBackID"></h5>
                    <div id="forceRefreshID"></div>
                </div>
            </div>
        );
    }
}

export default Render;