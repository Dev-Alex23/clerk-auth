import * as React from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function DashboardLayout() {
  const { userId } = useAuth()
  const { user } = useUser()
  const navigate = useNavigate()

  console.log('test', { userId, user })

  React.useEffect(() => {
    if (!userId) {
      navigate('/sign-in')
    }
  }, [navigate, userId])

  return <Outlet />
}
