import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const alertMe = (param) => {
    alert(`this is ${param}`)
}

const arrowFunction = () => {
    return (
        <button className="btn btn-info m-5" onClick={alertMe.bind(this, "PARAMETER!")}>my-btn</button>
    );
}

export default arrowFunction;