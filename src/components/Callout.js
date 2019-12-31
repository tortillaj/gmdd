import styled from "styled-components"

import { WYSIWYG } from "./Typography"
import { media, shevy, themeValue } from "./theme"

export const Callout = styled(WYSIWYG)`
  p {
    font-size: ${shevy.h3.fontSize};
    line-height: ${shevy.h3.lineHeight};
    font-family: ${themeValue("typography.serif")};
    font-weight: 400;

    ${media.medium`
      font-size: ${shevy.h2.fontSize};
      line-height: ${shevy.h2.lineHeight};
    `};
  }
`
Callout.displayName = "Callout"
