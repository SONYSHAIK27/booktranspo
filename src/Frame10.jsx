import React from 'react';

// Example usage:
// <Frame10 ... />

const defaultNavLinks = [
  { label: 'Home', url: 'https://booktranspo.com/' },
  { label: 'About Us', url: 'https://booktranspo.com/' },
  { label: 'Delivery Partners', url: 'https://booktranspo.com/' },
  { label: 'Transport Partners', url: 'https://booktranspo.com/' },
  { label: 'Join Us', url: 'https://booktranspo.com/' },
  { label: 'Privacy Policy', url: 'https://booktranspo.com/' },
  { label: 'Terms and Conditions', url: 'https://booktranspo.com/' },
  { label: 'Refund Policy', url: 'https://booktranspo.com/' },
];

const Frame10 = ({
  logoSrc = '/logo.png',
  email = 'help@booktranspo.com',
  phone = '+91 8019 118143',
  navLinks = defaultNavLinks,
  officeTitle = 'Registered Office:',
  companyName = 'Karrierx Technologies Private Limited',
  companyAddress = 'New Maruthi Nagar, Kothapet, Hyderabad,\nTelangana 500060',
  companyCIN = 'U4923TTS2025PTC196256',
}) => {
  // Split navLinks into columns for layout
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <div
      style={{
        width: '1440px',
        margin: '0 auto',
        height: '338px',
        background: '#1C264C',
        padding: '70px 70px 20px 70px',
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '1301px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          gap: '80px',
          alignItems: 'flex-start',
          color: '#fff',
          fontFamily: 'Sora, sans-serif',
        }}
      >
        {/* Logo and Contact */}
        <div style={{ minWidth: 250, maxWidth: 250 }}>
          <img src={logoSrc} alt="Logo" style={{ width: 120, height: 120, borderRadius: '50%', background: '#fff', marginBottom: 16 }} />
          <hr style={{ border: 'none', borderTop: '1px dashed #fff', margin: '16px 0', width: '100%' }} />
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontWeight: 700 }}>Email:</span> <a href={`mailto:${email}`} style={{ color: '#fff', textDecoration: 'none' }}>{email}</a>
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Phone:</span> <a href={`tel:${phone}`} style={{ color: '#fff', textDecoration: 'none' }}>{phone}</a>
          </div>
        </div>
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: 80 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {leftLinks.map(link => (
              <a key={link.label} href={link.url} style={{ color: '#fff', textDecoration: 'none', fontWeight: 400, fontSize: 18 }} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {rightLinks.map(link => (
              <a key={link.label} href={link.url} style={{ color: '#fff', textDecoration: 'none', fontWeight: 400, fontSize: 18 }} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ))}
          </div>
        </div>
        {/* Registered Office Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontWeight: 400, fontSize: 16, marginBottom: 2 }}>{officeTitle}</div>
          <hr style={{ border: 'none', borderTop: '1px dashed #fff', margin: '2px 0 6px 0', width: '100%' }} />
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 0 }}>{companyName}</div>
          <div style={{ fontWeight: 400, fontSize: 15, marginBottom: 12, whiteSpace: 'pre-line', lineHeight: 1.2 }}>{companyAddress}</div>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 0 }}>CIN: <span style={{ fontWeight: 400 }}>{companyCIN}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Frame10; 