import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
		<Layout pageTitle='Home Page'>
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
				alt='Clifford, a reddish-brown ptbull'
				src='../images/images.jpg'
			/>
		</Layout>
	);
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component 

export default IndexPage