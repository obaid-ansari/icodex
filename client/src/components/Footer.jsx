import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary shadow-sm text-light text-center py-3">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} iCodex. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
