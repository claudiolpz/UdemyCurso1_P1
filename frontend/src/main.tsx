import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App'
import LoginView from './views/LoginView'
import Frontend from './components/Frontend'
import RegisterView from './views/RegisterView'
import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'
import LinkTreeView from './views/LinkTreeView'
import ProfileView from './views/ProfileView'

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
      },
      {
        path:'/admin',
        element:<AppLayout/>,
        children:[
          {
            path:'linktree',
            element:<LinkTreeView/>
          },
          {
            path:'profile',
            element:<ProfileView/>
          }
        ]
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
