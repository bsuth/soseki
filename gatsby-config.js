module.exports = {
	plugins: [
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
	]
}
