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
            ],
            // selected : this.state.planets[0],
            selected : 'Earth',
        }
    }

    buildOptions() {
        var arr = [];
        var size = this.state.planets.length;
        for (let i = 0; i < size; i++) {
            arr.push(
            <option key={i} value={this.state.planets[i]}>
                {this.state.planets[i]}
            </option>
            );
        }
        return arr; 
    }

    onChangeHandler = (event) => {
        var selectedValue = event.target.value;
        this.setState(
            {
                selected : selectedValue,
            }
        );
    }



    render() {
        return (
            <div>
                <select id="mySelect" 
                name="mySelect"
                onChange={this.onChangeHandler}
                value={this.state.selected}
                >
                    {this.buildOptions()}
                </select>
                <p>{this.state.show}</p>
            </div>
        );
    }
}

export default Select;