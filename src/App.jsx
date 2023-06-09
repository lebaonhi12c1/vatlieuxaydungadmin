

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Defaultlayout from './layout/Defaultlayout'
import Home from './page/Home'
import Product from './page/Product'
import User from './page/User'
import Producer from './page/Producer'
import Employee from './page/Employee'
import Category from './page/Category'
import Login from './page/Login'
import Order from './page/Order'
import Profile from './page/Profile'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Defaultlayout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'product',
        element: <Product/>
      },
      {
        path: 'employee',
        element: <Employee/>
      },
      {
        path: 'user',
        element: <User/>
      },
      {
        path: 'producer',
        element: <Producer/>
      },
      {
        path: 'category',
        element: <Category/>
      },
      {
        path: 'order',
        element: <Order/>
      },
      {
        path: 'profile',
        element: <Profile/>
      },
    ]
  }
  ,{
    path: '/login',
    element: <Login/>
  }
])
function App() {

  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
