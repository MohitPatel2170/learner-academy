import React from 'react';
import './LearnerPlatform.css';

const LearnerPlatform = () => {
  return (
    <div className="learner-platform">
      <div className="platform-container">
        <div className="intro-section">
          <h1 className="heading">Start learning with Learner Academy</h1>
          <p className="subheading">Get unlimited access to structured courses & doubt clearing sessions</p>
          <button className="start-button">Start learning</button>
        </div>

        <div className="stats-section">
          <div className="stats-row">
            <div className="stats-box">
              <span className="stats-label">Exam categories</span>
              <div className="stats-value">
                60<span className="plus-mark">+</span>
              </div>
              <div className="icon book-icon"></div>
            </div>

            <div className="stats-box educator-box">
              <span className="stats-label">Educators</span>
              <div className="stats-value">
                14k<span className="plus-mark">+</span>
              </div>
              <div className="icon educator-icon"></div>
            </div>
          </div>

          <div className="stats-column">
            <div className="stats-box">
              <span className="stats-label">Daily live classes</span>
              <div className="stats-value">
                1.5k<span className="plus-mark">+</span>
              </div>
              <div className="icon live-icon"></div>
              </div>

<div className="stats-box">
  <span className="stats-label">Video lessons</span>
  <div className="stats-value">
    1M<span className="plus-mark">+</span>
  </div>
  <div className="icon video-icon"></div>
</div>

<div className="stats-box">
  <span className="stats-label">Mins. watched</span>
  <div className="stats-value">
    3.2B<span className="plus-mark">+</span>
  </div>
  <div className="icon watched-icon"></div>
</div>
</div>
</div>
</div>
</div>
);
};

export default LearnerPlatform;
