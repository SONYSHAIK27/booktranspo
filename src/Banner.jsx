import React from 'react';
import Frame70 from './Frame70';

const Banner = () => {
  return (
    <div
      style={{
        width: '1440px',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: '0 auto',
        background: 'rgba(210, 52, 41, 1)',
        position: 'relative',
      }}
    >
      <Frame70 />
    </div>
  );
};

export default Banner; 