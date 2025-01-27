import React from "react";
import "./LeftCard.css";
import { IoIosArrowForward } from "react-icons/io";

function LeftCard() {
  return (
    <div className="card">
      {/* Profile Card */}
      <div className="Profile-Card">
        <div className="card-header">
          <div className="profile-circle"></div>
          <div className="card-info">
            <h3>John Doe</h3>
            <p>Software Engineer</p>
          </div>
        </div>
        <hr />
        <div className="Profile-description">
          <h3>Almost There</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ducimus.
          </p>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: "75%" }}></div>

          <p className="progress-label">Profile Intermediate</p>
        </div>
      </div>

      {/* Reward Wallet Card */}
      <div className="reward-wallet-card">
        <div className="reward-header">
          <h3 className="reward-title">Reward Wallet</h3>
          <button>View History</button>
        </div>
        <div className="reward-info">
          <p className="reward-description">What is reward balance you get</p>
          <div className="reward-date">
            <span>Used by: 30 April</span>
          </div>
          <div className="reward-amount">
            <div>
              <p>₹ 3800</p>
              <span>Available to Share</span>
            </div>
            <button className="give-tap-btn">Give a Tap</button>
          </div>
        </div>

        <div className="reward-footer">
          <div>
            <p>₹5202</p>
            <span>Reedeemable</span>
          </div>
          <button className="give-tap-btn">Reedeem</button>
        </div>
      </div>

      {/* 75 Taps Section */}
      <div className="taps-section">
        <h3 className="taps-heading">75 Taps</h3>
        <p className="taps-description">Received in Mail</p>
        <p className="leaderboard-title">Leaderboard</p>
        <p>About Leaderboard goes here...</p>
        <div className="taps-days">
          <p>Week</p>
          <p>Month</p>
          <p>Quarter</p>
          <p>Year</p>
        </div>

        <div className="leaderboard">
          <div className="circle-container">
            <div className="circle-description">
              <div className="circle small"></div>
              <p className="name">Lela</p>
              <p className="amount">1200</p>
            </div>
            <div className="circle-description">
              <div className="circle large"></div>
              <p className="name">Lela</p>
              <p className="amount">1200</p>
            </div>
            <div className="circle-description">
              <div className="circle small"></div>
              <p className="name">Lela</p>
              <p className="amount">1200</p>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="transactions">
          <div className="transaction">
            <p className="circle small"></p>
            <p className="transaction-amount">₹500</p>
          </div>
          <div className="transaction">
            <p className="circle small"></p>
            <p className="transaction-amount">₹500</p>
          </div>
          <div className="transaction">
            <p className="circle small"></p>
            <p className="transaction-amount">₹500</p>
          </div>
          <div className="transaction">
            <p className="circle small"></p>
            <p className="transaction-amount">₹500</p>
          </div>
          <div className="transaction">
            <p className="circle small"></p>
            <p className="transaction-amount">₹500</p>
          </div>
        </div>
      </div>

      {/* Top Badge Received Section */}
      <div className="badge-card">
        <h3 className="badge-title">Top Badge Received</h3>
        <p className="badge-description">Track the badge you earned</p>
        <div className="taps-days">
          <p>Week</p>
          <p>Month</p>
          <p>Quarter</p>
          <p>Year</p>
        </div>

        <div className="badge-week">
          <div className="bedge-week-container">
            <p className="circle small"></p>
            <span>Good Vibes</span>

            <span>8</span>
          </div>
        </div>
        <div className="badge-week">
          <div className="bedge-week-container">
            <p className="circle small"></p>
            <span>Customer Services</span>

            <span>8</span>
          </div>
        </div>
        <div className="badge-week">
          <div className="bedge-week-container">
            <p className="circle small"></p>
            <span>Building The Future</span>

            <span>8</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCard;
