import React from "react";
const date = new Date();

const Footer = () => {
  return (
    <footer className="bg-heading">
      <div className="container text-center py-4 border-t border-gray-700">
        <p className="text-[15px]">
          Porto &copy; {date.getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
