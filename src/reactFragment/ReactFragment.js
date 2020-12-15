import React, { Component, Fragment } from 'react';

class ReactFragment extends Component {
    render() {
        return (
            <Fragment>
                <h3>I'm child 1 inside Fragment</h3>
                <h3>I'm child 2 inside Fragment</h3>
                <h3>I'm child 3 inside Fragment</h3>
            </Fragment>
            
            // when we wrap multiple child in div in return statement
            // React produces extra node. So we can use Fragment instead of div

        );
    }
}

export default ReactFragment;