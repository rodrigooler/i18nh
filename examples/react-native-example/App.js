import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import i18nh, { useT } from 'i18nh'

const languages = {
  en: {
    warning: 'Warning, translating from default language',
    message: 'Random Stuff'
  },
  pt: {
    warning: 'Você definiu o idioma!',
    message: 'Traduzido usando o idioma passado por parâmetro'
  }
}

export default class App extends React.Component {
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
        <Text>{t('warning')}</Text>
        <Text>{t('message', 'pt')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
