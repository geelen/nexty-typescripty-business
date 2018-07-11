import Link from 'next/link'
import { Outer, Frame, FrameProps } from '../src/components/Outer'
import React from 'react'
import 'isomorphic-fetch'
import { getRandomBackground } from '../src/utils/api'

export default class extends React.Component<FrameProps> {
  static getInitialProps = getRandomBackground

  render() {
    return (
      <Frame background={this.props.background} color={this.props.color}>
        <Outer>
          <span>Hello World.</span>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Outer>
      </Frame>
    )
  }
}
