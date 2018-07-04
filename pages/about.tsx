import { Outer } from '../components/Outer'
import Link from 'next/link'

export default () => (
  <Outer>
    <span>About us</span>
    <Link href="/">
      <a>Home</a>
    </Link>
  </Outer>
)
