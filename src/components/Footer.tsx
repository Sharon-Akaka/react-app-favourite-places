import React from 'react';

function Footer() {
  const fullName = "Sharon Akaka";
  const currentYear = new Date().getFullYear();

  return (<div className='footer'>
    <p>Created by {fullName}</p>
    <p>Copyright {currentYear}.</p>
  </div>
  );
}

export default Footer;

  // a page footer including - at least - attribution for any images used.