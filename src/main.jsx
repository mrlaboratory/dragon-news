import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './assets/Pages/About'
import Home from './assets/Pages/Home'
import Contact from './assets/Pages/Contact'
import Category from './assets/Pages/Category'
import News from './assets/Pages/News'

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
        path:'/category/:id',
        element : <Category></Category>,
        loader : ({params}) => fetch(`http://localhost:3000/category/${params.id}`)
      },
      {
        path:'/news/:id',
        element : <News></News>,
        loader : ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
      }

    ]
    
  },
  {
    path:'/about',
    element : <About></About>
  },
  {
    path:'/contact',
    element : <Contact></Contact>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}></RouterProvider>
)
