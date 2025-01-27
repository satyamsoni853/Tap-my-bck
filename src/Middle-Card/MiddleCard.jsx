import React from "react";
import "./MiddleCard.css";
import { MdOutlineThumbUp } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

function MiddleCard() {
  return (
    <div className="middle-card">
      <div className="middle-container">
        <div className="send-inputbar">
          <label htmlFor="">Ready to send a tap</label>
          <input
            type="text"
            placeholder="Enter a colleague or team name here..."
          />
        </div>
        <div className="search-bar">
          <div className="search-input">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              placeholder="Search by name, badge, etc..."
            />
          </div>
          <div className="filter">
            <p>Filter By</p>
            <div className="filter-options">
              <div className="filter-item">
                <p>
                  {" "}
                  <div className="white-circle"></div>Badge
                </p>
              </div>
              <div className="filter-item">
                <p>
                  {" "}
                  <div className="white-circle"></div>Teams
                </p>
              </div>
              <div className="filter-item">
                <p>
                  {" "}
                  <div className="white-circle"></div>Name
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-card">
          <div className="card-header">
            <div className="user-info">
              <div className="user-avatar"></div>
              <div className="user-avatar-2"></div>
              <p>
                <p>
                  <strong>Sam Adams</strong> received{" "}
                 
                  Tap
                </p>
                <br />

                <span className="subtext">by Kylie Spencer</span>
              </p>
            </div>
            <div className="timestamp">20 April 2019 - 19:10</div>
          </div>
          <div className="card-content">
            <p>Good job with those stakeholder's presentation</p>
          </div>
          <div className="card-actions">
            <button className="action-btn"> <MdOutlineThumbUp/> Like</button>
            <button className="action-btn"> <FaRegComment/> Comment</button>
          </div>
          <div className="comment-section">
            <div className="comment-avatar"></div>
            <label htmlFor="">Add a Comment</label>
            <input type="text" placeholder="Type here..." />
          </div>
        </div>
        <div className="feedback-card">
          <div className="card-header">
            <div className="user-info">
              <div className="user-avatar"></div>
              <div className="user-avatar-3"></div>
              <p>
                <p>
                  <strong>Sam Adams</strong> received{" "}
                 
                  Tap
                </p>
                <br />

                <span className="subtext">by Kylie Spencer</span>
              </p>
            </div>
            <div className="timestamp">20 April 2019 - 19:10</div>
          </div>
          <div className="card-content">
            <p>Good job with those stakeholder's presentation</p>
          </div>
          <div className="card-actions">
            <button className="action-btn"> <MdOutlineThumbUp/> Like</button>
            <button className="action-btn"> <FaRegComment/> Comment</button>
          </div>
          <div className="comment-section">
            <div className="comment-avatar"></div>
            <label htmlFor="">Add a Comment</label>
            <input type="text" placeholder="Type here..." />
          </div>
        </div>
       
        
      </div>
    </div>
  );
}

export default MiddleCard;
