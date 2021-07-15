module.exports = {
  pathPrefix: "/my-site",
  siteMetadata: {
    title: "CV SITE RAFAL GULEWSKI",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `pl`],
        transKeepBasicHtmlNodesFor: ['br', 'b'],
        defaultLanguage: `en`,
        siteUrl: `https://gulewskr.github.io`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false 
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: []
      }
    }
    ],
};
