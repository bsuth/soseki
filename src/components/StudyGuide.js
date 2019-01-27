// React
import React from 'react'

// Gatsby
import { graphql } from 'gatsby'
import MDXRenderer from "gatsby-mdx/mdx-renderer";

// Styles
import './StudyGuide.scss'


/////////// STUDY GUIDE ///////////

// This component is used to render all of the
// study guide pages from mdx files.

export default ({ data: { mdx } }) => {
	return(
		<div className="text studyguide">
			<h1 className="study_guide_title">
				{ mdx.frontmatter.title }
			</h1>	
			<hr style={{ width: '45px', margin: 'auto' }} />
			<MDXRenderer>{ mdx.code.body }</MDXRenderer>
		</div>
	);
}

// Query the document to be rendered.
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
