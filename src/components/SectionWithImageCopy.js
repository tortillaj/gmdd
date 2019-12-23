//
//
//
// Section - Image with Copy
//
//
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import {
  media,
  shevy,
  themeValue,
} from './theme'
import { WYSIWYG } from './Typography'
import {
  graphql,
  StaticQuery,
} from 'gatsby'
import {
  Inset,
  InsetInner,
} from './Inset'
import React from 'react'

const SectionImageWithCopyContainer = styled.section`
  padding: ${shevy.baseSpacing(2)} 0;
  ${props => props.backgroundColor && css`background-color: ${themeValue(props.backgroundColor)};`};
  
  ${media.medium`
    padding: ${shevy.baseSpacing(4)} 0;
  `}
`
SectionImageWithCopyContainer.displayName = 'SectionImageWithCopyContainer'

SectionImageWithCopyContainer.defaultProps = {
  backgroundColor: 'colors.background',
}

export const SectionImageWithCopyImage = styled.div`
  margin: 0 auto;
  max-width: 100% !important;
  order: 1;
  
  ${props =>
  props.position === 'right'
    ? css`
          ${media.small`
            margin-left: ${shevy.baseSpacing(2)};
            order: 1;
          `}
        `
    : css`
          ${media.small`
            margin-right: ${shevy.baseSpacing(2)};
            order: 0;
           `}
        `}
  
  ${media.medium`
    flex-basis: 50%;
  `}
`
SectionImageWithCopyImage.displayName = 'SectionImageWithCopyImage'

export const SectionImageWithCopyText = styled(WYSIWYG)`
  padding: 0 0 ${shevy.baseSpacing(1)} 0;
  flex: 1;
  text-align: center;
  
  ${media.small`
    padding: 0;
    text-align: left;
  `};

  ${media.medium`
    flex-basis: 50%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  `}
`
SectionImageWithCopyText.displayName = 'SectionImageWithCopyText'

const SectionImageWithCopyInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.small`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}
`
SectionImageWithCopyInner.displayName = 'SectionImageWithCopyInner'

export const SectionImageWithCopy = ({ backgroundColor, filename, alt, imagePosition, children, ...rest }) => {
  // const query = graphql`query SectionImageWithCopyQuery($filename: String!) {
  //     sectionImageWithCopy: allFile(filter: {absolutePath: {regex: "/$filename/"}}) {
  //         edges {
  //             node {
  //                 relativePath
  //                 name
  //                 childImageSharp {
  //                     fixed(width: 280) {
  //                         ...GatsbyImageSharpFixed
  //                     }
  //                 }
  //             }
  //         }
  //     }
  // }`

  const query = graphql`query {
      sectionImageWithCopy: allFile {
          edges {
              node {
                  relativePath
                  name
                  childImageSharp {
                      fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                      }
                  }
              }
          }
      }
  }`

  return (
    <StaticQuery
      query={query}

      render={(data) => {
        if (!data.sectionImageWithCopy) return null
        const image = data.sectionImageWithCopy.edges.find(n => {
          return n.node.relativePath.includes(filename)
        })

        if (!image) return null

        return (
          <SectionImageWithCopyContainer backgroundColor={backgroundColor} {...rest}>
            <Inset>
              <InsetInner>
                <SectionImageWithCopyInner>
                  <SectionImageWithCopyImage position={imagePosition}>
                    <Img alt={alt}
                         fixed={image.node.childImageSharp.fixed}
                    />
                  </SectionImageWithCopyImage>

                  <SectionImageWithCopyText>
                    {children}
                  </SectionImageWithCopyText>
                </SectionImageWithCopyInner>
              </InsetInner>
            </Inset>
          </SectionImageWithCopyContainer>
        )
      }}
    />
  )
}
