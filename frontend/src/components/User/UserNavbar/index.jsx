import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { LanguageContext } from "../../../context/LanguageContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const UserNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { lang, setLang, darkMode, setDarkMode, translations } = useContext(LanguageContext);

  return (
    <Navbar expand="lg" className={`bg-${darkMode ? "dark text-light" : "light"} shadow-sm`} sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">Ortostom Dental</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">{translations[lang].home}</Nav.Link>
            <Nav.Link as={Link} to="/about">{translations[lang].about}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{translations[lang].contact}</Nav.Link>
            <Nav.Link as={Link} to="/reservation">{translations[lang].reservation}</Nav.Link>
            <Nav.Link as={Link} to="/video-call">{translations[lang].video_call}</Nav.Link>
          </Nav>

          {/* Dark Mode Toggle */}
          <Button variant="outline-dark" onClick={() => setDarkMode(!darkMode)} className="me-3">
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </Button>

          {/* Language Selector */}
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

          {/* User/Login/Register */}
          {user ? (
            <div className="ms-3 d-flex align-items-center">
              <span className="me-3">👤 {user.name}</span>
              <Button variant="danger" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <div className="ms-3 d-flex">
              <Link to="/login" className="btn btn-primary me-2">Login</Link>
              <Link to="/register" className="btn btn-secondary">Register</Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
