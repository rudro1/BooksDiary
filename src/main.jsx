import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Root from './Components/Routes/Root.jsx';
import Errorpage from './Components/Error/Errorpage.jsx';
import Home from './Components/Home/Home.jsx';
import Bookdetails from './Components/Books/BookDetails/Bookdetails.jsx';
import ListedBook from './Components/ListedBook/ListedBook.jsx';
const router = createBrowserRouter([


  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
{
path:'/ListedBook',
element: <ListedBook></ListedBook>,
loader:(()=>fetch('../../../src/books.json'))

}
      ,
      {
path:'/book/:bookid',
loader: () => fetch('../../../src/books.json'),
element:<Bookdetails></Bookdetails>
      }


    ]
  }





])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
