import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App'
import LoginView from './pages/LoginView'
import Frontend from './components/Frontend'
import RegisterView from './pages/RegisterView'
import AuthLayout from './layouts/AuthLayout'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Frontend/>,
    children:[
      {
        index:true,
        element:<App/>
      },
      {
        element:<AuthLayout/>,
        children:[
          {
            path:'/auth/login',
            element:<LoginView/>
          },
          {
            path:'/auth/register',
            element:<RegisterView/>
          }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
