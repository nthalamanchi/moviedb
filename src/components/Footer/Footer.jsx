import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-3">
      <p>&copy; {new Date().getFullYear()} MOVIEDB</p>
    </footer>
  );
};

export default Footer;
