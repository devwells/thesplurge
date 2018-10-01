import React from "react";

import palette from "../utils/palette";
import {rhythm} from "../utils/typography";

const SiteDescription = ({description}) => {
  return (
      <div
          style={{
            width: "100vw",
            background: palette.secondary,
            padding: rhythm(1),
            color: palette.white
          }}>
        <div
            style={{
              maxWidth: rhythm(30),
              margin: "auto",
              textAlign: "center",
            }}>
          <h2> Who We Are </h2>
          <p dangerouslySetInnerHTML={{__html: description}}/>
        </div>
      </div>
  )

}

export default SiteDescription
