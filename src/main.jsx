import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './assets/Pages/About'
import Home from './assets/Pages/Home'
import Contact from './assets/Pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element : <App></App>,
    errorElement : 'page not found ',
    children : [
      {
        path:'/',
        element : <Home></Home>

      },
      {
        path:'/about',
        element : <About></About>
      },
      {
        path:'/contact',
        element : <Contact></Contact>
      }

    ]
    
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}></RouterProvider>
)
