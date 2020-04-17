module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: "DesignLens",
    author: "Haijing Liu",
=======
    title: "Designlens",
    author: "Haijing Oceanstill",
>>>>>>> 343c1ca407e73e5560435b649a8b6147c49fb475
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
