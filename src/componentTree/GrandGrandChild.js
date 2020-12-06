import React, { Component } from 'react';

class GrandGrandChild extends Component {
    render() {
        return (
            <div>
                <h3>Data From Grand Grand Child !</h3>
                <h5>{this.props.dataOfGrandChild}</h5>
            </div>
        );
    }
}

export default GrandGrandChild;