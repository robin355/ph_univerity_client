import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contract from "../pages/Contract";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminLayout from "../components/Layout/AdminLayout";

const routers=createBrowserRouter([
    {
    path:'/',
    element: <App></App>,
    children:[
        {
            path:'about',
            element:<About></About>
        },
        {
         path:'contract',
         element:<Contract></Contract>
        },
    ],
},
    {
    path:'/admin',
    element: <AdminLayout></AdminLayout>,
    children:[
        {
            path:'dashboard',
            element:<AdminDashboard></AdminDashboard>
        },
        {
         path:'create-student',
         element:<CreateStudent></CreateStudent>
        },
    ],
},
{
  path:'/login',
  element:<Login></Login>
},
{
    path:'/register',
    element:<Register></Register>
}
    
])

export default routers;