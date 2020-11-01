import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FindDom extends Component {

    changeImg = () => {
        var imgId = document.getElementById('picsumImg');
        ReactDOM.findDOMNode(imgId).src = "https://picsum.photos/200/300";
        console.log(imgId);
        var borderColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        ReactDOM.findDOMNode(imgId).style.border = `5px solid ${borderColor}`; 
    }

    render() {
        return (
            <div>
                <button onClick={this.changeImg} style={{ margin: "15px" }}>change image</button>
                <br></br>
                <img id="picsumImg" src="https://picsum.photos/200/300" style={{marginTop:"5px"}}></img>
            </div>
        );
    }
}

export default FindDom;