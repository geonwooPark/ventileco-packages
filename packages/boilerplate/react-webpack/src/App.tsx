import React from 'react';
import Router from './routes/route';
import './index.css';
import Rocket from '@assets/svgs/rocket.svg';
import bg from '@assets/images/background.jpg';

export default function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(' + bg + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: -1,
        }}
      />
      <Rocket />
      <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '10px' }}>WELCOME!</h1>
    </div>

    // <Router/>
  );
}
