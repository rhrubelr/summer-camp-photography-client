import React from 'react';
import Main from '../Layout/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Instructor from '../Pages/Instructor/Instructor';
import AllClasses from '../Pages/AllClasses/AllClasses';
import DashBoard from '../Layout/DashBoard';
import SelectedClass from '../DashBorad/SelectedClass/SelectedClass';
import Payment from '../DashBorad/Payment/Payment';
import PaymentHistory from '../DashBorad/PaymentHistory/PaymentHistory';
import MyEnrollClass from '../DashBorad/MyEnrollClass/MyEnrollClass';
import AdminRoute from './AdminRoute';
import AllUsers from '../DashBorad/AllUsers/AllUsers';
import AddClass from '../DashBorad/AddClass/AddClass';
import MyClasses from '../DashBorad/MyClass/MyClass';


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
          path: '/allClasses',
          element: <AllClasses></AllClasses>,
        },
        
        
      ]
    },

    {
      
       path: 'dashBoard',
        element: <DashBoard></DashBoard>,
         children: [
          {
            path: 'selectedClass',
            element: <SelectedClass></SelectedClass>,
          },
          {
            path: 'payment',
            element: <Payment></Payment>,
          },
          {
            path: 'payment-history',
            element: <PaymentHistory></PaymentHistory>,
          },
          {
            path: 'myEnrollClass',
            element: <MyEnrollClass></MyEnrollClass>,
          },
          {
            path: 'all-users',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
          },
          {
            path: 'add-class',
            element: <AddClass></AddClass>,
          },
          {
            path: 'my-class',
            element: <MyClasses></MyClasses>,
          }
         ]
      },
    
  ]);




