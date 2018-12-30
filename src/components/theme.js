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

const colors = {
  primary: {
    base: '#2B6497',
    interaction: '#1E466A',
    highlight: '#3882C5',
  },
  secondary: {
    pale: '#E7E7E7',
    base: '#9A9A9A',
    interaction: '#7B7B7B',
    highlight: '#C8C8C8',
  },
  accent: {
    base: '#FF7100',
    interaction: '#A64A00',
    highlight: '#FF9540',
  },
  warning: {
    base: '#d00',
    interaction: '#a00',
  },
  foreground: '#252525',
  background: '#ffffff',
}

const sizes = {
  // these sizes are used for breakpoints
  small: 600,
  medium: 900,
  large: 1200,
  huge: 1500,
}

const typography = {
  sans: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, serif',
  fontSize: '1.5rem',
  lineHeight: 1.33,
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
    secondary: hexToRGB(colors.secondary.base, 0.9),
    accent: hexToRGB(colors.accent.base, 0.9),
    background: hexToRGB(colors.background, 0.9),
  },
  sizes,
  typography,
  layout: {
    siteWidth: shevy.baseSpacing(60),
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
