import React from "react";
import "./Navbarr.css";

function Navbarr() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <ul className="navbar-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Announcement</a>
              </li>
              <li>
                <a href="#">Survey</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Manage Account</a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="navbar-right">
            {/* Notification Icon */}
            <button className="notification">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h11z"
                />
              </svg>
              {/* Notification Badge */}
              <span className="badge">3</span>
            </button>

            {/* Profile Circle */}
            <div className="profile-circle"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarr;
