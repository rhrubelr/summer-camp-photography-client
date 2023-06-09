import React from 'react';
import Main from '../Layout/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Instructor from '../Pages/Instructor/Instructor';
import Classes from '../Pages/Classes/Classes';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>,
        },
        {
          path: '/instructor',
          element: <Instructor></Instructor>,
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        }
      ]
    },
  ]);




