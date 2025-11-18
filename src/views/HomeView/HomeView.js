import React from 'react';
import './HomeView.css';

const HomeView = () => {
  const recentBoards = [
    { id: 'QEA25SDGN002', name: 'QEA25SDGN002', workspace: 'Interviews', icon: '📊' },
    { id: 'honor-hour', name: 'Honor Hour', workspace: 'Attendance...', icon: '📊' },
    { id: 'attendance', name: 'Attendance Sheet', workspace: 'Attendance...', icon: '📊' },
    { id: 'QEA25SDGN002-2', name: 'QEA25SDGN002 - Q...', workspace: 'Cohorts D...', icon: '📊' }
  ];

  const workspaces = [
    { id: 'cohorts', name: 'Cohorts Details', icon: 'C', color: '#a25ddc' },
    { id: 'attendance', name: 'Attendance Tracking', icon: 'A', color: '#0085ff' }
  ];

  return (
    <div className="home-view">
      <div className="home-header">
        <h1>Good morning, Ram!</h1>
        <p className="subtitle">Quickly access your recent boards, Inbox and workspaces</p>
        <div className="home-actions">
          <button className="quick-search-btn">⚡ Quick Search</button>
          <button className="feedback-btn">💬 Give feedback</button>
        </div>
      </div>

      <div className="home-content">
        <section className="recent-section">
          <div className="section-header">
            <h2>Recently visited</h2>
          </div>
          <div className="boards-grid">
            {recentBoards.map(board => (
              <div key={board.id} className="board-card">
                <div className="board-card-preview">
                  <div className="preview-content">
                    <div className="preview-list">
                      <div className="preview-row blue"></div>
                      <div className="preview-row blue"></div>
                      <div className="preview-row green"></div>
                    </div>
                    <div className="preview-charts">
                      <div className="chart-bar green"></div>
                      <div className="chart-bar yellow"></div>
                      <div className="chart-bar orange"></div>
                    </div>
                  </div>
                </div>
                <div className="board-card-info">
                  <div className="board-card-header">
                    <span className="board-icon">📊</span>
                    <span className="board-name">{board.name}</span>
                    <button className="star-btn">☆</button>
                  </div>
                  <p className="board-workspace">
                    <span className="workspace-icon">⚡</span> work management › {board.workspace}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="show-all-btn">Show all</button>
        </section>

        <section className="update-feed">
          <div className="section-header-inline">
            <h2>Update feed (Inbox)</h2>
            <span className="badge">1</span>
          </div>
          <div className="update-item">
            <div className="update-avatar">RM</div>
            <div className="update-content">
              <p className="update-author">Roy Mann</p>
              <p className="update-text">Hi <span className="mention">@Ram Kumaran</span>,</p>
              <span className="update-time">1d</span>
            </div>
          </div>
          <div className="invite-section">
            <div className="invite-avatars">
              <div className="avatar-placeholder"></div>
              <div className="avatar-placeholder"></div>
              <div className="avatar-add">+</div>
            </div>
            <div className="invite-text">
              <p>Invite your teammates and start collaborating</p>
            </div>
            <div className="invite-actions">
              <button className="no-thanks-btn">No thanks</button>
              <button className="invite-btn">Invite</button>
            </div>
          </div>
        </section>

        <section className="workspaces-section">
          <div className="section-header-inline">
            <h2>My workspaces</h2>
            <button className="info-btn">ℹ️</button>
          </div>
          <div className="workspaces-list">
            {workspaces.map(workspace => (
              <div key={workspace.id} className="workspace-card">
                <div className="workspace-card-icon" style={{ backgroundColor: workspace.color }}>
                  {workspace.icon}
                </div>
                <div className="workspace-card-info">
                  <h3>{workspace.name}</h3>
                  <p className="workspace-type">
                    <span className="type-icon">⚡</span> work management
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="learn-section">
        <div className="learn-card">
          <div className="learn-icon">🚀</div>
          <div className="learn-content">
            <h3>Getting started</h3>
            <p>Learn how monday.com works</p>
          </div>
        </div>
        <div className="learn-card">
          <div className="learn-icon">❓</div>
          <div className="learn-content">
            <h3>Help center</h3>
            <p>Learn and get support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
