import React from 'react';

const Frame130a = () => {
  return (
    <div
      style={{
        width: '1200px',
        minHeight: '360px',
        display: 'flex',
        flexDirection: 'row',
        gap: '120px',
        boxSizing: 'border-box',
        alignItems: 'center',
        background: 'inherit',
      }}
    >
      <div style={{ background: '#D23429', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '320px' }}>
        <img
          src="/frame130.png"
          alt="Frame130"
          style={{ height: '320px', borderRadius: '16px' }}
        />
      </div>
      {/* Additional Frame130a content goes here */}
    </div>
  );
};

export default Frame130a; 