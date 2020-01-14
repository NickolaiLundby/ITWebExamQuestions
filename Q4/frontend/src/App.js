import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Chat from './Chat'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <ul>
              <Link to="/chat" className="Btn-test">Chat</Link>
              <Link to="/test" className="Btn-test">Test</Link>
            </ul>
          </header>
        </div>
        <Switch>
          <Route path="/chat" component={Chat}/>
          <Route path ="/test">
            <p>Hej fra test</p>
          </Route>
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App
