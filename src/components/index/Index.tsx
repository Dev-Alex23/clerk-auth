import { SignedOut } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

export default function IndexPage() {
  return (
    <div>
      <h1>This is the index page</h1>
      <div>
        <ul>
          <SignedOut>
            <li>
              <Link to='/sign-up'>Sign Up</Link>
            </li>
          </SignedOut>
          <SignedOut>
            <li>
              <Link to='/sign-in'>Sign In</Link>
            </li>
          </SignedOut>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
