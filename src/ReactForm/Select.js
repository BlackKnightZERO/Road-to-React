import React, { Component } from 'react';

class Select extends Component {

    constructor(){
        super();
        this.state = {
            planets : [
                'Mars',
                'Saturn',
                'Earth',
                'Jupiter',
            ]
        }
    }

    buildOptions() {

        var arr = [];

        var size = this.state.planets.length;

        for (let i = 0; i < size; i++) {
            arr.push(<option key={i} value={this.state.planets[i]}>{this.state.planets[i]}</option>)
        }

        return arr; 
    }



    render() {
        return (
            <div>
                <select id="mySelect" 
                name="mySelect"
                value="Mars">
                    {this.buildOptions()}
                    {/* <option>Mars</option>
                    <option>Saturn</option>
                    <option>Earth</option>
                    <option>Jupiter</option> */}
                </select>
            </div>
        );
    }
}

export default Select;