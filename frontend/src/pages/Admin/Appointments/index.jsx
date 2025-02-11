
import { useEffect, useState } from "react";
import axios from "axios";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('patientName');

  useEffect(() => {
    axios.get(`/appointments?dentistName=${filter}`).then((res) => {
      setAppointments(res.data);
    }).catch((err) => {
      console.error("Error fetching appointments:", err);
    });
  }, [filter]);

  const handleSort = (field) => {
    setSort(field);
    const sortedAppointments = [...appointments].sort((a, b) => {
      if (a[field] > b[field]) return 1;
      if (a[field] < b[field]) return -1;
      return 0;
    });
    setAppointments(sortedAppointments);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/appointments/${id}`);
      setAppointments(appointments.filter(appointment => appointment._id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Appointments</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by dentist"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => handleSort('patientName')}>Patient Name</th>
            <th onClick={() => handleSort('appointmentDate')}>Appointment Date</th>
            <th onClick={() => handleSort('time')}>Time</th>
            <th onClick={() => handleSort('status')}>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.patientName}</td>
              <td>{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(appointment._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
