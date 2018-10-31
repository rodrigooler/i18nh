import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import i18nh, { useT } from 'i18nh'

const languages = {
  en: {
    edit: 'Edit',
    saveToReload: 'and save to reload',
    message: 'Translated using defaultLanguage configuration'
  },
  pt: {
    edit: 'Altere',
    saveToReload: 'e salve para atualizar',
    message: 'Traduzido usando o idioma informado.'
  }
}

class App extends Component {
  constructor () {
    super ();
    i18nh({
      languages, 
      defaultLanguage: 'en'
    });
  }

  render() {
    const [t] = useT();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {t('edit', 'pt')} <code>src/App.js</code> {t('saveToReload', 'pt')}.
          </p>
          <p>
            {t('message')}
          </p>
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
