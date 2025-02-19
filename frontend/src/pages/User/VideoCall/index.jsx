import React, { useEffect, useRef, useState } from 'react';

const VideoCall = () => {
  const jitsiContainerRef = useRef(null);
  const [isInCall, setIsInCall] = useState(false); 

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const domain = 'meet.jit.si';
      const options = {
        roomName: 'DentalPageVideoCallRoom', 
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

      const api = new window.JitsiMeetExternalAPI(domain, options);

      api.addEventListener('videoConferenceJoined', () => {
        console.log('Video zəngə qoşuldun!');
        setIsInCall(true); 
      });

      api.addEventListener('videoConferenceLeft', () => {
        console.log('Video zəngi tərk etdiniz');
        setIsInCall(false); 
      });

      api.executeCommand('toggleAudio');
      api.executeCommand('toggleVideo');
    };

    return () => {
      document.body.removeChild(script); // Skripti silmək
    };
  }, []);

  const handleCallEnd = () => {
    if (api) api.executeCommand('hangup');
  };

  return (
    <div>
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
