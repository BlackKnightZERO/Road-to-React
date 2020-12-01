import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class mynavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* <Link to="/">Home</Link>
                        <Link to="/page1">Page1</Link>
                        <Link to="/page2">Page2</Link>
                        <Link to="/page3">Page3</Link> */}

                        {/* NavLink Can Handle ActiveStyle & Exact      */}
                        <NavLink exact activeStyle={{ color:"green" }} to="/">Home</NavLink>
                        <NavLink exact activeStyle={{ color:"green" }} to="/page1">Page1</NavLink>
                        <NavLink exact activeStyle={{ color:"green" }} to="/page2">Page2</NavLink>
                        <NavLink exact activeStyle={{ color:"green" }} to="/page3">Page3</NavLink>

                        <NavLink exact activeStyle={{ color:"red" }} to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default mynavigation;