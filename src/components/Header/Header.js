import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">GenC Hub</span>
          <span className="logo-subtext">Admin Panel</span>
        </div>
        <button className="see-plans-btn">See plans</button>
      </div>
      
      <div className="header-right">
        <button className="header-icon-btn" title="Notifications">
          <span>🔔</span>
        </button>
        <button className="header-icon-btn" title="Inbox">
          <span>📬</span>
        </button>
        <button className="header-icon-btn" title="Invite">
          <span>👥</span>
        </button>
        <button className="header-icon-btn" title="Apps">
          <span>⚙️</span>
        </button>
        <button className="header-icon-btn" title="Updates">
          <span>⏰</span>
        </button>
        <button className="header-icon-btn" title="Search">
          <span>🔍</span>
        </button>
        <button className="header-icon-btn" title="Help">
          <span>❓</span>
        </button>
        <button className="header-icon-btn" title="Favorites">
          <span>❤️</span>
        </button>
        <button className="header-icon-btn" title="Apps">
          <span>📱</span>
        </button>
        <button className="header-icon-btn" title="AI">
          <span>🎨</span>
        </button>
        <div className="user-avatar">
          <span>👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
