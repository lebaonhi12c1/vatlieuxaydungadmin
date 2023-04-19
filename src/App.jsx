

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Defaultlayout from './layout/Defaultlayout'
import Home from './page/Home'
import Product from './page/Product'
import User from './components/User'
import Producer from './page/Producer'
import Employee from './components/Employee'
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
    ]
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
