import React from 'react';
import phone1Icon from './assets/phone1.png';

const Menu = () => {
  return (
    <nav
      className="frame-container menu-bar"
      style={{
        height: '130px',
        background: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 70px',
        width: '1440px',
        boxSizing: 'border-box',
      }}
    >
      {/* Left: Logo */}
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginRight: '60px',
        }}
      >
        <img
          src="/logo.png"
          alt="Booktranspo Logo"
          style={{ width: '90px', height: '90px', objectFit: 'contain', borderRadius: '50%', background: 'transparent' }}
        />
      </div>
      {/* Center: Navigation Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '44px',
          height: '23px',
          justifyContent: 'center',
          margin: '0 auto',
          marginRight: '11px',
          marginLeft: '40px',
        }}
      >
        <a
          href="http://192.168.1.7:3000"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '23px',
            letterSpacing: '-0.05em',
            color: '#1E1E1E',
            textDecoration: 'none',
            height: '23px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Home
        </a>
        <a
          href="#why-booktranspo"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '23px',
            letterSpacing: '-0.05em',
            color: '#1E1E1E',
            textDecoration: 'none',
            height: '23px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Why Booktranspo
        </a>
        <a
          href="http://192.168.1.4:3000/delivery-partners"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '23px',
            letterSpacing: '-0.05em',
            color: '#1E1E1E',
            textDecoration: 'none',
            height: '23px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Delivery Partners
        </a>
        <a
          href="#transport-partners"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '23px',
            letterSpacing: '-0.05em',
            color: '#1E1E1E',
            textDecoration: 'none',
            height: '23px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Transport Partners
        </a>
        <a
          href="#join-us"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '23px',
            letterSpacing: '-0.05em',
            color: '#1E1E1E',
            textDecoration: 'none',
            height: '23px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Join Us
        </a>
      </div>
      {/* Right: Contact Us button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: '308px', height: '110px' }}>
        <a href="http://192.168.1.4:3000/" target="_blank" rel="noopener noreferrer">
          <button style={{
            width: '160px',
            height: '48px',
            background: '#16214A',
            color: '#FFF',
            border: 'none',
            borderRadius: '100px',
            padding: '10px',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px 0 rgba(22, 33, 74, 0.10)',
            cursor: 'pointer',
            gap: '4px',
          }}>
            <img src={phone1Icon} alt="Phone" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            Contact Us
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Menu; 