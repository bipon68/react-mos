import React, { Component } from 'react';
import Counters from './counters';

/**
 *  Specifying Children
    Embedding Expressions
    js destructuring
    React.Fragment
    Setting Attributes
    Refactor
    Rendering Lists
    Conditional Rendering
    Handling Events
    Passing Event Arguments
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
    constructor(){
        super();
        console.log('constructor ', this)
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    handleIncrement = (product) => {
        console.log(product)
        this.setState({
            count: this.state.count + 1
        })
        console.log('Increment Clicked', this.state.count)
    }
    doHandleIncrement = () => {
        this.handleIncrement({id: 1})
    }

    render() { 
        // React.createElement('h1')
        // let classes = this.getBadgeClasses();

        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        
        return (
            <React.Fragment>
                <div>
                    <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    {/* <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">InCrement</button> */
                    }
                    <button onClick={() => this.handleIncrement ({id: 1})} className="btn btn-secondary btn-sm">InCrement</button>
                </div>
                {/*
                    <div>
                    {this.state.tags.length === 0 && "Please create a new tag"}
                   {this.renderTags()} 
                </div> */
                }
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