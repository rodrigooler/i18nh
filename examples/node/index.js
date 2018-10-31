const i18nh = require('../..')
const { useT } = require('../..')

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

i18nh({
    languages, 
    defaultLanguage: 'en'
});

const [t] = useT();

console.log(t('hello')) 
console.log(t('about')) 
console.log(t('goodMorning')) 

console.log(t('hello', 'pt')) 
console.log(t('about', 'pt')) 
console.log(t('goodMorning', 'pt')) 