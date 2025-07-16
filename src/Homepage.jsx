import React from 'react';
import Topbar from './Topbar';
import Menu from './Menu';
import Banner from './Banner';
import Frame4 from './Frame4';
import Frame130 from './Frame130';
import Frame6 from './Frame6';
import Frame7 from './Frame7';
import Frame8 from './Frame8';
import Frame9 from './Frame9';
import Frame10 from './Frame10';
import Frame11 from './Frame11';

function Homepage() {
  return (
    <div
      style={{
        width: '1440px',
        height: '4677px',
        margin: '0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Topbar />
      <Menu />
      <Banner />
      <Frame4 />
      <Frame130 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      {/* Add future frames here as you create them */}
    </div>
  );
}

export default Homepage; 