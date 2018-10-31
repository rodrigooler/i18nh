const i18nh = require("../../i18nh");
const { useT } = require("../../i18nh");

const pt = {
  hello: "Olá",
  love: "Amor",
  thanks: "Obrigado"
};

const us = {
  hello: "Hello",
  love: "Love",
  thanks: "Thanks"
};

i18nh({
  pt,
  us
});

const [t] = useT();

console.log(t("hello", "pt"));
console.log(t("thanks", "us"));
console.log(t("love", "us"));
console.log(t("well", "us"));
