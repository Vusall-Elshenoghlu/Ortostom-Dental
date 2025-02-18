import React, { useEffect, useRef } from 'react';

const VideoCall = () => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    // Jitsi Meet skriptini əlavə etmək
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Jitsi Meet API çağırışını işə salmaq
      const domain = 'meet.jit.si';
      const options = {
        roomName: 'DentalPageVideoCallRoom', // Otaq adı (istədiyin adı verə bilərsən)
        width: '100%',
        height: 600,
        parentNode: jitsiContainerRef.current,
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);

      // İstənilən digər Jitsi funksiyalarını buradan idarə edə bilərsən
      api.addEventListener('videoConferenceJoined', () => {
        console.log('Video zəngə qoşuldun!');
      });
    };

    return () => {
      // Skripti silmək
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={jitsiContainerRef} style={{ width: '100%', height: '600px' }} />;
};

export default VideoCall;
