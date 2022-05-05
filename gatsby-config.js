module.exports = {
  siteMetadata: {
    title: `Among Creatives`,
    description: `Product & lifestyle photographer for sustainable brands. Create fresh, minimalistic and clear visuals of your products to attract the right audience`,
    author: `Nass`,
    siteUrl: `https://amongcreatives.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Among-creatives`,
        short_name: `AC`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/among-creatives-icon.png`, // This path is relative to the root of the site.
      },
    },{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cormorant\:200,300,300i,400,500,600`,
          `Forum\:200,400,500,600`
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
