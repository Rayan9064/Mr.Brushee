import React from 'react';

const Footer = () => {
  const footerLinks = [
    'Terms & Policy',
    'Privacy Policy',
    'Shipping Policy',
    'Return Policy',
    'About Us',
    'Contact Us'
  ];

  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center space-x-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;