import React from "react";
import palette from "../utils/palette";
import {rhythm} from "../utils/typography";
import {Link} from "gatsby";

const LargePreview = ({post}) => {
  return (
      <div
          style={{
            flex: "display",
            flexDirection: "column",
            backgroundColor: palette.white,
            padding: rhythm(.5),
            paddingBottom: 0,
          }}>
        <Link
            to={post.fields.slug}>
          <img
              src={post.frontmatter.image.publicURL}
              style={{
                flexGrow: "2",
                marginBottom: 0,
                borderRadius: rhythm(.2),
              }}
              alt={post.frontmatter.title}/>
        </Link>
        <Link
            to={post.fields.slug}
            style={{
              textDecoration: "none",
            }}>
          <h2 style={{
            textAlign: "center",
            marginBottom: 0,
            padding: rhythm(.4),
            color: palette.charcoal
          }}
          >{post.frontmatter.title}</h2></Link>
        <p dangerouslySetInnerHTML={{__html: post.excerpt}}/>
      </div>
  );
}

export default LargePreview;