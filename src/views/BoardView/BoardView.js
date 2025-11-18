import React, { useState } from 'react';
import { Task, TaskStatus, Priority } from '../../models/Task';
import './BoardView.css';

const BoardView = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    status: TaskStatus.NOT_STARTED,
    priority: Priority.MEDIUM,
    dueDate: '',
    notes: '',
    owner: null
  });

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Welcome Mail Coach...', owner: null, status: 'Completed', dueDate: 'Sep 3', priority: null, notes: '', files: 1, timeline: 'Sep 1 - 3', lastUpdated: '13 minutes...' },
    { id: 2, title: 'Software Check', owner: null, status: 'Completed', dueDate: 'Sep 3', priority: null, notes: 'Delayed Due to S...', files: 0, timeline: 'Sep 1 - 3', lastUpdated: '13 minutes...' },
    { id: 3, title: 'Platform Access', owner: null, status: 'Completed', dueDate: 'Oct 3', priority: null, notes: '', files: 0, timeline: 'Sep 1 - 3', lastUpdated: '13 minutes...' },
    { id: 4, title: 'Platform Orientation', owner: null, status: 'Completed', dueDate: '', priority: null, notes: '', files: 0, timeline: 'Sep 1 - 3', lastUpdated: '2 hours ago' },
    { id: 5, title: 'Solution Walkthrough', owner: null, status: 'Completed', dueDate: '', priority: null, notes: '', files: 0, timeline: 'Oct 3', lastUpdated: '2 hours ago' },
    { id: 6, title: 'Profile Assessment', owner: null, status: 'Not Applicable', dueDate: '', priority: null, notes: '', files: 0, timeline: '-', lastUpdated: '2 hours ago' },
    { id: 7, title: 'Delta Assessment', owner: null, status: 'Completed', dueDate: '', priority: null, notes: '', files: 0, timeline: 'Sep 12', lastUpdated: '2 hours ago' },
    { id: 8, title: 'BH Mock', owner: null, status: 'Completed', dueDate: '', priority: null, notes: '', files: 0, timeline: 'Oct 1 - 3', lastUpdated: '2 hours ago' },
    { id: 9, title: 'Hacker Rank Assessm...', owner: null, status: 'Not Applicable', dueDate: '', priority: null, notes: '', files: 0, timeline: '-', lastUpdated: '2 hours ago' },
    { id: 10, title: 'Interim Evaluation', owner: '👤', status: 'Interim Completed', dueDate: 'Oct 13', priority: 'Low', notes: 'Action items', files: 1, timeline: 'Oct 13 - 14', lastUpdated: '1 minute ago' },
    { id: 11, title: 'ICT', owner: null, status: 'Completed', dueDate: 'Oct 14', priority: 'High', notes: 'Meeting notes', files: 0, timeline: 'Oct 15 - 16', lastUpdated: '4 hours ago' },
    { id: 12, title: 'Final Evaluation', owner: null, status: 'Ready For Final Eval', dueDate: 'Oct 15', priority: 'Medium', notes: 'Other', files: 0, timeline: 'Oct 17 - 18', lastUpdated: 'Just now' }
  ]);

  // Helper functions
  const getStatusColor = (status) => {
    const colors = {
      'Completed': '#00c875',
      'Not Applicable': '#579bfc',
      'Interim Completed': '#fdab3d',
      'Ready For Final Eval': '#ffcb00',
      'Working on it': '#fdab3d',
      'Stuck': '#e44258',
      'Not Started': '#c4c4c4'
    };
    return colors[status] || '#c4c4c4';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'Low': '#579bfc',
      'Medium': '#a25ddc',
      'High': '#401694'
    };
    return colors[priority] || '#676879'; // Grey color for None/empty priority
  };

  // Add task functionality
  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };

  const handleSaveTask = () => {
    if (newTask.title.trim()) {
      const task = new Task(
        Date.now(), // Simple ID generation
        newTask.title,
        newTask.status,
        newTask.owner,
        newTask.dueDate,
        newTask.priority,
        newTask.notes,
        0, // files
        newTask.dueDate ? `${newTask.dueDate}` : '-', // timeline
        'Just now'
      );
      
      setTasks([...tasks, task]);
      setNewTask({
        title: '',
        status: TaskStatus.NOT_STARTED,
        priority: Priority.MEDIUM,
        dueDate: '',
        notes: '',
        owner: null
      });
      setShowAddTaskModal(false);
    }
  };

  const handleCancelTask = () => {
    setNewTask({
      title: '',
      status: TaskStatus.NOT_STARTED,
      priority: Priority.MEDIUM,
      dueDate: '',
      notes: '',
      owner: null
    });
    setShowAddTaskModal(false);
  };

  // Update task status/priority
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: newStatus, lastUpdated: 'Just now' }
        : task
    ));
  };

  const updateTaskPriority = (taskId, newPriority) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, priority: newPriority, lastUpdated: 'Just now' }
        : task
    ));
  };

  return (
    <div className="board-view">
      <div className="board-header">
        <div className="board-title-section">
          <h1>QEA25SDGN002 - QEA SDET V4</h1>
          <button className="dropdown-btn">▼</button>
        </div>
        <div className="board-actions">
          <button className="action-btn">✨ Sidekick</button>
          <button className="action-btn">🔗 Integrate</button>
          <button className="action-btn">⚡ Automate</button>
          <button className="action-btn">👤</button>
          <button className="action-btn">Invite / 1</button>
          <button className="action-btn">🔗</button>
          <button className="action-btn">⋯</button>
        </div>
      </div>

      <div className="board-tabs">
        <button className="tab active">Main table</button>
        <button className="tab">Cards</button>
        <button className="add-tab-btn">+</button>
      </div>

      <div className="board-controls">
        <button className="new-task-btn" onClick={handleAddTask}>New task ▼</button>
        <div className="controls-right">
          <button className="control-btn">🔍 Search</button>
          <button className="control-btn">👤 Person</button>
          <button className="control-btn">🔽 Filter</button>
          <button className="control-btn">⬆️ Sort</button>
          <button className="control-btn">👁️ Hide</button>
          <button className="control-btn">📊 Group by</button>
          <button className="control-btn">⋯</button>
        </div>
      </div>

      <div className="board-content">
        <div className="board-section">
          <div className="section-header-bar">
            <button className="collapse-btn">▼</button>
            <h2 className="section-title">To-Do</h2>
          </div>
          
          <table className="tasks-table">
            <thead>
              <tr>
                <th className="col-checkbox"></th>
                <th className="col-task">Task</th>
                <th className="col-owner">Owner</th>
                <th className="col-status">Status</th>
                <th className="col-due-date">Due date</th>
                <th className="col-priority">Priority</th>
                <th className="col-notes">Notes</th>
                <th className="col-files">Files</th>
                <th className="col-timeline">Timeline</th>
                <th className="col-last-updated">Last updated</th>
                <th className="col-actions"></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr 
                  key={task.id} 
                  className={`task-row ${selectedTask === task.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTask(task.id)}
                >
                  <td className="col-checkbox">
                    <input type="checkbox" />
                  </td>
                  <td className="col-task">
                    <span className="task-title">{task.title}</span>
                  </td>
                  <td className="col-owner">
                    {task.owner && <div className="owner-avatar">{task.owner}</div>}
                  </td>
                  <td className="col-status">
                    <select 
                      className="status-dropdown"
                      value={task.status}
                      onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                      style={{ backgroundColor: getStatusColor(task.status) }}
                    >
                      {Object.values(TaskStatus).map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td className="col-due-date">
                    {task.dueDate && (
                      <div className="due-date">
                        {task.dueDate}
                        {task.status === 'Completed' && <span className="checkmark">✓</span>}
                        {task.status === 'Interim Comple...' && <span className="warning">⚠️</span>}
                      </div>
                    )}
                  </td>
                  <td className="col-priority">
                    <select 
                      className="priority-dropdown"
                      value={task.priority || ''}
                      onChange={(e) => updateTaskPriority(task.id, e.target.value)}
                      style={{ backgroundColor: getPriorityColor(task.priority) }}
                    >
                      <option value="">None</option>
                      {Object.values(Priority).map(priority => (
                        <option key={priority} value={priority}>{priority}</option>
                      ))}
                    </select>
                  </td>
                  <td className="col-notes">
                    {task.notes && <span className="notes-text">{task.notes}</span>}
                  </td>
                  <td className="col-files">
                    {task.files > 0 && (
                      <div className="files-badge">
                        📎 {task.files}
                      </div>
                    )}
                  </td>
                  <td className="col-timeline">
                    <div className={`timeline-badge ${task.timeline.includes('Sep') ? 'green' : task.timeline.includes('Oct') ? 'orange' : ''}`}>
                      {task.timeline}
                    </div>
                  </td>
                  <td className="col-last-updated">
                    <div className="last-updated">
                      <div className="user-icon">👤</div>
                      <span>{task.lastUpdated}</span>
                    </div>
                  </td>
                  <td className="col-actions">
                    <button className="row-menu-btn">⋯</button>
                  </td>
                </tr>
              ))}
              <tr className="add-row">
                <td colSpan="11">
                  <button className="add-task-btn" onClick={handleAddTask}>+ Add task</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="board-section">
          <div className="section-header-bar completed">
            <button className="collapse-btn">▼</button>
            <h2 className="section-title">Completed</h2>
          </div>
          
          <table className="tasks-table">
            <thead>
              <tr>
                <th className="col-checkbox"></th>
                <th className="col-task">Task</th>
                <th className="col-owner">Owner</th>
                <th className="col-status">Status</th>
                <th className="col-due-date">Due date</th>
                <th className="col-priority">Priority</th>
                <th className="col-notes">Notes</th>
                <th className="col-files">Files</th>
                <th className="col-timeline">Timeline</th>
                <th className="col-last-updated">Last updated</th>
                <th className="col-actions"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="add-row">
                <td colSpan="11">
                  <button className="add-task-btn" onClick={handleAddTask}>+ Add task</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Task Modal */}
      {showAddTaskModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add New Task</h3>
              <button className="modal-close" onClick={handleCancelTask}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Task Title *</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  placeholder="Enter task title"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={newTask.status}
                    onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                  >
                    {Object.values(TaskStatus).map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Priority</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                  >
                    {Object.values(Priority).map(priority => (
                      <option key={priority} value={priority}>{priority}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label>Notes</label>
                <textarea
                  value={newTask.notes}
                  onChange={(e) => setNewTask({...newTask, notes: e.target.value})}
                  placeholder="Add any notes or description"
                  rows="3"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={handleCancelTask}>Cancel</button>
              <button className="btn-save" onClick={handleSaveTask}>Add Task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardView;
