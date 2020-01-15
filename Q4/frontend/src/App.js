import React, { Component } from 'react'
import './App.scss'
import Chat from './Chat'
import Hest from './Hest'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <div className="navbar">
            <Link to="/chat" className="nav-btn">Chat</Link>
            <Link to="/hest" className="nav-btn">Hest</Link>
          </div>
        </header>
        <div>
          <Switch>
            <Route path="/chat" component={Chat}/>
            <Route path ="/hest" component={Hest}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    )
  }
}

export default App
