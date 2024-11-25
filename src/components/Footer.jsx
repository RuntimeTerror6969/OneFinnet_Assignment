import React from "react";

const Footer = ({ footerRef }) => {
  return (
    <footer ref={footerRef} className="bg-gray-100 ">
      <div className="container mx-auto px-4 py-8 justify-center items-centerw   text-center">
        <p>&copy; 2024 SwiftRide Cycles. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
