import React from 'react';
import './Information.css';

// Import your images here
// import liveClassImage from './images/live-class.png';
// import practiceImage from './images/practice.png';
// import learnAnywhereImage from './images/learn-anywhere.png';

const Information = () => {
  return (
    <div className="information-container">
      <div className="feature-card">
        <div className="image-container blue-bg">
          {/* You can replace this with an actual image */}
          <div className="placeholder-image">
            <div className="screen-ui">
              <div className="ui-header">
                <div className="dropdown-icon"></div>
              </div>
              <div className="profile-card orange"></div>
              <div className="bar-chart">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="text-lines">
                <div className="line green"></div>
              </div>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="emoji-bar">
              <span className="emoji">👋</span>
              <span className="emoji">🤔</span>
              <span className="emoji">👍</span>
              <span className="emoji">🙏</span>
              <span className="emoji">?</span>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h2>Daily live classes</h2>
          <p>Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="image-container pink-bg">
          {/* You can replace this with an actual image */}
          <div className="placeholder-image">
            <div className="floating-labels">
              <div className="label">QUIZ</div>
              <div className="label">LIVE</div>
              <div className="label">PDF</div>
              <div className="label">TEST</div>
            </div>
            <div className="ui-card">
              <div className="ui-header">
                <div className="dropdown-icon"></div>
              </div>
              <div className="profile-row">
                <div className="mini-profile orange"></div>
                <div className="mini-profile pink"></div>
                <div className="mini-profile blue"></div>
              </div>
              <div className="text-content-ui">
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="button-row">
                <div className="button blue"></div>
                <div className="button green"></div>
                <div className="button orange"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h2>Practice and revise</h2>
          <p>Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p>
        </div>
      </div>

      <div className="feature-card">
        <div className="image-container yellow-bg">
          {/* You can replace this with an actual image */}
          <div className="placeholder-image">
            <div className="corner-card"></div>
            <div className="device-display">
              <div className="ui-header">
                <div className="dropdown-icon"></div>
              </div>
              <div className="profile-card-small pink"></div>
              <div className="profile-card-small green"></div>
              <div className="list-items">
                <div className="list-item">
                  <div className="dot red"></div>
                  <div className="line"></div>
                </div>
                <div className="list-item">
                  <div className="dot green"></div>
                  <div className="line"></div>
                </div>
                <div className="list-item">
                  <div className="dot green"></div>
                  <div className="line"></div>
                </div>
                <div className="list-item">
                  <div className="dot green"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-content">
          <h2>Learn anytime, anywhere</h2>
          <p>One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</p>
        </div>
      </div>
    </div>
  );
};

export default Information;