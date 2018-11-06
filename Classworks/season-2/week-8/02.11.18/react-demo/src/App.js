import React, { Component } from 'react';
import logo from './logo.svg';
import {username, lastname} from './Play';
import person from './Play';
import './App.css';
import Counter from './Counter'

function SaySomething(props){
  return <p>{props.text}</p>
}

const styles = {color: 'red', padding: '30px', border: '2px dashed black'}
const FooComponent = (props) => {
  return (
    <div style={{...styles}}>
      <p>{props.text}</p>
    </div>
  )
}

class App extends Component{
  randomText(){
    return `${person.username} ${person.lastname}`;
  }
  render(){
    return (
      <div>
        <h1>Hail Satan</h1>
        <h2>{this.randomText()}</h2>
        <SaySomething text="Kill The Masters" />
        <FooComponent text="Alpha Husky" />
        <hr/>

        <div style={{...styles}}>
          <Counter/>
        </div>
      </div>
    )
  }
}

export default App;
