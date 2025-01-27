import React from "react";
import "./RigntCard.css";

function Cards() {
  return (
    <div className="right-side-card">
      <div className="cards-container">
        {/* Card 1 */}
        <div className="rightcard">
          <h3>Mood Today</h3>
          <p>Help us understand how you feel today</p>
          <div className="mood-circles">
            <div>
              <div className="rightcircle"></div>
              <p>Terrrible</p>
            </div>
            <div>
              <div className="rightcircle"></div>
              <p>Bad</p>
            </div>
            <div>
              <div className="rightcircle"></div>
              <p>Okay</p>
            </div>
          </div>
          <div className="mood-circles">
            <div>
              <div className="rightcircle"></div>
              <p>Good</p>
            </div>
            <div>
              <div className="rightcircle"></div>
              <p>Amazing</p>
            </div>
          </div>
          <p className="feeling">Feeling Something else?</p>
        </div>

        {/* Card 2 */}
        <div className="rightcard-2">
          <div className="rightcard-2-heading">
            <h1>Participation Metric</h1>
            <p>View All</p>
          </div>
          <div className="metrics">
            <div>
              <span>
                300 <br /> <p>Active Users</p>
              </span>
              <span>
                75 <br /> <p>Inactive</p>
              </span>
            </div>
            <hr />
            <div>
              <span>
                75 <br /> <p>Signup</p>
              </span>
              <span>
                300 <br /> <p>Invited</p>
              </span>
            </div>
          </div>
        </div>

        {/* {card-3} */}
        <div className="rightcard-feedback">
          <div className="card-header">
            <div className="card-title">
              <h3>Feedback</h3>
              <div className="circle-badge">5</div>
            </div>
            <p className="feedback-date">15 April 2024</p>
          </div>
          <div className="feedback-content">
            <div className="rightcircle"></div>
            <div className="feedback-text">
              <p>
                <strong>Helena</strong> Requested feedback on
              </p>
              <p className="feedback-title">Presentation</p>
            </div>
          </div>
          <button className="primary-button">Share Your Views</button>
          <div className="view-all">
            <p>⬇ View All</p>
          </div>
        </div>

        <div className="rightcard-feedback">
          <div className="card-header">
            <div className="card-title">
              <h3>Pulse Survey</h3>
              <div className="circle-badge">5</div>
            </div>
            <p className="feedback-date">15 April 2024</p>
          </div>
          <div className="feedback-content">
            <div className="rightcircle"></div>
            <div className="feedback-text">
              <p>
                <strong>Helena</strong> Requested feedback on
              </p>
              <p className="feedback-title">Growth-hacks</p>
            </div>
          </div>
          <button className="primary-button">Take Survey</button>
          <div className="view-all">
            <p>⬇ Load More</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="badge-card">
          <h3 className="Reconnect-title">Reconnect with a Tap</h3>
          <p className="badge-description">
            its been a while since colleages recived a tap from you
          </p>

          <div className="badge-week">
            <div className="bedge-week-container reconnect-profile">
              <p className="circle small"></p>
              <div>
                <span>Alisha Mehta</span>
                <p>Last Tapped on 15 Aprail 2024</p>
              </div>

              <span className="Reconnect-tap">Send a Tap</span>
            </div>
          </div>
          <div className="badge-week">
            <div className="bedge-week-container reconnect-profile">
              <p className="circle small"></p>
              <div>
                <span>Nisha Jain</span>
                <p>Last Tapped on 15 Aprail 2024</p>
              </div>

              <span className="Reconnect-tap">Send a Tap</span>
            </div>
          </div>
          <div className="badge-week">
            <div className="bedge-week-container reconnect-profile">
              <p className="circle small  "></p>
              <div>
                <span>John Smit Doe</span>
                <p>Last Tapped on 15 Aprail 2024</p>
              </div>

              <span className="Reconnect-tap">Send a Tap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
