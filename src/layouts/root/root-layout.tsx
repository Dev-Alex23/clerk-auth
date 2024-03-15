import { ClerkProvider, SignOutButton, SignedIn, UserButton } from '@clerk/clerk-react'
import { Outlet, useNavigate } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export default function RootLayout() {
  const navigate = useNavigate()

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <div className='auth-container'>
        <header className='header'>
          <div>
            <p>Clerk + React + React Router App</p>
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl='/sign-in' />
          </SignedIn>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          {/* <SignedOut>
            <Link to='/sign-in'>Sign In</Link>
          </SignedOut> */}
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  )
}
