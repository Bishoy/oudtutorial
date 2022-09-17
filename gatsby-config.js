/** @type {import('gatsby').GatsbyConfig} */

const siteUrl = `https://www.oudtutorial.com`; 

module.exports = {
  siteMetadata: {
    title: `Oud Tutorial`,
    siteUrl
  },
  plugins: [`gatsby-plugin-react-helmet`,"gatsby-plugin-netlify-cms", "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-ZHC47MEWG2"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/locales`,
      name: `locale`
    }
  },
  {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
      languages: [`en`, `ar`],
      defaultLanguage: `en`,
      // if you are using Helmet, you must include siteUrl, and make sure you add http:https
      siteUrl:'http://localhost:8000/',
      // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
      trailingSlash: 'always',
      // you can pass any i18next options
      i18nextOptions: {
        interpolation: {
          escapeValue: false // not needed for react as it escapes by default
        },
        keySeparator: false,
        nsSeparator: false
      },
      pages: [
        {
          matchPath: '/:lang?/blog/:uid',
          getLanguageFromPath: true,
          excludeLanguages: ['es']
        },
        {
          matchPath: '/preview',
          languages: ['en']
        }
      ]
    }
  }]
};