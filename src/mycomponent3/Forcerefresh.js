import React, {Component} from 'react';

class Forcerefresh extends Component{

    constructor(){
        super();
        this.refreshNow = this.refreshNow.bind(this);
    }

    refreshNow = () => {
        this.forceUpdate();
    }

    render(){
        return (
            <div>
                <h4>{Math.random().toFixed(5)}</h4>
                <button onClick={this.refreshNow}>refresh</button>
            </div>
        );
    }
}
export default Forcerefresh;