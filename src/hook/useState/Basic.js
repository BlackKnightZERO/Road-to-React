import React from 'react';
import {useState} from 'react';

const Basic = () => {

    const [value, setValue] = useState({
        planet: 'Earth'
    });

    const changeHandle = () => {
        setValue({
            planet: 'Jupiter'
        });
    }

    return (
        <div>
            <h3>{value.planet}</h3>
            <button onClick={changeHandle}>change</button>
        </div>
    );
};

export default Basic;