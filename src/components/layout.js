import React from 'react'
import { Link } from 'gatsby'

import palette from "../utils/palette"
import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            textAlign: "center",
            backgroundColor: palette.primary,
            padding: rhythm(1)
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: palette.white,
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h1
          style={{
            textAlign: "center",
            marginTop: 0,
            marginBottom: rhythm(-1),
            color: palette.primary
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 0
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Template
