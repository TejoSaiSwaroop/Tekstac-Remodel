import React from 'react';
import './AttendanceView.css';

const AttendanceView = () => {
  const weeks = [
    { id: 1, date: 'Feb 1, 2022', employeeId: '119254', days: { mon: 'Vacation', tue: '1', wed: '1', thu: '1', fri: '1' } },
    { id: 2, date: 'Feb 8, 2022', employeeId: '119254', days: { mon: '1', tue: 'Absent', wed: '1', thu: '1', fri: 'Sick day' } },
    { id: 3, date: 'Feb 15, 2022', employeeId: '119254', days: { mon: '1', tue: '1', wed: '1', thu: '1', fri: '1' } },
    { id: 4, date: 'Feb 22, 2022', employeeId: '119254', days: { mon: '1', tue: '1', wed: 'Vacation', thu: '1', fri: '1' } }
  ];

  const getDayColor = (value) => {
    if (value === '1') return 'green';
    if (value === 'Absent') return 'red';
    if (value === 'Vacation') return 'orange';
    if (value === 'Sick day') return 'yellow';
    return '';
  };

  return (
    <div className="attendance-view">
      <div className="attendance-header">
        <div className="attendance-title-section">
          <h1>Attendance Sheet</h1>
          <button className="dropdown-btn">▼</button>
        </div>
        <div className="attendance-actions">
          <button className="action-btn">✨ Sidekick</button>
          <button className="action-btn">🔗 Integrate</button>
          <button className="action-btn">⚡ Automate</button>
          <button className="action-btn">👤</button>
          <button className="action-btn">Invite / 1</button>
          <button className="action-btn">🔗</button>
          <button className="action-btn">⋯</button>
        </div>
      </div>

      <div className="attendance-tabs">
        <button className="tab active">Table</button>
        <button className="tab">Main table</button>
        <button className="tab">Chart</button>
        <button className="add-tab-btn">+</button>
      </div>

      <div className="attendance-controls">
        <button className="new-item-btn">New item ▼</button>
        <div className="controls-right">
          <button className="control-btn">🔍 Search</button>
          <button className="control-btn">👤 Person</button>
          <button className="control-btn">🔽 Filter</button>
          <button className="control-btn">⬆️ Sort / 1</button>
          <button className="control-btn">👁️ Hide</button>
          <button className="control-btn">📊 Group by</button>
          <button className="control-btn">⋯</button>
        </div>
      </div>

      <div className="attendance-content">
        <div className="attendance-section">
          <div className="section-header-bar">
            <button className="collapse-btn">▼</button>
            <h2 className="section-title">February 2022</h2>
          </div>

          <div className="attendance-table-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th className="col-checkbox"></th>
                  <th className="col-item">Item</th>
                  <th className="col-week">Week commenci...</th>
                  <th className="col-employee">Employee</th>
                  <th className="col-manager">Manager</th>
                  <th className="col-employee-id">Employee ID</th>
                  <th className="col-day">Monday</th>
                  <th className="col-day">Tuesday</th>
                  <th className="col-day">Wednesday</th>
                  <th className="col-day">Thursday</th>
                  <th className="col-day">Friday</th>
                  <th className="col-actions"></th>
                </tr>
              </thead>
              <tbody>
                {weeks.map(week => (
                  <tr key={week.id} className="attendance-row">
                    <td className="col-checkbox">
                      <input type="checkbox" />
                    </td>
                    <td className="col-item">Wee...</td>
                    <td className="col-week">{week.date}</td>
                    <td className="col-employee">
                      <div className="employee-avatar">👤</div>
                    </td>
                    <td className="col-manager">
                      <div className="manager-avatar">👤</div>
                    </td>
                    <td className="col-employee-id">{week.employeeId}</td>
                    <td className={`col-day ${getDayColor(week.days.mon)}`}>
                      {week.days.mon}
                    </td>
                    <td className={`col-day ${getDayColor(week.days.tue)}`}>
                      {week.days.tue}
                    </td>
                    <td className={`col-day ${getDayColor(week.days.wed)}`}>
                      {week.days.wed}
                    </td>
                    <td className={`col-day ${getDayColor(week.days.thu)}`}>
                      {week.days.thu}
                    </td>
                    <td className={`col-day ${getDayColor(week.days.fri)}`}>
                      {week.days.fri}
                    </td>
                    <td className="col-actions">
                      <button className="row-menu-btn">⋯</button>
                    </td>
                  </tr>
                ))}
                <tr className="add-row">
                  <td colSpan="12">
                    <button className="add-item-btn">+ Add item</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="week-summary">
            <div className="summary-bar">
              <div className="bar-segment green" style={{ width: '40%' }}></div>
              <div className="bar-segment red" style={{ width: '20%' }}></div>
              <div className="bar-segment orange" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>

        <div className="attendance-section">
          <div className="section-header-bar">
            <button className="collapse-btn">▼</button>
            <h2 className="section-title">January 2022</h2>
          </div>

          <div className="attendance-table-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th className="col-checkbox"></th>
                  <th className="col-item">Item</th>
                  <th className="col-week">Week commenci...</th>
                  <th className="col-employee">Employee</th>
                  <th className="col-manager">Manager</th>
                  <th className="col-employee-id">Employee ID</th>
                  <th className="col-day">Monday</th>
                  <th className="col-day">Tuesday</th>
                  <th className="col-day">Wednesday</th>
                  <th className="col-day">Thursday</th>
                  <th className="col-day">Friday</th>
                  <th className="col-actions"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="add-row">
                  <td colSpan="12">
                    <button className="add-item-btn">+ Add item</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceView;
