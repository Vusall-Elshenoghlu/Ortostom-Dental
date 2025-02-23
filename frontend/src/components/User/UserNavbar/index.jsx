import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { LanguageContext } from "../../../context/LanguageContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Swal from "sweetalert2";
import "./UserNavbar.css";
import { toast } from "react-toastify";

const UserNavbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const { lang, setLang, darkMode, setDarkMode, translations,content } = useContext(LanguageContext);
  const [token,setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")
  const navigate = useNavigate();
  const location = useLocation(); 

  function handleReservation(){
    if(token){
      toast.warn(content[lang].navDoctor)
      navigate("/doctors")
    }else{
        toast.warn(content[lang].logAppoint)
        navigate("/login")
    }
  }

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        setUser(!user);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        sessionStorage.removeItem("userEmail")
        setUser(null);
        Swal.fire({
          title: "Logged Out!",
          text: "Logged Out Successfully..",
          icon: "success",
        });
      }
    });
  };

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <Navbar expand="lg" className={`bg-${darkMode ? "dark text-light" : "light"} shadow-sm`} sticky="top">
      <Navbar.Brand>
        <Link to="/">
          <img src="images/logoo.jpg" alt="" className="logo-img" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" className={isActive("/")}>
            {translations[lang].home}
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className={isActive("/about")}>
            {translations[lang].about}
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className={isActive("/contact")}>
            {translations[lang].contact}
          </Nav.Link>
          <Nav.Link onClick={handleReservation} className={isActive("/doctors")}>
            {translations[lang].reservation}
          </Nav.Link>
          <Nav.Link as={Link} to="/video-call-lobby" className={isActive("/video-call-lobby")}>
            {translations[lang].video_call}
          </Nav.Link>
          <Nav.Link as={Link} to="/dental-care" className={isActive("/dental-care")}>
            {translations[lang].care}
          </Nav.Link>
        </Nav>

        <Dropdown style={{ marginRight: "20px" }}>
          <Dropdown.Toggle variant="outline-primary">
            🌍 {lang.toUpperCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setLang("az")}>🇦🇿 AZ</Dropdown.Item>
            <Dropdown.Item onClick={() => setLang("en")}>🇬🇧 EN</Dropdown.Item>
            <Dropdown.Item onClick={() => setLang("ru")}>🇷🇺 RU</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {user ? (
          <Dropdown className="me-3">
            <Dropdown.Toggle variant="outline-secondary" id="user-dropdown">
              👤 {user.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/my-profile">
                {translations[lang].profile}
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/my-appointments">
                {translations[lang].appointments}
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout} className="text-danger">
                {translations[lang].logout}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <div className="me-3 d-flex">
            <Link to="/login" className="btn btn-primary me-2">
              {translations[lang].login}
            </Link>
            <Link to="/register" className="btn btn-secondary">
              {translations[lang].register}
            </Link>
          </div>
        )}

        <Button variant="outline-dark" onClick={() => setDarkMode(!darkMode)} className="me-3">
          {darkMode ? "☀" : "🌙"}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default UserNavbar;
