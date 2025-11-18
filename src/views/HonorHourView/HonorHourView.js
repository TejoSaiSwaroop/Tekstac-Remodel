import React from 'react';
import './HonorHourView.css';

const HonorHourView = () => {
  return (
    <div className="honor-hour-view">
      <div className="honor-header">
        <div className="honor-title-section">
          <h1>Honor Hour</h1>
          <button className="star-btn">☆</button>
        </div>
        <div className="honor-actions">
          <button className="export-btn">📤 Export ▼</button>
          <button className="invite-btn">👤 Invite</button>
          <button className="menu-btn">⋯</button>
        </div>
      </div>

      <div className="honor-controls">
        <button className="add-widget-btn">+ Add widget</button>
        <button className="boards-btn">📊 2 connected boards</button>
        <div className="controls-right">
          <input type="text" className="filter-input" placeholder="Type to filter" />
          <button className="control-btn">👤 People</button>
          <button className="control-btn">🔽 Filter</button>
          <button className="settings-btn">⚙️</button>
        </div>
      </div>

      <div className="honor-content">
        <div className="board-widget">
          <div className="widget-header">
            <h3>QEA25SDGN002</h3>
            <div className="widget-actions">
              <button className="filter-icon">⚲</button>
              <button className="menu-icon">⋯</button>
            </div>
          </div>
          <div className="widget-body">
            <p className="widget-description">Track time for each person across all boards</p>
            <p className="widget-subtitle">Select time tracking column to get started</p>
          </div>
        </div>

        <div className="board-widget">
          <div className="widget-header">
            <h3>QEA25PW004</h3>
            <div className="widget-actions">
              <button className="filter-icon">⚲</button>
              <button className="menu-icon">⋯</button>
            </div>
          </div>
          <div className="widget-body">
            <p className="widget-description">Track time for each person across all boards</p>
            <p className="widget-subtitle">Select time tracking column to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HonorHourView;
