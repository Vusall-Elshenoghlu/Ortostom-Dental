import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2"
import "./AdminNavbar.css"
function AdminNavbar() {
    const navigate = useNavigate();

    function handleLogout() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("adminToken");
                navigate("/");
                Swal.fire({
                    title: "Logged Out!",
                    text: "Logged Out",
                    icon: "success"
                });
            }
        });
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            zIndex: "1000",
            height: "80px" 
        }}>
            <Navbar.Brand style={{ marginRight: "100px" }}>
                <img className='logo-containerr' src="/images/logoo.jpg" alt="" />
            </Navbar.Brand>
            <h3>Admin panel</h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Button variant='danger' style={{ marginRight: "200px" }} onClick={() => handleLogout()}>Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AdminNavbar;
