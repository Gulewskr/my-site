module.exports = {
  //pathPrefix: "/my-site",
  siteMetadata: {
    title: "RAFAL GULEWSKI",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
          //siteUrl: `https://gulewskr.github.io/my-site`,
          siteUrl: `http://localhost:8000/`,
          i18nextOptions: {
            defaultNS: 'translations',
            nsSeparator: false
          },
        }
      }
    ],
};
