let initLangs = {};
let fallBackLang = null;

const i18nh = (languages, defaultLanguage) => {
  initLangs = languages;
  fallBackLang = defaultLanguage;
};

const useT = () => [t];

const getValueByLang = key =>
  initLangs[lang].hasOwnProperty(key) ? initLangs[lang][key] : key;

const t = (key, lang) => (lang ? getValueByLang(key) : initLangs[fallBackLang]);

module.exports = i18nh;
module.exports.useT = useT;
