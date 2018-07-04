import { Outer } from '../components/Outer'
import Link from 'next/link'

export default () => (
  <Outer>
    About us
    <Link href="/">
      <a>Home</a>
    </Link>
  </Outer>
)
