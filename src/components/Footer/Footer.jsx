import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-brand">FR</span>
          <span className="footer-dot">·</span>
          <span className="footer-role">Software Developer</span>
        </div>

        <div className="footer-right">
          <span className="footer-year">{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
