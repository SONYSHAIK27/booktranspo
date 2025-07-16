import React from 'react';
import Frame4a1 from './Frame4a1';
import Frame4a2 from './Frame4a2';

const Frame4a = () => {
  return (
    <div
      style={{
        width: '775px',
        minHeight: '606px',
        display: 'flex',
        flexDirection: 'row',
        gap: '22px',
      }}
    >
      {/* Frame4a1 and Frame4a2 will be added here */}
      <Frame4a1 />
      <Frame4a2 />
    </div>
  );
};

export default Frame4a; 