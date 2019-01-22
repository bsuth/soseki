module.exports = {
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-mdx',
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text`,
        path: `${__dirname}/src/text/`,
      },
    },
	]
}
