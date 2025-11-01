import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b">
        {/* Brand Section */}
        <div>
          {/* Brand name (blue gradient) */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            DriveEasy
          </h2>

          <p className="max-w-80 mt-3">
            Car Rental service with a wide collection of cars for your driving
            needs.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <img
              src={assets.instagram_logo}
              className="w-5 h-5"
              alt="Instagram"
            />
            <img
              src={assets.facebook_logo}
              className="w-5 h-5"
              alt="Facebook"
            />
            <img src={assets.gmail_logo} className="w-5 h-5" alt="Gmail" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>ABC Tower, DriveEasy</li>
            <li>PQR, Bangalore</li>
            <li>
              📞{" "}
              <a href="tel:+9112312345" className="hover:text-blue-600">
                +91 123-----45
              </a>
            </li>
            <li>
              ✉️{" "}
              <a href="mailto:car@xyz.com" className="hover:text-blue-600">
                car@xyz.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} DriveEasy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
//success
