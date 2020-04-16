module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: "DesignLens",
=======
    title: "Designlens",
>>>>>>> 6594ec53e34b911496e5750c8754ba2bb46bdbc4
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
        icon: 'src/assets/images/designlens.png', // This path is relative to the root of the site. new icon to be add
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
