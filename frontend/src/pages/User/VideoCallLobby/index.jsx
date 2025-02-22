import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const generateRoomName = () => {
  return `DentalCall-${Date.now()}`;
};

const VideoCallLobby = () => {
  const navigate = useNavigate();

  const handleStartCall = async () => {
    const token = localStorage.getItem("token");
    const roomName = generateRoomName();
    const roomLink = `https://meet.jit.si/${roomName}`;

    try {
      await axios.post(
        'http://localhost:3000/videocall/send-email',
        { link: roomLink }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate(`/videocall/${roomName}`);
    } catch (error) {
      console.error("E-poçt göndərilə bilmədi:", error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center p-4">
      <h1 className="display-4 fw-bold mb-4">Video Zəng Otağına Xoş Gəlmisiniz!</h1>
      <p className="mb-3 fs-5">Bu sistem vasitəsilə təhlükəsiz və rahat şəkildə video zənglər edə bilərsiniz.</p>
      <button 
        className="btn btn-primary btn-lg"
        onClick={handleStartCall}
      >
        Hazıram, Başlayaq!
      </button>
    </div>
  );
};

export default VideoCallLobby;
