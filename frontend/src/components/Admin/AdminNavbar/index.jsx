import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2"

function AdminNavbar() {
    const navigate = useNavigate()
    function handleLogout(){
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
                localStorage.removeItem("adminToken")
                navigate("/")
              Swal.fire({
                title: "Logged Out!",
                text: "Logged Out",
                icon: "success"
              });
            }
          });
    }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand style={{marginRight:"100px"}}>
            <div className="logo-container">

            </div>
        </Navbar.Brand>
        <h6>Admin panel</h6>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Button variant='danger' style={{marginRight:"200px"}} onClick={() => handleLogout()}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminNavbar;