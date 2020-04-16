module.exports = {
  siteMetadata: {
    title: "DesignLens",
    author: "Haijing Liu",
    description: "Haijing Portfolio 2020"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FAF9FD',
        theme_color: '#ED207C',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site. new icon to be add
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
