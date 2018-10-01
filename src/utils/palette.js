let palette = {
  pink: "#fd95b4",
  teal: "#32acab",
  lightGray: "#eeeeee",
  yellow: "#fee383",
  brick: "#d3736b",
  skyBlue: "#caf9fc",
  white: "#ffffff",
  charcoal: "#333333",
  black: "#000000",
}

palette = Object.assign(palette, {
  primary: palette.teal,
  secondary: palette.pink,
  light: palette.yellow
})

export default palette;