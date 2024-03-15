import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Import the layouts
import RootLayout from './layouts/root/root-layout'
import DashboardLayout from './layouts/dashboard/dashboard-layout'

// Import the components
import IndexPage from './components/index/Index'
import SignInPage from './components/sign-in/Sign-in'
import SignUpPage from './components/sign-up/Sign-up'
import DashboardPage from './components/dashboard/Dashboard'
import InvoicesPage from './components/invoices/Invoices'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div className='auth-container loading'>This is loading.........</div>}>
            <IndexPage />
          </Suspense>
        ),
      },
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          {
            path: '/dashboard',
            element: (
              <Suspense fallback={<div className='auth-container loading'>This is loading.........</div>}>
                <DashboardPage />
              </Suspense>
            ),
          },

          { path: '/dashboard/invoices', element: <InvoicesPage /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
