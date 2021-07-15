import React, { Component } from 'react';

/**
 *  Specifying Children
    Embedding Expressions
    js destructuring
    React.Fragment
    Setting Attributes
    Refactor
    Rendering Lists
    Conditional Rendering
    <img src={this.state.imageUrl} alt=""/>
    <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
    <span style={{fontSize: 20}} className="badge badge-primary m-2">{this.formatCount()}</span>
    <span  className="badge badge-primary m-2">{this.formatCount()}</span>
 */

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag 1', 'tag 2', 'tag 3']
    };
    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() { 
        // React.createElement('h1')
        // let classes = this.getBadgeClasses();
        return (
            <React.Fragment>
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">InCrement</button>
                <div>
                   {this.renderTags()} 
                </div>
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
        // return count === 0 ? <h2>Zero</h2> : count; // jsx expression support also
    }
}
 
export default Counter;