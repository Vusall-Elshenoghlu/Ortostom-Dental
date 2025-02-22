import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function DoctorProfile() {
  const [profileData, setProfileData] = useState(false);
  const [dToken, setDToken] = useState(localStorage.getItem('doctorToken') || '');
  const [isEdit, setIsEdit] = useState(false);

  const getProfileData = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/doctors/profile',
        {},
        {
          headers: {
            Authorization: `Bearer ${dToken}`,
          },
        }
      );
      if (data.success) {
        setProfileData(data.profileData);
        console.log(data.profileData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const updateDoctorProfileData = async () => {
    try {
      const updatedData = {
        docId: profileData._id,
        bio: profileData.bio,
        available: profileData.available,
      };


      const { data } = await axios.post(
        'http://localhost:3000/doctors/update-profile',
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${dToken}`,
          },
        }
      );

      if (data.success) {
        toast.success('Profile updated successfully');
        getProfileData();
        setIsEdit(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Xəta detalları:", error.response ? error.response.data : error.message);
      toast.error(error.message);
    }
  };



  useEffect(() => {
    getProfileData();
  }, []);

  return (
    profileData && (
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div>
            <div className="card p-4 shadow-lg" style={{ height: '400px',width:"800px",marginLeft:"100px", }}>

              <div className="row">
                <div className="col-md-4 text-center" >
                  <img
                    src={profileData.profileImage}
                    alt="Doctor"
                    className="img-fluid rounded-circle"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <h3 className="card-title">Dr. {profileData.firstName} {profileData.lastName}</h3>
                  <p className="text-muted">{profileData.specialty}</p>
                  <p>
                    <span className="badge bg-primary">{profileData.experienceYears} Years Experience</span>
                  </p>
                  <h5>About:</h5>
                  {isEdit ? (
                    <textarea
                      className="form-control mb-3 "
                      value={profileData.bio}
                      onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      rows="3"
                      style={{ width: 'auto',resize:"none"  }}
                    />

                  ) : (
                    <p>{profileData.bio}</p>
                  )}
                  <div className="form-check">
                    <input
                      onChange={() => setProfileData(prev => ({ ...prev, available: !prev.available }))}
                      checked={profileData.available}
                      className="form-check-input"
                      type="checkbox"
                      id="availableCheck"
                      disabled={!isEdit}
                    />
                    <label className="form-check-label" htmlFor="availableCheck">
                      Available
                    </label>
                  </div>
                  <div className="mt-3">
                    {isEdit ? (
                      <button className="btn btn-primary" onClick={updateDoctorProfileData}>Save</button>
                    ) : (
                      <button className="btn btn-warning" onClick={() => setIsEdit(true)}>Edit</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  );
}

export default DoctorProfile;
