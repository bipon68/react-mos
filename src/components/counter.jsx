import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        // React.createElement('h1')
        return (
            <React.Fragment>
                <h1>Hello World Man</h1>
                <button className="button-info">InCrement</button>
            </React.Fragment>
        );
    }
}
 
export default Counter;