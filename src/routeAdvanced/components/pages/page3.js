import React, { Component } from 'react';

class page3 extends Component {

    //to match the url
    constructor({match}){
        super();
        this.state = {
            id : match.params.id,
        }
    }

    render() {
        return (
            <div>
                <h1>page3</h1>
                <h1>{this.state.id}</h1>
            </div>
        );
    }
}

export default page3;