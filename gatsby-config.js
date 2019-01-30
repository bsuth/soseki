module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-mdx',
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve('./src/components/Layout')
			}
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text`,
        path: `${__dirname}/src/text/`,
      },
    },
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Soseki Project",
        short_name: "Soseki",
        start_url: "/",
        background_color: "#181818",
        theme_color: "#e8e8e8",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
				//icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
		// This must be placed after the manifest plugin
		'gatsby-plugin-offline',
	]
}
