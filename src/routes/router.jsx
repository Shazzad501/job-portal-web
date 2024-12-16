import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplication from "../pages/myApplication/MyApplication";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJob from "../pages/myPostedJob/MyPostedJob";
import ViewApplication from "../pages/viewApplication/ViewApplication";
import FindJob from "../pages/findJob/FindJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://job-server-nu.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/find-job',
        element: <FindJob></FindJob>
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute><JobApply/></PrivateRoute>
      },
      {
        path: '/my-applications',
        element: <PrivateRoute><MyApplication/></PrivateRoute>
      },
      {
        path: '/add-job',
        element: <PrivateRoute><AddJob/></PrivateRoute>
      },
      {
        path: '/my-posted-job',
        element: <PrivateRoute><MyPostedJob/></PrivateRoute>
      },
      {
        path:'/view-application/:job_id',
        element: <PrivateRoute><ViewApplication/></PrivateRoute>,
        loader: ({params})=> fetch(`https://job-server-nu.vercel.app/job-applications/jobs/${params.job_id}`)
      }
    ]
  },
]);

export default router;