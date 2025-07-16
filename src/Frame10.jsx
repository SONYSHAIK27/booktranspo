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
  companyAddress = 'New Maruthi Nagar, Kothapet, Hyderabad, Telangana 500060',
  companyCIN = 'U4923TTS2025PTC196256',
}) => {
  // Split navLinks into columns for layout
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <div
      style={{
        width: '100%',
        background: '#1C264C',
        padding: '40px 0 0 0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '95%',
          maxWidth: '1600px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          color: '#fff',
          fontFamily: 'Sora, sans-serif',
        }}
      >
        {/* Logo and Contact */}
        <div style={{ minWidth: 320, maxWidth: 350 }}>
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
        <div style={{ display: 'flex', flex: 2, justifyContent: 'center', gap: 80 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {leftLinks.map(link => (
              <a key={link.label} href={link.url} style={{ color: '#fff', textDecoration: 'none', fontWeight: 400, fontSize: 18 }} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {rightLinks.map(link => (
              <a key={link.label} href={link.url} style={{ color: '#fff', textDecoration: 'none', fontWeight: 400, fontSize: 18 }} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ))}
          </div>
        </div>
        {/* Registered Office Info */}
        <div style={{ minWidth: 320, maxWidth: 350 }}>
          <div style={{ fontWeight: 400, fontSize: 18, marginBottom: 8 }}>{officeTitle}</div>
          <hr style={{ border: 'none', borderTop: '1px dashed #fff', margin: '8px 0', width: '100%' }} />
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{companyName}</div>
          <div style={{ fontWeight: 400, fontSize: 16, marginBottom: 12 }}>{companyAddress}</div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>CIN: <span style={{ fontWeight: 400 }}>{companyCIN}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Frame10; 