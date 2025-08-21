import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import './index.css'; // Ensure this path is correct based on your project structure
import HomePage from './modules/tnp/pages/HomePage';
 import AllPosts from './modules/tnp/pages/AllPosts';
import Contact from './modules/contact/Contact';
import UserLectures from './modules/guestlecture/pages/UserLecture';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
       {
        path: '/allposts',
        element: <AllPosts/>,
      },
      //  {
        // path: '/quiz',
        // element: <Quizhome/>,
      // },
      
      ,
       {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/guestlecture',
        element: <UserLectures/>,
      },
      
    
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>


  </React.StrictMode>
);
