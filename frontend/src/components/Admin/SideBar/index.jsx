import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FaTachometerAlt, FaCalendarAlt, FaUserMd, FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt className="me-2" /> },
    { name: "Appointments", icon: <FaCalendarAlt className="me-2" /> },
    { name: "Add Doctor", icon: <FaUserMd className="me-2" /> },
    { name: "Doctors List", icon: <FaUsers className="me-2" /> },
  ];

  return (
    <div className="d-flex">
      <div className="bg-light vh-100 p-4 shadow-sm" style={{ width: "260px" }}>
        <ListGroup className="gap-3">
          {menuItems.map((item) => (
            <ListGroup.Item
              key={item.name}
              action
              className={`d-flex align-items-center rounded py-2 px-3 border-0 ${
                active === item.name
                  ? "bg-white shadow-sm border-start border-primary"
                  : "bg-light"
              }`}
              style={{ transition: "0.3s ease-in-out", cursor: "pointer" }}
              onClick={() => setActive(item.name)}
            >
              {item.icon} <span className="fw-semibold">{item.name}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <div className="p-4 w-100">
        <h2>{active}</h2>
        <p>Welcome to the {active} page!</p>
      </div>
    </div>
  );
};

export default Sidebar;
