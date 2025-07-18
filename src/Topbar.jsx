import React from 'react';

const fireIcon = <span style={{ margin: '0 4px' }}>🔥</span>;

const Topbar = () => {
  return (
    <div className="frame-container" style={{ height: '48px', background: '#FFEDEA', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', padding: '10px 0', width: '1440px', margin: '0 auto' }}>
      <span
        style={{
          color: '#1C264C',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '48px',
          letterSpacing: '-0.05em',
          textTransform: 'capitalize',
          whiteSpace: 'nowrap',
        }}
      >
        {fireIcon} Goods to go near or far booktranspo is here! {fireIcon}
      </span>
    </div>
  );
};

export default Topbar; 