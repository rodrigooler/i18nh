/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import i18nh, { useT } from 'i18nh'

const languages = {
  en: {
    message: 'Translated using defaultLanguage configuration'
  },
  pt: {
    message: 'Traduzido usando o idioma informado.'
  }
}

export default class App extends Component {
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
      <View style={styles.container}>
        <Text style={styles.welcome}>t('message')</Text>
        <Text style={styles.instructions}>t('message', 'pt')</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
