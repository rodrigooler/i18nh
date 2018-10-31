import React from "react";
import { useT } from "i18nh";

const [t] = useT();

const Home = () => (
  <div>
    <div className="hero">
      <h1 className="title">{t("welcomeNext")}</h1>
      <p className="description">
        {t("getStarted")}
        <code>pages/index.js</code> {t("saveReload")}
      </p>
    </div>

    <div className="hero">
      <h1 className="title">{t("welcomeNext", "pt")}</h1>
      <p className="description">
        {t("getStarted", "pt")}
        <code>pages/index.js</code> {t("saveReload", "pt")}
      </p>
    </div>

    <div className="hero">
      <h1 className="title">{t("welcomeNext", "ch")}</h1>
      <p className="description">
        {t("getStarted", "ch")}
        <code>pages/index.js</code> {t("saveReload", "ch")}
      </p>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
