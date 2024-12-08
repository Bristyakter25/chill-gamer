import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DetailsPage from './components/DetailsPage';
import AuthProvider from './providers/AuthProvider';
import AddReview from './components/AddReview';
import ReviewDetails from './components/ReviewDetails';

import AllReview from './components/AllReviews';
import MyReviews from './components/MyReview';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/detailsPage",
        element:<DetailsPage></DetailsPage>

      },
      {
        path:"/addReview",
        element:<AddReview></AddReview>
        
      },
      {
        path:"/review/:id",
        element:<ReviewDetails></ReviewDetails>
      },
      {
        path:'/allReviews',
        element:<AllReview></AllReview>,
        loader:()=> fetch('http://localhost:5000/review')
      },
      {
        path:'/highest-rated-games/:id',
        element:<DetailsPage></DetailsPage>
      },
      {
        path:'review/user/:email',
        element:<MyReviews></MyReviews>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
