import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
import { LanguageContext } from '../../../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

const generateRoomName = () => {
    return `DentalCall-${Date.now()}`;
};

const VideoCallLobby = () => {
    const { lang, darkMode } = useContext(LanguageContext);
    const [uEmail, setUEmail] = useState(sessionStorage.getItem("userEmail") || "");
    const navigate = useNavigate();
    
    const translations = {
        az: { 
            video_call: "Video Zəng", 
            lobby: "Otağı", 
            videoCallDesc: "Bu sistem vasitəsilə təhlükəsiz və rahat şəkildə video zənglər edə bilərsiniz.",
            startCall: "Hazıram, Başlayaq!",
            login: "Zəng üçün daxil olun."
        },
        en: { 
            video_call: "Video Call", 
            lobby: "Lobby", 
            videoCallDesc: "You can make secure and comfortable video calls using this system.",
            startCall: "I'm Ready, Let's Start!",
            login: "Log in to call."
        },
        ru: { 
            video_call: "Видеозвонок", 
            lobby: "Лобби", 
            videoCallDesc: "С помощью этой системы вы можете безопасно и удобно совершать видеозвонки.",
            startCall: "Я готов, давайте начнем!",
            login: "Войдите для звонка."
        }
    };

    const handleStartCall = async () => {
        if (uEmail) {
            const roomName = generateRoomName();
            const roomLink = `https://meet.jit.si/${roomName}`;
            console.log(roomLink);

            try {
                await axios.post(
                    'http://localhost:3000/videocall/send-email',
                    { email: uEmail, link: roomLink },
                    { headers: { "Content-Type": "application/json" } }
                );
                navigate(`/videocall/${roomName}`);
            } catch (error) {
                console.error("E-poçt göndərilə bilmədi:", error);
            }
        } else {
            toast.warn(translations[lang].login);
            navigate("/login");
        }
    };

    return (
        <div 
            className={`d-flex flex-column align-items-center justify-content-center text-center p-4 ${darkMode ? "dark-mode" : ""}`} 
            style={{ 
                height: "90vh", 
                backgroundColor: darkMode ? "#121212" : "#f0f4f8", 
                transition: "background-color 0.3s ease"
            }}
        >
            <Helmet>
                <title>Videocall-Lobby</title>
            </Helmet>
            <h1 
                className="display-4 fw-bold mb-4" 
                style={{ color: darkMode ? "#f1f1f1" : "#2a3d66", transition: "color 0.3s ease" }}
            >
                {translations[lang].video_call} {translations[lang].lobby}
            </h1>
            <p 
                className="mb-3 fs-5" 
                style={{ 
                    color: darkMode ? "#d1d1d1" : "#6c757d", 
                    maxWidth: "500px",
                    transition: "color 0.3s ease"
                }}
            >
                {translations[lang].videoCallDesc}
            </p>
            <button
                className="btn btn-lg"
                style={{
                    backgroundColor: darkMode ? "#ffffff" : "#007bff",
                    color: darkMode ? "#121212" : "white",
                    padding: "12px 30px",
                    fontSize: "1.2rem",
                    borderRadius: "50px",
                    transition: "background-color 0.3s, color 0.3s"
                }}
                onClick={handleStartCall}
            >
                {translations[lang].startCall}
            </button>
        </div>
    );
};

export default VideoCallLobby;
