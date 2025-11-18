import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, onToggle }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const workspaces = [
    { id: 'interviews', name: 'Interviews', icon: 'I', color: '#5034ff' },
    { id: 'cohorts', name: 'Cohorts Details', icon: 'C', color: '#a25ddc' },
    { id: 'attendance', name: 'Attendance Tracking', icon: 'A', color: '#0085ff' }
  ];

  const boards = [
    { id: 'QEA25SDGN002', name: 'QEA25SDGN002', workspace: 'interviews' },
    { id: 'ADM25CMT020', name: 'ADM25CMT020', workspace: 'cohorts' },
    { id: 'dashboard', name: 'Dashboard and reporting', workspace: 'cohorts' }
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <nav className="sidebar-nav">
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <span className="nav-icon">🏠</span>
          {!isCollapsed && <span className="nav-text">Home</span>}
        </Link>
        
        <Link to="/my-work" className={`nav-item ${location.pathname === '/my-work' ? 'active' : ''}`}>
          <span className="nav-icon">📋</span>
          {!isCollapsed && <span className="nav-text">My work</span>}
        </Link>
        
        <Link to="/more" className="nav-item">
          <span className="nav-icon">⋯</span>
          {!isCollapsed && <span className="nav-text">More</span>}
        </Link>
      </nav>

      {!isCollapsed && (
        <>
          <div className="sidebar-section">
            <div className="section-header">
              <span>Favorites</span>
              <button className="expand-btn">›</button>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="section-header">
              <span>Workspaces</span>
              <div className="header-actions">
                <button className="icon-btn">⋯</button>
                <button className="icon-btn" onClick={() => {}}>🔍</button>
              </div>
            </div>
            
            {workspaces.map(workspace => (
              <div key={workspace.id} className="workspace-item">
                <div className="workspace-header">
                  <div className="workspace-icon" style={{ backgroundColor: workspace.color }}>
                    {workspace.icon}
                  </div>
                  <span className="workspace-name">{workspace.name}</span>
                  <button className="expand-btn">▼</button>
                  <button className="add-btn">+</button>
                </div>
                
                <div className="workspace-boards">
                  {boards
                    .filter(board => board.workspace === workspace.id)
                    .map(board => (
                      <Link 
                        key={board.id} 
                        to={`/board/${board.id}`}
                        className={`board-item ${location.pathname === `/board/${board.id}` ? 'active' : ''}`}
                      >
                        <span className="board-icon">📊</span>
                        <span className="board-name">{board.name}</span>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))}
            
            <button className="add-workspace-btn">
              + Add workspace
            </button>
            
            <button className="browse-all-btn">
              📁 Browse all
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
