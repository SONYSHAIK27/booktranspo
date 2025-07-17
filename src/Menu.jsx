import React from 'react';
import phoneIcon from './assets/phone.png';

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
        padding: '0 45px',
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
          justifyContent: 'center',
          marginLeft: '32px',
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
          gap: '64px',
          height: '23px',
          justifyContent: 'center',
        }}
      >
        <a
          href="#home"
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
      {/* Right: Phone image */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '308px', height: '110px', marginRight: '0px' }}>
        <a href="http://192.168.1.4:3000/" target="_blank" rel="noopener noreferrer">
          <img
            src={phoneIcon}
            alt="Contact Us"
            style={{ width: '308px', height: '110px', objectFit: 'contain', borderRadius: '100px', marginTop: '20px', cursor: 'pointer' }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Menu; 