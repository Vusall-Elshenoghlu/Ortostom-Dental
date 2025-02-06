import AddProduct from "../pages/Admin/AddProduct";
import AdminProducts from "../pages/Admin/AdminProducts";
import AdminRoot from "../pages/Admin/AdminRoot";
import Appointments from "../pages/Admin/Appointments";
import DashBoard from "../pages/Admin/DashBoard";
import EditProduct from "../pages/Admin/EditProduct";
import Users from "../pages/Admin/Users";
import Confirm from "../pages/User/Confirm";
import Home from "../pages/User/Home";
import Login from "../pages/User/Login";
import NoPage from "../pages/User/NoPage";
import Register from "../pages/User/Register";
import ProductDetail from "../pages/User/UserProdDetail";
import UserRoot from "../pages/User/UserRoot";

export const ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"products/:id",
                element:<ProductDetail/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"confirm",
                element:<Confirm/>
            },
        ]
    },
    {
        path:"*",
        element:<NoPage/>
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                element:<DashBoard/>
            },
            {
                path:"products",
                element:<AdminProducts/>
            },
            {
                path:"addproduct",
                element:<AddProduct/>
            },
            {
                path:"editproduct",
                element:<EditProduct/>
            },
            {
                path:"users",
                element:<Users/>
            },
            {
                path:"appointments",
                element:<Appointments/>
            },
        ]
    }
]