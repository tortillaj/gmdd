import { css } from 'styled-components'
import { get, isString } from 'lodash'
import Shevy from 'shevyjs'

export const themeValue = path => props => {
  const value = get(props.theme, path)

  if (value) {
    return value
  } else {
    throw new Error(`The provided path - ${path} - was not found in the theme.`)
  }
}

export const hexToRGB = (hex, alpha) => {
  if (!hex || !isString(hex) || !hex.length === 7) return ''

  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

const black = '#252525'
const white = '#ffffff'

const colors = {
  primary: {
    base: '#3241B0',
    interaction: '#101C72',
    highlight: '#6471D7',
    pale: '#838DD7',
    // base: '#458B27',
    // interaction: '#498b42',
    // highlight: '#22BE55',
    // pale: '#A4F1BD',
  },
  secondary: {
    base: '#FF9E2D',
    interaction: '#A6600F',
    highlight: '#FFB662',
    pale: '#FFC98C',
  },
  grayscale: {
    base: '#9A9A9A',
    interaction: '#0B2E35',
    highlight: '#C8C8C8',
    pale: '#E7E7E7',
  },
  accent: {
    base: '#FFC52D',
    interaction: '#FFC52D',
    highlight: '#FFD361',
    pale: '#FFDF8B',
    // base: '#E3791F',
    // interaction: '#E0802E',
    // highlight: '#EF984D',
    // pale: '#EFAB71',
  },
  warning: {
    base: '#d00',
    interaction: '#a00',
  },
  always: {
    black,
    white,
  },
  foreground: black,
  background: white,
}

const sizes = {
  // these sizes are used for breakpoints
  small: 600,
  medium: 900,
  large: 1200,
  huge: 1500,
}

const typography = {
  sans: 'freight-sans-pro, sans-serif',
  serif: 'freight-display-pro, serif',
  fontSize: '1.4rem',
  lineHeight: 1.35,
}

export const shevy = new Shevy({
  baseFontSize: typography.fontSize,
  baseFontScale: [4.209, 3.157, 2.369, 1.777, 1.333, 1],
  baseLineHeight: typography.lineHeight,
})

export const theme = {
  colors,
  overlayColors: {
    primary: hexToRGB(colors.primary.base, 0.9),
    secondary: hexToRGB(colors.grayscale.base, 0.9),
    accent: hexToRGB(colors.accent.base, 0.9),
    background: hexToRGB(colors.background, 0.9),
  },
  sizes,
  typography,
  layout: {
    siteWidth: shevy.baseSpacing(58),
  },
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
