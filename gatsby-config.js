'use strict';

module.exports = {
  pathPrefix: '/website',
  siteMetadata: {
    title: 'Bleu ciel fermeture',
    description: 'Spécialiste de stores, enseignes fermetures et aménagements de terrasses',
    keywords: 'stores, fermetures, terrasses',
    siteUrl: 'https://ciel-bleu-fermeture.netlify.com',
    contact: {
      email: 'john@doe.com',
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
  ]
};
