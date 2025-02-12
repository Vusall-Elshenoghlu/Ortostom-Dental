import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { LanguageContext } from "../../../context/LanguageContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "./UserNavbar.css"
const UserNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { lang, setLang, darkMode, setDarkMode, translations } = useContext(LanguageContext);

  return (
    <Navbar expand="lg" className={`bg-${darkMode ? "dark text-light" : "light"} shadow-sm`} sticky="top">
        <Navbar.Brand>
          <div className="logo-container">
            <Link to="/">

            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">{translations[lang].home}</Nav.Link>
            <Nav.Link as={Link} to="/about">{translations[lang].about}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{translations[lang].contact}</Nav.Link>
            <Nav.Link as={Link} to="/appointment">{translations[lang].reservation}</Nav.Link>
            <Nav.Link as={Link} to="/video-call">{translations[lang].video_call}</Nav.Link>
            <Nav.Link as={Link} to="/dental-care">{translations[lang].care}</Nav.Link>
          </Nav>

          <Button variant="outline-dark" onClick={() => setDarkMode(!darkMode)} className="me-3">
            {darkMode ? "☀" : "🌙"}
          </Button>

          <Dropdown>
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
            <Dropdown className="ms-3">
              <Dropdown.Toggle variant="outline-secondary" id="user-dropdown">
                👤 {user.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/my-profile">{translations[lang].profile}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/my-appointments">{translations[lang].appointments}</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout} className="text-danger">{translations[lang].logout}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div className="ms-3 d-flex">
              <Link to="/login" className="btn btn-primary me-2">{translations[lang].login}</Link>
              <Link to="/register" className="btn btn-secondary">{translations[lang].register}</Link>
            </div>
          )}
        </Navbar.Collapse>
    </Navbar>
  );
};

export default UserNavbar;
