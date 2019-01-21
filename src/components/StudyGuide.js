// React
import React from 'react'

// Gatsby
import { graphql } from 'gatsby'
import MDXRenderer from "gatsby-mdx/mdx-renderer";

// Styles
import './StudyGuide.scss'


/////////// STUDY GUIDE ///////////

export default ({ data: { mdx } }) => {
	return(
		<div class="text">
			<h2 className="study_guide_title">
				{ mdx.frontmatter.title }
			</h2>	
			<hr style={{ width: '45px', margin: 'auto' }} />
			<MDXRenderer>{ mdx.code.body }</MDXRenderer>
		</div>
	);
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

/////////// STUDY GUIDE ///////////
