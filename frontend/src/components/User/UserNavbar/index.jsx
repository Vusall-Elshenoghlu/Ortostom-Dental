import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../../../context/LanguageContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function UserNavbar() {
  const { lang, setLang, darkMode, setDarkMode, translations } = useContext(LanguageContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ortostom Dental</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">{translations[lang].home}</Nav.Link>
            <Nav.Link href="#about">{translations[lang].about}</Nav.Link>
            <Nav.Link href="#about">{translations[lang].contact}</Nav.Link>
            <Nav.Link href="#about">{translations[lang].reservation}</Nav.Link>
            <Nav.Link href="#about">{translations[lang].video_call}</Nav.Link>
            <Nav.Link href="login">{translations[lang].login}</Nav.Link>
            <Nav.Link href="register">{translations[lang].register}</Nav.Link>
            <Nav.Link>
              <button
                className="btn btn-outline-dark"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </Nav.Link>

          </Nav>
            <select className="form-select w-auto" onChange={(e) => setLang(e.target.value)}>
              <option value="az">🇦🇿 AZ</option>
              <option value="en">🇬🇧 EN</option>
              <option value="ru">🇷🇺 RU</option>
            </select>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;
