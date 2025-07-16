import React from 'react';

const Frame11 = ({
  footerText = '© Karrierx Technologies Private Limited | All rights reserved',
  companyName = 'Karrierx Technologies Private Limited',
  companyUrl = 'https://booktranspo.com/'
}) => {
  // Split the text to make the full companyName a link
  const [before, after] = footerText.split(companyName);

  return (
    <div
      style={{
        width: '1440px',
        minHeight: '40px',
        background: 'rgba(15,21,42,1)',
        padding: '6px 321px',
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '376px',
          height: '28px',
          color: 'rgba(255,255,255,1)',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '28px',
          letterSpacing: '-0.05em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center',
        }}
      >
        {before}
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
        >
          {companyName}
        </a>
        {after}
      </div>
    </div>
  );
};

export default Frame11; 