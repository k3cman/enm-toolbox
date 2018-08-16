import React, { Component } from 'react';
import './App.css';
import Loading from './components/Loading';
import Landing from './components/Landing';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  state={
    loadingScreen: false,
  }
  loadingTimeout = () => {
    setTimeout(() => this.setState({loadingScreen:true}), 4000);
  }
  componentDidMount(){
    this.loadingTimeout();
  }
  render() {
    return(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
  }
}

export default App;
