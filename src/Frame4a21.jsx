import React from 'react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.booktranspo.users';

const Frame4a21 = () => {
  return (
    <div
      style={{
        width: '366px',
        minHeight: '493px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        boxSizing: 'border-box',
        paddingTop: '72px',
        paddingBottom: '32px',
      }}
    >
      {/* Heading */}
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
          marginBottom: '8px',
          color: 'rgba(22,17,13,1)',
          textAlign: 'left',
        }}
      >
        <span style={{ color: 'rgba(238,66,55,1)' }}>A new way to move goods</span><br />
        <span style={{ color: '#1C264C' }}>Tap. Track. Done.</span>
      </div>
      {/* Dashed line */}
      <hr
        style={{
          width: '366px',
          border: 'none',
          borderTop: '1px dashed rgba(22,17,13,1)',
          margin: '0 0 12px 0',
          height: 0,
        }}
      />
      {/* Bullet list */}
      <ul
        style={{
          width: '366px',
          color: 'rgba(22,17,13,1)',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '28px',
          letterSpacing: '-0.05em',
          margin: 0,
          marginBottom: '12px',
          paddingLeft: '20px',
          textAlign: 'left',
        }}
      >
        <li>Book mini truck in seconds</li>
        <li>Choose your pickup & drop location and</li>
        <li>Select the desired vehicle.</li>
        <li>Select the respected highly ranked</li>
        <li>Transporters from our list</li>
        <li>We’ll take care of the rest.</li>
      </ul>
      {/* Dashed line */}
      <hr
        style={{
          width: '366px',
          border: 'none',
          borderTop: '1px dashed rgba(22,17,13,1)',
          margin: '0 0 20px 0',
          height: 0,
        }}
      />
      {/* Input label */}
      <div
        style={{
          width: '358px',
          height: '32px',
          borderRadius: '100px',
          border: '1px dashed rgba(238,66,55,1)',
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,235,234,1) 100%)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '16px',
          paddingRight: '16px',
          marginBottom: '0',
          boxSizing: 'border-box',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          color: 'rgba(28,38,76,1)',
          letterSpacing: '-0.05em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Enter mobile number to get app link via SMS.
      </div>
      {/* Input box */}
      <div
        style={{
          width: '358px',
          height: '32px',
          borderRadius: '100px',
          border: '1px dashed rgba(238,66,55,1)',
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,235,234,1) 100%)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '16px',
          paddingRight: '16px',
          gap: '10px',
          margin: '8px 0 20px 0',
          boxSizing: 'border-box',
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
            color: 'rgba(22,17,13,1)',
          }}
        />
      </div>
      {/* Dashed line */}
      <hr
        style={{
          width: '366px',
          border: 'none',
          borderTop: '1px dashed rgba(22,17,13,1)',
          margin: '0 0 16px 0',
          height: 0,
        }}
      />
      {/* Google Play button */}
      <div style={{ width: '180px', marginLeft: 0 }}>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', width: '100%', textDecoration: 'none', border: 'none', background: 'none', padding: 0 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </a>
      </div>
    </div>
  );
};

export default Frame4a21; 