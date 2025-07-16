import React from 'react';

const Frame71a = () => {
  return (
    <div
      style={{
        width: '366px',
        minHeight: '493px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
          color: '#1C264C',
          marginBottom: '16px',
        }}
      >
        <span style={{ color: '#EE4237' }}>A new way to move goods</span> Tap. Track. Done.
      </div>
      {/* Dashed line */}
      <hr
        style={{
          width: '366px',
          border: 'none',
          borderTop: '1px dashed #16110D',
          marginBottom: '16px',
        }}
      />
      {/* Bullet list */}
      <ul
        style={{
          width: '366px',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '28px',
          letterSpacing: '-0.05em',
          color: '#16110D',
          margin: 0,
          marginBottom: '16px',
          paddingLeft: '20px',
        }}
      >
        <li>Book mini truck in seconds</li>
        <li>Choose your pickup & drop location and</li>
        <li>Select the desired vehicle.</li>
        <li>Select the respected highly ranked</li>
        <li>Transporters from our list</li>
        <li>We’ll take care of the rest.</li>
      </ul>
      {/* Second dashed line */}
      <hr
        style={{
          width: '366px',
          border: 'none',
          borderTop: '1px dashed #16110D',
          marginBottom: '16px',
        }}
      />
      {/* Frame72: Input box */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '358px',
          height: '46px',
          borderRadius: '100px',
          border: '1.5px solid #ED4237',
          paddingLeft: '16px',
          paddingRight: '16px',
          gap: '10px',
          marginBottom: '16px',
          background: '#FFF',
        }}
      >
        <span style={{ fontSize: '20px', marginRight: '4px' }}>🇮🇳</span>
        <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#16110D', marginRight: '4px' }}>+91</span>
        <input
          type="text"
          placeholder="Enter mobile number to get app link via SMS."
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'Sora, sans-serif',
            fontSize: '16px',
            color: '#16110D',
          }}
        />
      </div>
      {/* Additional Frame71a content goes here */}
    </div>
  );
};

export default Frame71a; 