import Link from 'next/link'
import { Outer, Frame } from '../components/Outer'
import React from 'react'
import 'isomorphic-fetch'

interface PropTypes {
  background: string
}

export default class extends React.Component<PropTypes> {
  static async getInitialProps({ req }): Promise<PropTypes> {
    const response = await fetch('https://api.unsplash.com/photos/random', {
      headers: {
        'Authorization': 'Client-ID 82f8e4797dece60020f2cc66f5c51af06dbd28c6eaf956ba88cc75b209f925bf'
      }
    })
    const json = await response.json()
    // console.log(json)
    return { background: json.urls.full }
  }

  render() {
    return (
      <Frame background={this.props.background}>
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
