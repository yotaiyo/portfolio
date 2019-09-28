import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Layout } from '../public/Layout'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 5px 5px -5px #54595d;
  background-color: #00abb3;
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 20px 0 20px 0;
  color: #fff;
  font-size: ${Layout.Text.Normal}px;
`

const HeaderTitle = styled.div`
  font-size: ${Layout.Text.Normal}px;
  margin-left: 40px;
`

const SectionWrapper = styled.div`
  margin-right: 60px;
`

const Section = styled.span`
  font-size: ${Layout.Text.Normal}px;
  margin-left: 60px;
`

export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onMouseTop: false,
      onMouseWorks: false
    }
  }

  render() {
    const { onMouseTop, onMouseWorks } = this.state
    return (
      <Wrapper>
        <HeaderTitle>yotaiyo`s portfolio</HeaderTitle>
        <SectionWrapper>
          <Section
            onMouseOver={() => this.setState({ onMouseTop: true })}
            onMouseOut={() => this.setState({ onMouseTop: false })}
            style={{ color: onMouseTop ? '#FF4F02' : null }}
          >
            Top
          </Section>
          <Section
            onMouseOver={() => this.setState({ onMouseWorks: true })}
            onMouseOut={() => this.setState({ onMouseWorks: false })}
            style={{ color: onMouseWorks ? '#FF4F02' : null }}
          >
            Works
          </Section>
        </SectionWrapper>
      </Wrapper>
    )
  }
}

export default Header
