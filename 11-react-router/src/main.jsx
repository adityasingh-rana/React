import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact'
import User from './components/User'
import Github, { githubInfoLoder } from './components/Github'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact-us',
        element: <Contact/>
      },
      {
        path: 'user/:id',
        element: <User/>
      },
      {
        loader : githubInfoLoder,
        path: 'github',
        element: <Github/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
