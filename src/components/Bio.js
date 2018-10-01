import React from "react";
import palette from "../utils/palette";
import {rhythm} from "../utils/typography";

const Bio = ({bio}) => {
  return (
      <div style={{
        margin: rhythm(1),
        padding: rhythm(1),
        width: "30vw",
        backgroundColor: palette.white
      }}>
        <div>
          <img
              src={bio.frontmatter.image.publicURL}
              alt={bio.frontmatter.name}
              style={{
                margin: `0 auto ${rhythm(1)}`,
                borderRadius: "50%",
                width: "300px",
                display: "block",
              }}
          />
        </div>
        <div>
          <h3 style={{
            marginBottom: 0,
            paddingBottom: rhythm(.3),
            color: palette.charcoal,
            textAlign: "center"
          }}>{bio.frontmatter.name}</h3>
          <p style={{
            marginBottom: 0,
            paddingBottom: rhythm(.3),
            color: palette.charcoal
          }}><b>Hometown:</b> {bio.frontmatter.hometown}</p>
          <p style={{
            marginBottom: 0,
            paddingBottom: rhythm(.3),
            color: palette.charcoal
          }}><b>Favorite City:</b> {bio.frontmatter.favoriteCity}</p>

          <p dangerouslySetInnerHTML={{__html: bio.html}}/>
        </div>
      </div>
  );
}

export default Bio;