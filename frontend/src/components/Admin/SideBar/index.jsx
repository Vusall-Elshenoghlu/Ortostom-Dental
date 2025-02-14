import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FaTachometerAlt, FaCalendarAlt, FaUserMd, FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom"; 

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt className="me-2" /> },
    { name: "Appointments", path: "/dashboard/appointments", icon: <FaCalendarAlt className="me-2" /> },
    { name: "Add Doctor", path: "/dashboard/add-doctor", icon: <FaUserMd className="me-2" /> },
    { name: "Doctors List", path: "/dashboard/admin-doctors", icon: <FaUsers className="me-2" /> },
  ];

  return (
    <div className="d-flex">
      <div className="bg-light vh-90 p-4 shadow-sm" style={{ width: "260px" }}>
        <ListGroup className="gap-3">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              style={{ textDecoration: "none" }}
              onClick={() => setActive(item.name)}
            >
              <ListGroup.Item
                key={item.name}
                action
                className={`d-flex align-items-center rounded py-2 px-3 border-0 ${active === item.name
                    ? "bg-white shadow-sm border-start border-primary"
                    : "bg-light"
                  }`}
                style={{ transition: "0.3s ease-in-out", cursor: "pointer" }}
              >
                {item.icon} <span className="fw-semibold">{item.name}</span>
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </div>

      <div style={{height:"130vh",}}>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Sidebar;
