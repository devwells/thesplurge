import React from "react";
import {graphql} from "gatsby";
import {rhythm} from "../utils/typography";
import Bio from "./Bio";
import palette from "../utils/palette"

const MeetTheTeam = ({bios}) => {
  return (
      <div style={{
        backgroundColor: palette.skyBlue,
        padding: rhythm(1)
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: 0
        }}>Meet the Team </h2>
        <div style={{
          display: "flex",
          margin: "auto",
          maxWidth: "1000px",
          justifyContent: "center"
        }}>
          {bios.map((bio) => {
            return (<div key={bio.node.frontmatter.name}>
              <Bio bio={bio.node}/>
            </div>)
          })}
          <br />
        </div>
      </div>
  )
}

export default MeetTheTeam;

export const query = graphql`
fragment bios on Query{
  bios: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/(bios)/.*\\.md$/"}}) {
    edges {
      node {
        excerpt
        html
        frontmatter {
          name
          favoriteCity
          hometown
          image {
            publicURL
          }
        }
      }
    }
  }
}
`