import React from "react";
import {graphql, Link} from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";

import SiteDescription from "../components/SiteDescription";
import Layout from "../components/layout";
import {rhythm} from "../utils/typography";
import HighlightArticles from "../components/HighlightArticles";
import SmallPreview from "../components/SmallPreview";
import AllArticles from "../components/AllArticles";
import MeetTheTeam from "../components/MeetTheTeam";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
        this,
        'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.pages.edges')
    const bios = get(this, 'props.data.bios.edges')

    return (
        <Layout location={this.props.location} title={siteTitle}>
          <HighlightArticles { ...{posts}}/>
          <Helmet
              htmlAttributes={{lang: 'en'}}
              meta={[{name: 'description', content: siteDescription}]}
              title={siteTitle}
          />
          <SiteDescription description={siteDescription}/>
          <AllArticles >
            {posts.map(({node}) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                    <div key={node.fields.slug}>
                      <SmallPreview {...{
                        post: node
                      }} />
                    </div>
              )
            })}
          </AllArticles>
          <MeetTheTeam {...{bios}} />
        </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query {
    site {
      siteMetadata {
        title
        description
      }
    }
    pages:allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
      filter: {fileAbsolutePath: {regex: "/(pages)/.*\\.md$/"}}) {
      edges {
        node {
          excerpt
          timeToRead
          wordCount {
            paragraphs
            sentences
            words
          }
          fields {
            slug
          }
          frontmatter {
            title
            date
            image {
              publicURL
            }
            test
           }
        }
      }
    }
  ...bios
  }
`
