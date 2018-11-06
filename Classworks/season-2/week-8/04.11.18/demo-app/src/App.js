import React, { Component } from 'react';
import './App.css';
import User from './User';

const FETCHURL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    jsonData: null
  }

  componentDidMount(){
    fetch(FETCHURL)
              .then(res => res.json())
              .then(users => this.setState( {jsonData:users}))
              .then(err => console.log(err))
  }
  render() {
    let person = [
      {
          name: 'Vaxo',
          age: 23,
          id: 1,
          isActive: true,
      },
      {
          name: 'Grigoli',
          age: 20,
          id: 2,
          isActive: false,
      },
      {
          name: 'Mamuka',
          age: 20,
          id: 3,
          isActive: false,
      },
      {
          name: 'Salome',
          age: 27,
          id: 4,
          isActive: true,
      },
  ]

  const showList = true;

  // if(!showList){
  //   return null;
  // }
    return (
      <div className="App">
      <h2>Using Array.prototype.map()</h2>
      {
        showList && (
          <ul>
            {person.map( person => <li key={person.id}>{person.name} {person.age}</li>)}
          </ul>
    )
      }
        <ul>
        <h2>Using Array.prototype.filter()</h2>
          {person
                  .filter(person => person.isActive)
                  .map( person => <li key ={person.id}>{person.name} {person.age}</li>)
          }
        </ul>
        
      <h2>FETCH URL</h2>
      

      <User jsonData = {this.state.jsonData} />

      </div>
    )
  }
}


export default App;
