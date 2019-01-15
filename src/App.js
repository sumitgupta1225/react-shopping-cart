import React, { Component,Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import ShoppingCart from './components/ShoppingCart'
import Nav from './components/Nav'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Nav/>
          <div className='container'>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/shopping-cart' component={ShoppingCart}/>
              <Route path='/contact-us' component={ContactUs}/> 
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Fragment>          
      </BrowserRouter>
    );
  }
}

export default App;
/*
<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React.
          </a>
        </header>*/