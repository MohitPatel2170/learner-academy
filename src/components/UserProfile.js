import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // Sample data - in real app would come from API/backend
  const enrolledCourses = [
    { id: 1, title: "Introduction to Programming", progress: 75, lastAccessed: "Yesterday", category: "Computer Science" },
    { id: 2, title: "Web Development Fundamentals", progress: 45, lastAccessed: "3 days ago", category: "Development" },
    { id: 3, title: "Mathematics for Engineers", progress: 20, lastAccessed: "1 week ago", category: "Mathematics" }
  ];
  
  const achievements = [
    { id: 1, title: "Fast Learner", description: "Completed 5 lessons in one day", icon: "🚀", date: "April 1, 2025" },
    { id: 2, title: "Perfect Score", description: "100% on quiz", icon: "🏆", date: "March 28, 2025" },
    { id: 3, title: "Consistent Effort", description: "Studied for 7 days in a row", icon: "🔥", date: "March 25, 2025" }
  ];
  
  const recommendedCourses = [
    { id: 4, title: "Advanced JavaScript", category: "Development", difficulty: "Intermediate", rating: 4.8 },
    { id: 5, title: "Data Science Fundamentals", category: "Data Science", difficulty: "Beginner", rating: 4.9 },
    { id: 6, title: "Mobile App Development", category: "Development", difficulty: "Advanced", rating: 4.7 }
  ];
  
  const notifications = [
    { id: 1, message: "New assignment added to Web Development course", time: "2 hours ago", read: false },
    { id: 2, message: "Your quiz result is now available", time: "Yesterday", read: true },
    { id: 3, message: "New course recommendation based on your interests", time: "2 days ago", read: true }
  ];

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            <span>{user.username.charAt(0).toUpperCase()}</span>
          </div>
          <h2>{user.username}</h2>
          <p className="user-role">{user.role}</p>
          <div className="membership-badge">Premium Member</div>
        </div>
        
        <nav className="profile-nav">
          <button 
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`nav-btn ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            My Courses
          </button>
          <button 
            className={`nav-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
          <button 
            className={`nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </nav>
        
        <div className="study-stats">
          <h3>Study Stats</h3>
          <div className="stats-item">
            <span className="stats-label">Study Streak</span>
            <span className="stats-value">7 days</span>
          </div>
          <div className="stats-item">
            <span className="stats-label">Weekly Goal</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '65%' }}></div>
            </div>
            <span className="progress-text">65% complete</span>
          </div>
        </div>
      </div>
      
      <div className="profile-main">
        <div className="profile-header">
          <div className="greeting-section">
            <h1>Welcome back, {user.username}!</h1>
            <p>Ready to continue your learning journey?</p>
          </div>
          
          <div className="action-buttons">
            <button className="notification-btn">
              🔔 <span className="notification-badge">{notifications.filter(n => !n.read).length}</span>
            </button>
            <button className="settings-btn">⚙️</button>
          </div>
        </div>
        
        {activeTab === 'dashboard' && (
          <div className="dashboard-content">
            <div className="quick-actions">
              <button className="action-btn">Resume Learning</button>
              <button className="action-btn">Find New Courses</button>
              <button className="action-btn">Review Materials</button>
              <button className="action-btn">Practice Tests</button>
            </div>
            
            <div className="daily-goal">
              <h3>Daily Goal</h3>
              <div className="goal-progress">
                <svg viewBox="0 0 100 100" className="progress-ring">
                  <circle cx="50" cy="50" r="45" className="progress-ring-bg" />
                  <circle cx="50" cy="50" r="45" className="progress-ring-circle" style={{ strokeDashoffset: `${(1 - 0.7) * 283}` }} />
                </svg>
                <div className="progress-text">
                  <span className="progress-percentage">70%</span>
                  <span>Complete</span>
                </div>
              </div>
              <p>30 more minutes to reach your daily goal</p>
            </div>
            
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <p className="timeline-content">Completed "Functions" lesson in Introduction to Programming</p>
                  <span className="timeline-time">2 hours ago</span>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <p className="timeline-content">Scored 85% on "HTML Basics" quiz</p>
                  <span className="timeline-time">Yesterday</span>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <p className="timeline-content">Started "CSS Grid" lesson</p>
                  <span className="timeline-time">2 days ago</span>
                </div>
              </div>
            </div>
            
            <div className="course-progress">
              <div className="section-header">
                <h3>Current Courses</h3>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="course-cards">
                {enrolledCourses.map(course => (
                  <div className="course-card" key={course.id}>
                    <div className="course-info">
                      <h4>{course.title}</h4>
                      <span className="course-category">{course.category}</span>
                      <div className="course-progress-bar">
                        <div className="progress" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <div className="progress-detail">
                        <span>{course.progress}% complete</span>
                        <span>Last accessed: {course.lastAccessed}</span>
                      </div>
                    </div>
                    <button className="continue-btn">Continue</button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="recommended-section">
              <div className="section-header">
                <h3>Recommended For You</h3>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="recommended-courses">
                {recommendedCourses.map(course => (
                  <div className="recommended-card" key={course.id}>
                    <div className="course-thumbnail"></div>
                    <div className="recommended-info">
                      <h4>{course.title}</h4>
                      <div className="course-meta">
                        <span className="course-category">{course.category}</span>
                        <span className="course-difficulty">{course.difficulty}</span>
                        <span className="course-rating">★ {course.rating}</span>
                      </div>
                      <button className="enroll-btn">Enroll Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'courses' && (
          <div className="courses-content">
            <h2>My Enrolled Courses</h2>
            <div className="filter-options">
              <button className="filter-btn active">All Courses</button>
              <button className="filter-btn">In Progress</button>
              <button className="filter-btn">Completed</button>
              <button className="filter-btn">Archived</button>
            </div>
            
            <div className="expanded-courses">
              {enrolledCourses.map(course => (
                <div className="expanded-course-card" key={course.id}>
                  <div className="course-thumbnail"></div>
                  <div className="expanded-course-info">
                    <h3>{course.title}</h3>
                    <span className="course-category">{course.category}</span>
                    <div className="progress-section">
                      <div className="course-progress-bar">
                        <div className="progress" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <span>{course.progress}% complete</span>
                    </div>
                  </div>
                  <div className="course-actions">
                    <button className="primary-btn">Continue</button>
                    <button className="secondary-btn">Materials</button>
                    <button className="secondary-btn">Discussion</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'achievements' && (
          <div className="achievements-content">
            <h2>Your Achievements</h2>
            
            <div className="stats-summary">
              <div className="stat-card">
                <span className="stat-value">12</span>
                <span className="stat-label">Achievements</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">3</span>
                <span className="stat-label">Courses Completed</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">87%</span>
                <span className="stat-label">Average Score</span>
              </div>
            </div>
            
            <div className="badges-section">
              <h3>Earned Badges</h3>
              <div className="badges-grid">
                {achievements.map(achievement => (
                  <div className="badge-card" key={achievement.id}>
                    <div className="badge-icon">{achievement.icon}</div>
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                    <span className="badge-date">Earned on {achievement.date}</span>
                  </div>
                ))}
                <div className="badge-card locked">
                  <div className="badge-icon">🔒</div>
                  <h4>Master Coder</h4>
                  <p>Complete all programming courses</p>
                  <span className="badge-date">Locked</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="settings-content">
            <h2>Account Settings</h2>
            
            <div className="settings-section">
              <h3>Profile Information</h3>
              <form className="settings-form">
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" defaultValue={user.username} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" defaultValue="user@example.com" />
                </div>
                <div className="form-group">
                  <label>Bio</label>
                  <textarea placeholder="Tell us about yourself"></textarea>
                </div>
                <button type="submit" className="save-btn">Save Changes</button>
              </form>
            </div>
            
            <div className="settings-section">
              <h3>Notification Preferences</h3>
              <div className="notification-settings">
                <div className="notification-option">
                  <div>
                    <h4>Course Updates</h4>
                    <p>Get notified about new lessons and course updates</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="notification-option">
                  <div>
                    <h4>Assignment Reminders</h4>
                    <p>Receive reminders about upcoming assignments</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="notification-option">
                  <div>
                    <h4>Newsletter</h4>
                    <p>Weekly newsletter with learning tips and new courses</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;