let initLangs = {};
let fallBackLang = null;

const load = (languages, defaultLanguage) => {
  initLangs = languages;
  fallBackLang = defaultLanguage;
};

const useT = () => [t];
const t = (key, lang) => {
  if(lang) {
    return initLangs[lang].hasOwnProperty(key) ? initLangs[lang][key] : key;
  }

  return initLangs[fallBackLang]
}

module.exports = {
  load,
  useT
};

module.exports.load = load;
module.exports.useT = useT;
