import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';

function MyProfile() {
    const { lang, profil } = useContext(LanguageContext);

    const [userData, setUserData] = useState({
        name: "Vusal Huseynli",
        email: "hvusal085@gmail.com",
        phone: "+994 050 343 7822",
        address: {
            line1: "Xetai Rayonu",
            line2: "Sadiqcan 4a V bloku men.88"
        },
        gender: "male",
        dob: "2005-08-22"
    });

    const [isEdit, setIsEdit] = useState(false);

    return (
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
                        ? <button className="btn btn-primary mt-3" onClick={() => setIsEdit(false)}>{profil[lang].saveInfo}</button>
                        : <button className="btn btn-secondary mt-3" onClick={() => setIsEdit(true)}>{profil[lang].edit}</button>
                }
            </div>
        </div>
    );
}

export default MyProfile;
