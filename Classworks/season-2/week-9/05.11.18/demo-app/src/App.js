import React, { Component } from 'react';
import './App.css';
import {api as API} from './configs/api';
import Photos from './components/Photos';

const url = API.baseURL + API.photos;
class App extends Component {
  state = {
    data: null
  }
  componentDidMount(){
    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({data}))
      .catch(err => err.message)
  }
  render() {
    return (
      <div className="App">
      {
        (!!this.state.data && url.endsWith(API.photos)) && <Photos length={5} data={this.state.data}/>
      }
      </div>
    )
  }
}

export default App;
