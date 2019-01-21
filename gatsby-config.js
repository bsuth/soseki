module.exports = {
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-page-transitions',
		'gatsby-mdx',
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/text/`,
      },
    },
	]
}
