import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Son extends Component {
    render() {
        return (
            <div>
                <GrandChild></GrandChild>
            </div>
        );
    }
}

export default Son;