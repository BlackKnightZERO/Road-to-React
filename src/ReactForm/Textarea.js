import React, { Component } from 'react';

class Textarea extends Component {

    constructor(){
        super();
        this.state = {
            description : 'Write..',        
        }
    }

    onChangeHandler = (event) => {
        var descVal = event.target.value;
        var description = event.target.name;

        this.setState(
            {
                [description] : descVal,
            }
        );
    }

    render() {
        return (
            <div style={{ marginTop: "15px;" }}>
                <textarea id="textarea1" name="description" 
                value={this.state.description} 
                onChange={this.onChangeHandler}></textarea>
                
                <p>{this.state.description}</p>
            </div>
        );
    }
}

export default Textarea;