import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LanguageContext } from "../../../context/LanguageContext";
import Helmet from "react-helmet"
import "./Confirm.css"
const Confirm = () => {
    const [confirmCode, setConfirmCode] = useState('');
    const [error, setError] = useState(null);
    const { lang, setLang, translations } = useContext(LanguageContext);

    const navigate = useNavigate();

    const handleConfirm = (e) => {
        e.preventDefault();
        let userId = localStorage.getItem("userId");

        axios.post("http://localhost:3000/users/confirm", { userId, confirmPassword: confirmCode })
            .then((res) => {
                alert("Login successful!");
                localStorage.setItem("token", res.data.token);
                navigate('/');
            })
            .catch((err) => {
                setError(err.response?.data || "Invalid confirmation code");
            });
    };

    return (
        <>
            <div className="confirm-container">
                <Helmet>
                    <title>Confirm</title>
                </Helmet>
                <div className="confirm-box">
                    <h2 className="confirm-title">{translations[lang].confirm}</h2>
                    <form onSubmit={handleConfirm} className="confirm-form">
                        <h2 className='text-center'>{translations[lang].confirmCode}</h2>
                        <input
                            type="text"
                            name="confirmCode"
                            placeholder={translations[lang].enterConfirm}
                            value={confirmCode}
                            onChange={(e) => setConfirmCode(e.target.value)}
                            className="confirm-input"
                        />
                        {error && <div className="text-danger mt-2">{error}</div>}
                        <button type="submit" className="confirm-button">{translations[lang].confirm}</button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default Confirm;
