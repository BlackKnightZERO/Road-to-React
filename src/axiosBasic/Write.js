import React, { Component } from 'react';
import axios from 'axios'

class Write extends Component {

    constructor(){
        super();
        this.state = {
            postData : '',
            postResult: '',
        }
    }
    onChangeHandler = (event) => {
       var myData = event.target.value;
       this.setState({
        postData : myData,
       });
    }

    postForm = () => {
        axios.post('http://localhost/db_blog2/postApi.php',this.state.postData)
            .then(response=>{
                console.log(response.data);
                this.setState({
                    postResult: response.data,
                })
                // alert(this.state.postResult);
            })
            .catch(error=>{
                alert('Oops!');
            })
    }

    render() {
        return (
            <div>
                <input 
                type="text"
                name="name"
                onChange={this.onChangeHandler}
                ></input>
                <button onClick={this.postForm}>Send</button>

                <div style={{ marginTop:"10px" }}>
                    <p>{ this.state.postResult }</p>
                </div>
            </div>
        );
    }
}

// //on any localhost project php file (for testing purpose)
//<?php
// header("Access-Control-Allow-Origin: *");
// $data = file_get_contents("php://input");
// echo $data." From Server";
//?>

export default Write;