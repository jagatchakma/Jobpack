import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './MainPage/MainPage.jsx';
import Home from './pages/Home/Home.jsx';
import Statistics from './pages/Statistics/Statistics.jsx';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs.jsx';
import Blog from './pages/Blog/Blog.jsx'
import JobDetails from './pages/JobDetails/JobDetails.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        // for testing using loader in applied job
        loader: () => fetch('data.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      // {
      //   path: '/jobDetails',
      //   element: <JobDetails></JobDetails>
      // }
    ],
  },
  {
    path: '/jobDetails',
    element: <JobDetails></JobDetails>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>,
)
