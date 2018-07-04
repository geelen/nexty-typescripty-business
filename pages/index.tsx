import Link from 'next/link'
import { Outer } from '../components/Outer'
import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    console.log(req)
    return {}
  }

  render() {
    return (
      <Outer>
        <span>Hello World.</span>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Outer>
    )
  }
}
