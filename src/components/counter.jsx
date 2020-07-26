import React, { Component } from "react";
class Counter extends Component {
    state = { 
        count:this.props.value,
        tags:[]
    };
    styles = {
        fontSize: '10px',
        fontWeight: 'bold'
    }
    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no Tags!</p>
        return <ul>
        { this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
            </ul>;
    }
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
        
    // }
    handleIncrement =(product) =>{
        console.log('increment clicked', this.state.count);
        this.setState({ count: this.state.count +1})
    }

    // doHandleIncrement = () => {
    //     this.handleIncrement({id:1})
    // }
  render() {

    return (
      <div>
          {/* { this.state.tags.length === 0 && "Please creta new tag"}
        {this.renderTags()} */}
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button onClick={ () => this.handleIncrement({id:1})}>Increment</button>
      </div>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
