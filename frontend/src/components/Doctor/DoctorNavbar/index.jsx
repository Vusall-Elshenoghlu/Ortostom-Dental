import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2"

function DoctorNavbar() {
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
                localStorage.removeItem("doctorToken");
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
            height: "80px", 
            backgroundColor: "#f4f7fc;",
            boxShadow:"0px 0px 0px 0.1px"
        }}>
            <Navbar.Brand style={{ marginRight: "100px" }}>
                {/* <div className="logo-containerrr">
                    {}
                </div> */}
            </Navbar.Brand>
            <Button 
                variant="outline-primary" 
                style={{ 
                    marginLeft: "auto", 
                    marginRight: "20px", 
                    backgroundColor: "#007bff", 
                    color: "white", 
                    border: "2px solid #007bff",
                    fontWeight: "600",
                    fontSize: "16px",
                    borderRadius: "25px",
                    padding: "10px 20px",
                    transition: "background-color 0.3s, transform 0.2s"
                }}
                onClick={() => navigate("/doctor-panel")}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
            >
                Doctor Panel
            </Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Button variant='danger' style={{ marginRight: "200px" }} onClick={() => handleLogout()}>Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default DoctorNavbar;
