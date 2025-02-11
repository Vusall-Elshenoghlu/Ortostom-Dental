import AddProduct from "../pages/Admin/AddProduct";
import AdminProducts from "../pages/Admin/AdminProducts";
import AdminRoot from "../pages/Admin/AdminRoot";
import Appointments from "../pages/Admin/Appointments";
import DashBoard from "../pages/Admin/DashBoard";
import EditProduct from "../pages/Admin/EditProduct";
import Users from "../pages/Admin/Users";
import About from "../pages/User/About";
import Confirm from "../pages/User/Confirm";
import Contact from "../pages/User/Contact";
import DentalCare from "../pages/User/DentalCare";
import DoctorDetail from "../pages/User/DoctorDetail";
import Doctors from "../pages/User/Doctors";
import Home from "../pages/User/Home";
import Login from "../pages/User/Login";
import MyAppointments from "../pages/User/MyAppointments";
import MyProfile from "../pages/User/Myprofile";
import NoPage from "../pages/User/NoPage";
import Register from "../pages/User/Register";
import UserAppointment from "../pages/User/UseraAppointment";
import ProductDetail from "../pages/User/UserProdDetail";
import UserRoot from "../pages/User/UserRoot";
import VideoCall from "../pages/User/VideoCall";

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
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"my-profile",
                element:<MyProfile/>
            },
            {
                path:"my-appointments",
                element:<MyAppointments/>
            },
            {
                path:"doctors/:id",
                element:<DoctorDetail/>
            },
            {
                path:"appointment/:docId",
                element:<UserAppointment />
            },
            {
                path:"video-call",
                element:<VideoCall/>
            },
            {
                path:"dental-care",
                element:<DentalCare/>
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