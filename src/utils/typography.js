import Typography from 'typography'
import palette from "./palette"

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Antic Slab'],
  bodyFontFamily: ['Georgia', 'serif'],
  bodyColor: palette.charcoal,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    'h1': {
      fontFamily: 'Dancing Script',
      color: palette.black
    },
    'h2': {
      fontSize: "35px"
    }
  })
})



// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
