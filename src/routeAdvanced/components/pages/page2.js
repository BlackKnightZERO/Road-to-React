import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class page2 extends Component {

    constructor(){
        super();
        this.state = {
            passId : 10,
        }
    }

    render() {

        var url = `/page3/${this.state.passId}`;
        return (
            <div>
                <h1>page2</h1>
                <button>
                    <Link to={url}>Pass Id</Link>
                </button>
            </div>
        );
    }
}

export default page2;