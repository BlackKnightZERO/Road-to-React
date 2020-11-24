import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class mynavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/page1">Page1</Link>
                        <Link to="/page2">Page2</Link>
                        <Link to="/page3">Page3</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default mynavigation;