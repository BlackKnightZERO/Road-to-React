import React, { Component } from 'react';

class SimpleForm extends Component {

    constructor(){
        super()
        this.state ={
            firstName : '',
        }
    }

    onChangeHandler = (event) => {
        var inputFieldValue = event.target.value;
        var inputFieldName = event.target.name;
        this.setState(
            {
                [inputFieldName] : inputFieldValue, // to set property insite []
            }
        );
    }

    onSubmitHandler = () => {
        alert(
        `Your First Name is ${this.state.firstName}`
        );
    }

    render() {
        return (
            <div>
                <form style={{ background:"lightgrey", padding: "10px" }} onSubmit={this.onSubmitHandler}>
                    <h4>Simple Form</h4>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.onChangeHandler}></input>
                    <br></br>
                    <p>{this.state.firstName}</p>
                    <br></br>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default SimpleForm;