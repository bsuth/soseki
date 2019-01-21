const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
	if(node.internal.type === 'Mdx') {
		const slug = createFilePath({ node, getNode });
		actions.createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
	}
}

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  return graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `
	).then(result => {
			result.data.allMdx.edges.forEach(({ node }) => {
			actions.createPage({
				path: node.fields.slug,
				component: path.resolve('./src/components/StudyGuide.js'),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					// 
					// id is passed for the component to query
					// the data attached to this node.
					id: node.id
				},
			})
		})
	})
}
