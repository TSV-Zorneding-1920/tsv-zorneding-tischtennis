const activeEnv = process.env.ACTIVE_ENV | "development";
require("dotenv").config({
  path: `.env.${activeEnv}`
});
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://angry-galileo-a8762c.netlify.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const title = `TSV Zorneding 1920 e.V. - Abteilung Tischtennis`;
module.exports = {
  siteMetadata: {
    title,
    section: `Abteilung Tischtennis`,
    description: `Die Tischtennis Abteilung des TSV Zorneding 1920 e.V. besteht aus ca. 70 Mitgliedern, davon etwa 30 Jugendliche und Kinder. Das Aushängeschild ist die 1. Damenmannschaft welche aktuell in der Oberliga Bayern spielt. Auf dieser Seite Informationen über Trainingszeiten, Veranstaltungen und unseren Mannschaften.`,
    author: `TSV Zorneding 1920 e.V.`,
    social: {
      facebook: `https://www.facebook.com/TSVZornedingTischtennis`,
      instagram: ``,
      twitter: ``,
      youtube: ``
    },
    siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-theme-tsv-zorneding`,
      options: { NETLIFY_ENV, title }
    }
  ]
};
