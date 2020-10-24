import React, {Component} from 'react';

class Welcome3 extends Component{

    constructor(){
        super()

        var stateObj = { //object
            name:'Arif Faysal',
            age : '26',
            skills: [ //array in an object
                'php', 'js', 'react', 'c#'
            ],
            experience: {
                exp1 : 'Azmat Group',
                exp2 : 'Next Page Technology',
                duration:[  //array in an object>in an object
                    '1Yrs','2Yrs',
                ]

            }
        }
        this.state = stateObj;
    }

    render(){
        return (
            <div>
                {/* <small style={{ color: "grey" }}>States</small> */}
                <span className="badge badge-pill badge-secondary m-2">States</span>
                <h4>Name : {this.state.name}</h4>
                <h5>Age : {this.state.age}</h5>
                <h4>Skills: {this.state.skills[2]}</h4>
                <h5>Experience: </h5>
                <h5>{this.state.experience.exp1} -{this.state.experience.duration[0]} </h5>
                <h5>{this.state.experience.exp2} -{this.state.experience.duration[1]}</h5>
            </div>
        );
    }
}

export default Welcome3;