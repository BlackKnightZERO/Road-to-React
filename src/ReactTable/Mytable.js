import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import axios from 'axios';

class Mytable extends Component {

    //api data
    constructor(){
        super();
        this.state = {
            tableData : [],
        }
    }    
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log(response);
                this.setState({
                    tableData : response.data,
                });
            })
            .catch(error => {
                alert(
                    'Something went wrong!'
                ); 
            });
    }

    render() {
        //local data
        const TableData = [
            {
                name:"Arif",
                age:"26"
            },
            {
                name:"Arif",
                age:"26"
            },
            {
                name:"Arif",
                age:"26"
            },
            {
                name:"Arif",
                age:"26"
            },
            {
                name:"Arif",
                age:"26"
            },
            {
                name:"Arif",
                age:"26"
            },
            {
                name:"Arif",
                age:"26"
            },
        ];

        // const col = [
        //     {
        //         Header:'Name',
        //         accessor:'name',
        //     },
        //     {
        //         Header:'Age',
        //         accessor:'age',
        //     },
        // ];
        const col = [
            {
                Header:'Country',
                accessor:'name',
            },
            {
                Header:'Capital',
                accessor:'capital',
            },
            {
                Header:'Population',
                accessor:'population',
            },
        ];

        return (
            <div>
                <ReactTable
                // data={TableData}
                data={this.state.tableData}
                columns={col}
                defaultPageSize={5}
                pageSizeOptions={[5,10,25,50]}
                ></ReactTable>
            </div>
        );
    }
}

export default Mytable;