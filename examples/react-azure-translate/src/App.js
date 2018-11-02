import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import config from 'dotenv';
import Async from 'react-promise';
import {AzureTranslate} from 'i18nh';

config.config();

const translations = {
  message: "Translated using Microsoft Azure"
}

class App extends Component {
  render() {
    const translationEngine = new AzureTranslate(process.env.REACT_APP_AZURE_API_KEY, false);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            
          <Async promise={translationEngine.translate({text: translations.message, from: 'en', to: 'pt'})} then={val => <p>{ val }</p>} />
          <Async promise={translationEngine.translate({text: "Edit <code>src/App.js</code> and save to reload.", from: 'en', to: 'pt'})} then={val => <p>{val}</p>}/>
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
