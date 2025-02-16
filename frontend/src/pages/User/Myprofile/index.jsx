import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import { toast } from 'react-toastify';
import axios from 'axios';

function MyProfile() {
    const { lang, profil } = useContext(LanguageContext);

    const [userData, setUserData] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const token = localStorage.getItem("token");

    async function loadUserProfileData() {
        try {
            const { data } = await axios.get("http://localhost:3000/users/get-profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    async function updateUserProfileData() {

        try {

            const formData = new FormData();

            formData.append("name", userData.name || "");
            formData.append("phone", userData.phone || "");
            formData.append("gender", userData.gender || "");
            formData.append("dob", userData.dob || "");
            formData.append("address", JSON.stringify(userData.address || {}));

            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log(formObject)

            const { data } = await axios.post("http://localhost:3000/users/update-profile", formObject, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            if (data.success) {
                toast.success(data.message);
                await loadUserProfileData();
                setIsEdit(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (token) {
            loadUserProfileData();
        } else {
            setUserData(false);
        }
    }, [token]);

    return userData && (
        <div className="container p-4 bg-light rounded">
            {
                isEdit
                    ? <input type="text" className="form-control mb-3" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
                    : <h2>{userData.name}</h2>
            }
            <hr />
            <div>
                <p style={{ textDecoration: "underline", color: "gray" }}>{profil[lang].contact}:</p>
                <div>
                    <div style={{ display: "flex", gap: "50px" }}>
                        <div>{profil[lang].email}:</div>
                        <div>{userData.email}</div>
                    </div><br />
                    <div style={{ display: "flex", gap: "50px" }}>
                        <div>{profil[lang].phone}:</div>
                        {
                            isEdit
                                ? <input type="text" className="form-control mb-3" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                                : <div>{userData.phone}</div>
                        }
                    </div><br />
                    <div style={{ display: "flex", gap: "50px" }}>
                        <div>{profil[lang].address}:</div>
                        {
                            isEdit
                                ? <div>
                                    <input type="text" className="form-control mb-3" value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                                    <input type="text" className="form-control" value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                                </div>
                                : <div>
                                    {userData.address.line1}
                                    <br />
                                    {userData.address.line2}
                                </div>
                        }
                    </div><br />
                </div>
            </div>
            <div>
                <p style={{ textDecoration: "underline", color: "gray" }}>{profil[lang].basicInfo}</p>
                <div>
                    <div style={{ display: "flex", gap: "50px" }}>
                        <div>{profil[lang].gender}:</div>
                        {
                            isEdit
                                ? <select className="form-select mb-3" style={{ width: "100px" }} onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                                    <option value="male">{profil[lang].male}</option>
                                    <option value="female">{profil[lang].female}</option>
                                </select>
                                : <div>{userData.gender === "male" ? profil[lang].male : profil[lang].female}</div>
                        }
                    </div>
                    <div style={{ display: "flex", gap: "50px" }}>
                        <div>{profil[lang].birthday}</div>
                        {
                            isEdit
                                ? <input type="date" className="form-control" style={{ width: "150px" }} value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
                                : <div>{userData.dob}</div>
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    isEdit
                        ? <button className="btn btn-primary mt-3" onClick={() => updateUserProfileData()}>{profil[lang].saveInfo}</button>
                        : <button className="btn btn-secondary mt-3" onClick={() => setIsEdit(true)}>{profil[lang].edit}</button>
                }
            </div>
        </div>
    );
}

export default MyProfile;
