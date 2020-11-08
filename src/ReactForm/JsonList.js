import { data } from 'jquery';
import React, { Component } from 'react';

class JsonList extends Component {
    
    render() {

        const josnObj = [
            {
                city : 'Dhaka',
                zip : '6000'
            },
            {
                city : 'Chittagon',
                zip : '8000'
            },   
            {
                city : 'Sylhet',
                zip : '6000'
            },   
        ];

        const dataItems = josnObj.map((item) => {
            return <option value={item.zip}>{item.city}</option>
        });

        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default JsonList;