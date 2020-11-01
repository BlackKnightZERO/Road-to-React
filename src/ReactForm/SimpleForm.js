import React, { Component } from 'react';

class SimpleForm extends Component {
    render() {
        return (
            <div>
                <form style={{ background:"lightgrey", padding: "10px" }}>
                    <h4>Simple Form</h4>
                    <input type="text" name="firstName" placeholder="First Name"></input>
                    <br></br>
                    <br></br>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default SimpleForm;