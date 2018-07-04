import Link from 'next/link'
import {Outer} from "../components/Outer";

export default () => (
  <Outer>
    <span>Hello World.</span>
    <Link href="/about">
      <a>About</a>
    </Link>
  </Outer>
)
