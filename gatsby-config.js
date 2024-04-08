const path = require('path');

module.exports = {
    //pathPrefix: `/my-site`,
    siteMetadata: {
        title: 'RAFAL GULEWSKI',
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/component'),
                    '@data': path.resolve(__dirname, 'src/data'),
                    '@icons': path.resolve(__dirname, 'src/images/icons'),
                    '@images': path.resolve(__dirname, 'src/images'),
                    '@pages': path.resolve(__dirname, 'src/pages'),
                    '@styles': path.resolve(__dirname, 'src/styles'),
                    '@scripts': path.resolve(__dirname, 'src/scripts'),
                },
                extensions: ['js', 'css', 'png', 'jpg', 'svg'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/locales`,
                name: `locale`,
            },
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`,
                languages: [`en`, `pl`],
                transKeepBasicHtmlNodesFor: ['br', 'b'],
                defaultLanguage: `en`,
                //siteUrl: `https://gulewskr.github.io/my-site/`,
                siteUrl: `http://localhost:8000/`,
                i18nextOptions: {
                    defaultNS: 'translations',
                    nsSeparator: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.svg$/,
                },
            },
        },
    ],
};
