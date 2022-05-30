# DEPRECATED because the initial idea was to have an alternative to using i18n with hooks, but now i18next is indicated and recommended! 

https://react.i18next.com/

## Install

## Support

- [x] NodeJS
- [x] React
- [x] NextJS
- [x] Create React App 1.0
- [x] Create React App 2.0
- [x] React Native
- [x] PhoneGap / Cordova
- [x] Angular
- [x] Vue
- [x] NativeScript

#### NPM
```bash
npm install i18nh --save
```

#### YARN
```bash
yarn add i18nh
```

## Use

To use it is simple just look at the steps below

```js
import i18nh, { useT } from 'i18nh'

// Create a language object containing the 
// translations as in the example below
const languages = {
    en: {
        hello: 'Hello',
        about: 'About',
        goodMorning: 'Good Morning',
    },
    pt: {
        hello: 'Olá',
        about: 'Sobre',
        goodMorning: 'Bom Dia',
    },
}

// i18nh load the language object containing 
// the translations and also the default language argument
i18nh({
    languages, 
    defaultLanguage: 'en'
});

const [t] = useT();

console.log(t('hello')) 
// Hello
console.log(t('about')) 
// About
console.log(t('goodMorning')) 
// Good Morning

console.log(t('hello', 'pt')) 
// Olá
console.log(t('about', 'pt')) 
// Sobre
console.log(t('goodMorning', 'pt')) 
// Bom Dia
```
