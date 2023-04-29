import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './assets/Pages/About'
import Home from './assets/Pages/Home'
import Contact from './assets/Pages/Contact'
import Category from './assets/Pages/Category'
import News from './assets/Pages/News'
import Login from './assets/Pages/Login'
import Register from './assets/Pages/Register'
import Signup from './assets/Pages/Register'
import AuthProvider from './assets/components/AuthProvider'
import Dashboard from './assets/Pages/Dashboard'
import Pages from './assets/Pages/Pages'
import PrivateRoute from './assets/components/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element : <App></App>,
    errorElement : 'page not found ',
    children : [
      {
        path:'/',
        element : <Navigate to='/category/0'></Navigate>

      },
      {
        path:'/category/:id',
        element : <Category></Category>,
        loader : ({params}) => fetch(`http://localhost:3000/category/${params.id}`)
      },
      {
        path:'/news/:id',
        element : <PrivateRoute><News></News></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
      },
      {
        path:'/login',
        element : <Login></Login>
      },
      {
        path:'/register',
        element : <Register></Register>
      },  {
        path:'/dashboard',
        element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
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
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>

)
