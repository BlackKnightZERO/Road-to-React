import React, {Component} from 'react';

class Hello3 extends Component{

    constructor(){
        super()

        this.state = {
            name:'Arif',
        }
    }

    updateName = (param) => {
        if(this.state.name == 'Arif Faysal'){
            var updateData = {
                name : 'Arif',
            }
        } else {
            var updateData = {
                name : param,
            }
        }
        this.setState(updateData)
    }

    render(){
        return (
            <div>
                <h4>Name : {this.state.name}</h4>
                <button onClick={this.updateName.bind(this, "Arif Faysal")}>change state</button>
            </div>
        );
    }
}

export default Hello3;