import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

const BlogPost  =  ({data,children}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      {children}
    </Layout>
  )
}

export const blogquery = graphql`
 query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      hero_image_alt
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`;
export const  Head =({data}) => <Seo title={data.mdx.frontmatter.title}/>

export default BlogPost