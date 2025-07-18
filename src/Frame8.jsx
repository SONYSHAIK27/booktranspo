import React from 'react';

const Frame8 = () => {
  return (
    <div
      style={{
        width: '1440px',
        height: '544px',
        background: 'rgba(255,255,255,1)',
        padding: '69px 173px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src="/frame8.png"
        alt="Frame 8"
        style={{
          width: '1094px',
          height: '326px',
          objectFit: 'cover',
          background: 'rgba(255,255,255,1)',
          borderRadius: '0px',
        }}
      />
    </div>
  );
};

export default Frame8; 