'use client';

import { useEffect, useState } from 'react';

const photoList = [
  '/photos/1.jpg',
  '/photos/2.jpg',
  '/photos/3.JPG',
  '/photos/4.JPG',
  '/photos/5.JPG',
  '/photos/6.jpg',
  '/photos/7.jpg',
];

export default function SongPage() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % photoList.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #fdf2f8 0%, #fef3c7 100%)',
        padding: 24,
      }}
    >
      <style jsx global>{`
        @keyframes softFade {
          from {
            opacity: 0;
            transform: scale(1.03);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div
        style={{
          position: 'relative',
          width: 'min(560px, 92vw)',
          borderRadius: 28,
          overflow: 'hidden',
          boxShadow: '0 20px 80px rgba(15, 23, 42, 0.18)',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <img
            key={photoList[activePhoto]}
            src={photoList[activePhoto]}
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fdf2f8 100%)',
              animation: 'softFade 1.2s ease both',
              padding: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.75) 100%)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: 500,
            padding: 36,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              marginBottom: 20,
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.14)',
            }}
          >
            <img
              key={photoList[activePhoto]}
              src={photoList[activePhoto]}
              alt=""
              aria-hidden="true"
              style={{
                width: '100%',
                height: 220,
                objectFit: 'contain',
                objectPosition: 'center',
                display: 'block',
                background: 'linear-gradient(135deg, #fef3c7 0%, #fdf2f8 100%)',
                animation: 'softFade 1.2s ease both',
              }}
            />
          </div>

          <h1 style={{ margin: 0, fontSize: 28, color: '#111827' }}>My Favorite Singer❤️</h1>

          <audio controls style={{ width: '100%', marginTop: 24 }}>
            <source src="/song.m4a" type="audio/mpeg" />
          </audio>

          <p style={{ marginTop: 24, lineHeight: 1.7, color: '#374151' }}>
            “Whenever this song finds you, I hope you're smiling, and I'm still by your side.”
          </p>
        </div>
      </div>
    </main>
  );
}