import { Frame, FrameProps, Outer } from '../src/components/Outer'
import Link from 'next/link'
import { getRandomBackground } from '../src/utils/api'
import React from 'react'

export default class extends React.Component<FrameProps> {
  static getInitialProps = getRandomBackground

  render() {
    return (
      <Frame background={this.props.background} color={this.props.color}>
        <Outer>
          <span>About us</span>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Outer>
      </Frame>
    )
  }
}
