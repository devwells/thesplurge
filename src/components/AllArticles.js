import React from "react";

import palette from "../utils/palette";

import {rhythm} from "../utils/typography";

class AllArticles extends React.Component {
  render() {
    return (
        <div style={{
          maxWidth: "1200px",
          backgroundColor: palette.white,
          margin: `${rhythm(1)} auto`,
          padding: 0
        }}>
          <div style={{
            display: "flex",
            maxWidth: "800px",
            margin: "auto"
          }}>
            <div style={{
              marginRight: rhythm(.5),
              flexGrow: 3
            }}>

              {this.props.children}

            </div>
            {/*<div style={{*/}
              {/*marginLeft: rhythm(.5),*/}
              {/*flexGrow: 1,*/}
              {/*backgroundColor: palette.light,*/}
              {/*width: "100%"*/}
            {/*}}>*/}
              {/*<p>Empty for now</p>*/}
            {/*</div>*/}
          </div>
        </div>
    )
  }
}

export default AllArticles
