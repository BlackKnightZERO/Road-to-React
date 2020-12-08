import React, { Component } from 'react';
import { GrandGrandChildConsumer } from './MyContext';

class GrandGrandChild extends Component {
    render() {
        return (
            <div>
                <h3>
                    <GrandGrandChildConsumer>
                        {
                            msg => {
                                return msg;
                            }
                        }
                    </GrandGrandChildConsumer>
                </h3>
            </div>
        );
    }
}

export default GrandGrandChild;