import Link from 'next/link'
import { Outer } from '../components/Outer'
import React from 'react'

export default () => {
    return (
      <Outer>
        <span>Hello World.</span>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Outer>
    )
  }
