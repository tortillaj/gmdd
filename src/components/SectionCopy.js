//
//
//
// Section - Copy
//
//
import styled, { css } from "styled-components"
import { media, shevy, themeValue } from "./theme"
import { WYSIWYG } from "./Typography"
import { Inset } from "./Inset"
import React from "react"

const SectionCopyContainer = styled.section`
  padding: ${shevy.baseSpacing(2)} 0;

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${themeValue(props.backgroundColor)};
    `};

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionCopyContainer.displayName = "SectionCopyContainer"

SectionCopyContainer.defaultProps = {
  backgroundColor: "colors.background",
}

export const SectionCopyText = styled(WYSIWYG)`
  ${media.medium`
    ${props =>
      props.columns &&
      props.columns > 0 &&
      css`
        column-count: ${props.columns};
        column-gap: ${shevy.baseSpacing(2)};
      `};
  `}
`
SectionCopyText.displayName = "SectionCopyText"

SectionCopyText.defaultProps = {
  columns: 2,
}

export const SectionCopy = ({
  children,
  backgroundColor,
  columns,
  ...rest
}) => (
  <SectionCopyContainer backgroundColor={backgroundColor} {...rest}>
    <Inset>
      <SectionCopyText columns={columns}>{children}</SectionCopyText>
    </Inset>
  </SectionCopyContainer>
)
