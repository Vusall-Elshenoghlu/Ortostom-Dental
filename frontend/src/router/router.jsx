import AddDoctor from "../pages/Admin/AddDoctor";
import AddProduct from "../pages/Admin/AddProduct";
import AdminDoctors from "../pages/Admin/AdminDoctors";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminProducts from "../pages/Admin/AdminProducts";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Appointments from "../pages/Admin/Appointments";
import DashBoard from "../pages/Admin/DashBoard";
import EditProduct from "../pages/Admin/EditProduct";
import Users from "../pages/Admin/Users";
import DoctorAppointments from "../pages/Doctor/DoctorAppointments";
import DoctorDashBoard from "../pages/Doctor/DoctorDashBoard";
import DoctorLogin from "../pages/Doctor/DoctorLogin";
import DoctorProfile from "../pages/Doctor/DoctorProfile";
import DoctorRoot from "../pages/Doctor/DoctorRoot/DoctorRoot";
import About from "../pages/User/About";
import Contact from "../pages/User/Contact";
import DentalCare from "../pages/User/DentalCare";
import BabysTeeth from "../pages/User/DentalCareDetail/BabysTeeth";
import BadBreath from "../pages/User/DentalCareDetail/BadBreath";
import BracesCare from "../pages/User/DentalCareDetail/BracesCare";
import Brushing from "../pages/User/DentalCareDetail/Brushing";
import ChildrensTeeth from "../pages/User/DentalCareDetail/ChildrensTeeth";
import DentalPhobia from "../pages/User/DentalCareDetail/DentalPhobia";
import Diabetes from "../pages/User/DentalCareDetail/Diabetes";
import DryMouth from "../pages/User/DentalCareDetail/DryMouth";
import Flossing from "../pages/User/DentalCareDetail/Flossing";
import GumDisease from "../pages/User/DentalCareDetail/GumDisease";
import GumHealth from "../pages/User/DentalCareDetail/GumHealth";
import ImplantCare from "../pages/User/DentalCareDetail/ImplantCare";
import OralLesions from "../pages/User/DentalCareDetail/OralLesions";
import OralPiercings from "../pages/User/DentalCareDetail/OralPiercings";
import PostExtractions from "../pages/User/DentalCareDetail/PostExtractions";
import Pregnancy from "../pages/User/DentalCareDetail/Pregnancy";
import SensitiveTeeth from "../pages/User/DentalCareDetail/SensitiveTeeth";
import TMJDisorder from "../pages/User/DentalCareDetail/TMJDisorder";
import Tobacco from "../pages/User/DentalCareDetail/Tobacco";
import WisdomTeeth from "../pages/User/DentalCareDetail/WisdomTeeth";
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
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "products/:id",
                element: <ProductDetail />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "my-profile",
                element: <MyProfile />
            },
            {
                path: "my-appointments",
                element: <MyAppointments />
            },
            {
                path: "doctors/:id",
                element: <DoctorDetail />
            },
            {
                path: "appointment/:docId",
                element: <UserAppointment />
            },
            {
                path: "video-call",
                element: <VideoCall />
            },
            {
                path: "dental-care",
                element: <DentalCare />
            },
            { path: "/dental-care/1", element: <BabysTeeth /> },
            { path: "/dental-care/2", element: <BracesCare /> },
            { path: "/dental-care/3", element: <Brushing /> },
            { path: "/dental-care/4", element: <ChildrensTeeth /> },
            { path: "/dental-care/5", element: <Flossing /> },
            { path: "/dental-care/6", element: <GumHealth /> },
            { path: "/dental-care/7", element: <ImplantCare /> },
            { path: "/dental-care/9", element: <BadBreath /> },
            { path: "/dental-care/12", element: <DentalPhobia /> },
            { path: "/dental-care/13", element: <Diabetes /> },
            { path: "/dental-care/14", element: <DryMouth /> },
            { path: "/dental-care/15", element: <GumDisease /> },
            { path: "/dental-care/17", element: <OralLesions /> },
            { path: "/dental-care/18", element: <OralPiercings /> },
            { path: "/dental-care/19", element: <PostExtractions /> },
            { path: "/dental-care/20", element: <Pregnancy /> },
            { path: "/dental-care/21", element: <SensitiveTeeth /> },
            { path: "/dental-care/22", element: <TMJDisorder /> },
            { path: "/dental-care/23", element: <Tobacco /> },
            { path: "/dental-care/24", element: <WisdomTeeth /> }


        ]
    },
    {
        path: "*",
        element: <NoPage />
    },
    {
        path: "/admin",
        element: <AdminLogin />
    },
    {
        path: "dashboard",
        element: <AdminRoot />,
        children: [
            {
                path: "",
                element: <DashBoard />
            },
            {
                path: "products",
                element: <AdminProducts />
            },
            {
                path: "addproduct",
                element: <AddProduct />
            },
            {
                path: "editproduct",
                element: <EditProduct />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "appointments",
                element: <Appointments />
            },
            {
                path: "admin-doctors",
                element: <AdminDoctors />
            },
            {
                path: "add-doctor",
                element: <AddDoctor />
            },
        ]
    },
    {
        path: "/doctor",
        element: <DoctorLogin />
    },
    {
        path: "/doctor-dashboard",
        element: <DoctorRoot />,
        children: [
            {
                path: "",
                element: <DoctorDashBoard />
            },
            {
                path: "appointments",
                element: <DoctorAppointments />
            },
            {
                path: "profile",
                element: <DoctorProfile />
            },
        ]
    }


]

