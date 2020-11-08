import { timers } from 'jquery';
import React, { Component } from 'react';

class List extends Component {

    constructor(){
        super();
        this.state = {
            planets : [
                'Earth',
                'Saturn',
                'Venus',
                'Eurenus',
                'Pluto',
            ],
            numbers : [
                1,2,3,4,5,6,7,8,
            ],
        }
    }

    options = (data) => {
        return <option value={data}>{data}</option>;
    }
    optionNumbers = (data) => {
        return <option value={data * 2}>{data * 2}</option>;
    }

    render() {

        const planets = [
            'Earth',
            'Saturn',
            'Venus',
            'Eurenus',
            'Pluto',
        ];
        //one way
        const listItems = planets.map((item) => {
                return <li>{item}</li>
            });
        //2nd way    
        const optionItems = this.state.planets.map(this.options);
        //calculation
        const optionNumbers = this.state.numbers.map(this.optionNumbers);

        return (
            <div>
                <ol>
                    {listItems}
                </ol>
                <select>
                    {optionItems}
                </select>
                <select>
                    {optionNumbers}
                </select>
            </div>
        );
    }
}

export default List;