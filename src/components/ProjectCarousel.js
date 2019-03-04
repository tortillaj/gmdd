import React, { Component } from 'react'
import styled from 'styled-components'

import { shevy } from './theme'

export const ProjectCarouselWrapper = styled.div`
  height: ${shevy.baseSpacing(13)};
  overflow: hidden;
  display: flex;
`
ProjectCarouselWrapper.displayName = 'ProjectCarouselWrapper'

export const ProjectCarouselItem = styled.div`
  height: inherit;
  margin-right: ${shevy.baseSpacing(1)};

  img {
    height: 100%;
    width: auto;
    display: block;
  }
`
ProjectCarouselItem.displayName = 'ProjectCarouselItem'

export class ProjectCarousel extends Component {
  // componentDidMount() {
  //   const wrapper = this.wrapper
  //   const wrapperWidth = wrapper.getBoundingClientRect().width
  //   for (let i = 0; i < wrapper.childNodes.length; i++) {
  //     const width = wrapper.childNodes[i].children[0].getBoundingClientRect().width
  //     wrapper.childNodes[i].style.width = `${width}px`
  //   }
  // }
  render() {
    const { children } = this.props
    // const modifiedChildren = React.Children.map(children, child => React.cloneElement(child, {
    //   width: child.getBoundingClientRect().width,
    // }))
    return (
      <ProjectCarouselWrapper ref={wrapper => (this.wrapper = wrapper)}>
        {children}
      </ProjectCarouselWrapper>
    )
  }
}
