import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            curNumber: 0,

        }
        // this.onIncrement = this.onIncrement.bind(this);
        // this.onDicrement = this.onDicrement.bind(this);
    }

    // onIncrement(){
    //     this.setState( state => ({curNumber: state.curNumber + 1}) )
    // }

    // onDicrement(){
    //     this.setState( state => ({curNumber: state.curNumber - 1}) )
    // }

    onIncrement = () => {
        this.setState( state => ({curNumber: state.curNumber + 1}) )
    }

    onDicrement = () => {
        this.setState( state => ({curNumber: state.curNumber - 1}) )
    }

    render(){
        return (
            <div>   
                <p>Counter - {this.state.curNumber} </p>
                <button onClick={this.onIncrement}type="button">Increment</button>
                <button onClick={this.onDicrement}type="button">Dicrement</button>
            </div>
        )
    }
}

export default Counter;