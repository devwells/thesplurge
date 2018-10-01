import React from "react";
import palette from "../utils/palette";
import {rhythm} from "../utils/typography";
import {Link} from "gatsby";

const SmallPreview = ({post}) => {
  return (
      <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: palette.white,
            padding: rhythm(.5),
            marginBottom: 0
          }}>
        <div style={{
          flexShrink: "4",
          marginRight: rhythm(.5),
          marginBottom: 0,
        }}>
          <Link
              to={post.fields.slug}>
          <img
              src={post.frontmatter.image.publicURL}
              alt={post.frontmatter.title}
              style={{
                margin: 0,
                borderRadius: rhythm(.2),
                maxWidth: "250px"
              }}
          />
          </Link>
        </div>
        <div
            style={{
              flexShrink: "3",
              marginBottom: 0
            }}>
          <Link
              to={post.fields.slug}
              style={{
                textDecoration: "none",
              }}>
          <h3 style={{
            marginBottom: 0,
            paddingBottom: rhythm(.3),
            color: palette.charcoal
          }}>{post.frontmatter.title}</h3>
          </Link>
          <p dangerouslySetInnerHTML={{__html: post.excerpt}}/>
        </div>
      </div>
  );
}

export default SmallPreview;