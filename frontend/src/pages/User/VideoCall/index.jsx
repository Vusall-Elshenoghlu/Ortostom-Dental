import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom'; 

const VideoCall = () => {
    const { roomName } = useParams(); 
    console.log(roomName)
    const jitsiContainerRef = useRef(null);
    const apiRef = useRef(null);
    const [isInCall, setIsInCall] = useState(false);

    useEffect(() => {
        if (!roomName) return; 

        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const domain = 'meet.jit.si';
            const options = {
                roomName, 
                width: '100%',
                height: 600,
                parentNode: jitsiContainerRef.current,
                configOverwrite: { 
                    startWithAudioMuted: true, 
                    startWithVideoMuted: true, 
                },
                interfaceConfigOverwrite: {
                    filmStripOnly: false,
                },
            };

            apiRef.current = new window.JitsiMeetExternalAPI(domain, options);

            apiRef.current.addEventListener('videoConferenceJoined', () => {
                console.log('Video zəngə qoşuldun!');
                setIsInCall(true);
            });

            apiRef.current.addEventListener('videoConferenceLeft', () => {
                console.log('Video zəngi tərk etdiniz');
                setIsInCall(false);
            });

            apiRef.current.executeCommand('toggleAudio');
            apiRef.current.executeCommand('toggleVideo');
        };

        return () => {
            if (apiRef.current) {
                apiRef.current.dispose();
            }
            document.body.removeChild(script);
        };
    }, [roomName]); 

    const handleCallEnd = () => {
        if (apiRef.current) apiRef.current.executeCommand('hangup');
    };

    return (
        <div>
            <Helmet>
                <title>
                    VideoCall
                </title>
            </Helmet>
            <div ref={jitsiContainerRef} style={{ width: '100%', height: '600px' }} />
            {isInCall ? (
                <button onClick={handleCallEnd}>Zəngi Bitir</button>
            ) : (
                <p>Video zəngə qoşulmadınız.</p>
            )}
        </div>
    );
};

export default VideoCall;
