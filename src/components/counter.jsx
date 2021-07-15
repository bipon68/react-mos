import React, { Component } from 'react';

/**
 *  Specifying Children
    Embedding Expressions
    js destructuring
    React.Fragment
    Setting Attributes
 */

class Counter extends Component {
    state = {
        count: 0
    }
    render() { 
        // React.createElement('h1')
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button className="button-info">InCrement</button>
            </React.Fragment>
        );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
        // return count === 0 ? <h2>Zero</h2> : count; // jsx expression support also
    }
}
 
export default Counter;