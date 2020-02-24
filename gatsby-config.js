const activeEnv = process.env.ACTIVE_ENV | "development";
require("dotenv").config({
  path: `.env.${activeEnv}`
});
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://tischtennis.tsv-zorending.de",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const fs = require("fs");
let settings = JSON.parse(fs.readFileSync("src/data/settings.json"));

const title = `TSV Zorneding 1920 e.V. - Abteilung Tischtennis`;
module.exports = {
  siteMetadata: {
    ...settings,
    siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-theme-tsv-zorneding`,
      options: {
        NETLIFY_ENV,
        title,
        NETLIFY_SITE_URL
      }
    }
  ]
};
