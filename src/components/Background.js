import styled, { css } from 'styled-components'

import { themeValue } from './theme'

export const Background = styled.div`
  ${props => props.color && css`background-color: ${themeValue(props.color)}`};
`
Background.displayName = 'Background'
