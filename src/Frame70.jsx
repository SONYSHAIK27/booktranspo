import React from 'react';
import Frame69 from './Frame69';

const Group44 = () => {
  return (
    <div style={{ position: 'relative', width: '475.73px', height: '322px', background: 'rgba(210, 52, 41, 1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src="/top_img.png"
        alt="Top Img"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

const Frame70 = () => {
  return (
    <div
      style={{
        width: '1033px',
        minHeight: '322px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      {/* LEFT: Heading + Frame69 stacked vertically */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'transparent' }}>
        <div
          style={{
            width: '366px',
            height: '76px',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '38px',
            letterSpacing: '-0.05em',
            textTransform: 'capitalize',
            color: '#FFF',
            marginBottom: '16px',
          }}
        >
          From Local Loads To Long Routes – We’ve Got You.
        </div>
        <Frame69 />
      </div>
      {/* RIGHT: Group44 image */}
      <Group44 />
    </div>
  );
};

export default Frame70; 