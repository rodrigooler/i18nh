import App, { Container } from "next/app";
import React from "react";
import i18nh from "i18nh";

const languages = {
  en: {
    welcomeNext: "Welcome to Next!",
    getStarted: "To get started, edit ",
    saveReload: "and save to reload."
  },
  pt: {
    welcomeNext: "Bem vindo ao Next!",
    getStarted: "Para começar, edite ",
    saveReload: "e salve para recarregar."
  },
  ch: {
    welcomeNext: "歡迎來到 Next!",
    getStarted: "要開始，請編輯 ",
    saveReload: "並保存以重新加載。"
  }
};

i18nh({ languages, defaultLanguage: "en", activeDebug: false });

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
