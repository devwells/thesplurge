import React from "react";

import palette from "../utils/palette"
import LargePreview from "./LargePreview";
import SmallPreview from "./SmallPreview";

import {rhythm} from "../utils/typography";

class HighlightArticles extends React.Component {
  render() {
    const {posts} = this.props;

    return (
        <div style={{
          width: "100vw",
          backgroundColor: palette.white,
        }}>
          <div style={{
            display: "flex",
            margin: `auto auto ${rhythm(1.2)}`,
            flexGrow: 3,
            maxWidth: "1200px"
          }}>
            <div style={{
              marginRight: rhythm(.5),
            }}>
              <LargePreview post={posts[0].node} />
            </div>
            <div style={{
              marginLeft: rhythm(.5),
              flexGrow: 2
            }}>
              <SmallPreview post={posts[1].node}/>
              <SmallPreview post={posts[2].node}/>
              <SmallPreview post={posts[3].node}/>
            </div>
          </div>
        </div>
    )
  }
}

export default HighlightArticles
