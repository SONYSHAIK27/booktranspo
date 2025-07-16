import React from 'react';

const Frame69 = () => {
  return (
    <div
      style={{
        width: '382px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        height: 'auto',
      }}
    >
      <div
        style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '42px',
          letterSpacing: '-0.05em',
          textTransform: 'capitalize',
          color: '#FFF',
          width: '382px',
          height: '84px',
        }}
      >
        From Local Loads to Long Routes – We’ve Got You.
      </div>
      {/* Dashed line */}
      <div
        style={{
          width: '382px',
          height: '0px',
          borderBottom: '1px dashed #FFF',
          borderColor: '#FFF',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderRadius: 0,
          alignSelf: 'center',
          margin: 0,
          background: 'none',
          boxSizing: 'border-box',
          borderImage: 'repeating-linear-gradient(90deg, #FFF 0 2px, transparent 2px 4px) 1',
        }}
      />
      {/* Description */}
      <div
        style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '28px',
          letterSpacing: '-0.05em',
          color: '#FFF',
          width: '382px',
          height: '84px',
        }}
      >
        From shop to doorstep or city to city, we’ve got it covered. Instant vehicle booking tailored for your delivery needs.
      </div>
    </div>
  );
};

export default Frame69; 