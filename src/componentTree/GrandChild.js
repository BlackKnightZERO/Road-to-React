import React, { Component } from 'react';
import GrandGrandChild from './GrandGrandChild';

class GrandChild extends Component {
    render() {
        return (
            <div>
                <GrandGrandChild></GrandGrandChild>
            </div>
        );
    }
}

export default GrandChild;