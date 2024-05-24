import React from 'react';
import flower from '../../assets/images/gallery/6214174.jpg';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#A5AA9C'}} className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-content">
          <div className="couple-name">
            <img src={flower} alt="flower" />
            <h2 style={{color: 'black'}}>K <span>&</span> I</h2>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
