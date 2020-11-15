import React, { Component } from 'react';
import axios from 'axios';

class Read extends Component {

    constructor(){
        super();
        this.state = {
            mydata:[]
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            console.log(`STATUS: ${response.status}`);
            // console.log(response.data);
            this.setState({
                mydata:response.data,
            })

        })
        .catch(error => {
            console.log(`STATUS: ${error.status}`);
            console.log(error);
        })
    }

    render() {

        const myList = this.state.mydata;
        const countryNames = myList.map((item)=>{
            return <li>{item.name}</li>
        })

        return (
            <div>
                <ol>
                    {countryNames}
                </ol>
            </div>
        );
    }
}

export default Read;