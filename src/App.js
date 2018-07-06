import React, { Component } from 'react'
import title from './title.svg'
import mainimage from './mainimage.png'
import './App.css'
import Search from './Search'


class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={title}  alt="title" />
        <div className="MainImage">
        <img src={mainimage}  alt="main" />
        </div>
        <p className="App-intro">
        Type below to find out about your favourite Star Wars Character.
        </p>
        <Search />
      </div>
    );
  }
}

export default App
