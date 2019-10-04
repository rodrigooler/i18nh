

let initLangs = {}
let fallBackLang = null
let debug = false

const i18nh = ({ languages, defaultLanguage, activeDebug }) => {
  initLangs = languages
  fallBackLang = defaultLanguage
  debug = activeDebug

  if (activeDebug) {
    console.info('Debug: Translations uploaded successfully!')
  }
}

const getValueByLang = (key, lang) =>
  initLangs[lang] && initLangs[lang].hasOwnProperty(key)
    ? initLangs[lang][key]
    : key

const t = lang => key => {
  const result = lang ? getValueByLang(key, lang) : initLangs[fallBackLang][key]

  if (debug) {
    console.info(`Debug: Translate ${key}, ${result}`)
  }

  return result
}

const useT = (lang) => [t(lang)]

module.exports = i18nh
module.exports.useT = useT