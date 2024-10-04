import React, { useState } from 'react';

const SettingsMenu = ({ addProgram, removeProgram, toggleDarkMode, changeAllDataTypes, widgets }) => {
  const [selectedProgram, setSelectedProgram] = useState("");

  const handleProgramRemove = (e) => {
    const id = Number(e.target.value);
    removeProgram(id);
    setSelectedProgram(""); 
  };

  return (
    <div className="settings-menu">
      <h4>Settings</h4>

      {}
      <div className="settings-section">
        <button onClick={addProgram}>Add Program</button>
      </div>

      {}
      <div className="settings-section">
        <h5>Remove Programs</h5>
        <select value={selectedProgram} onChange={(e) => handleProgramRemove(e)} defaultValue="">
          <option value="" disabled>Select Program to Remove</option>
          {widgets.map(widget => (
            <option key={widget.id} value={widget.id}>
              Remove {widget.title}
            </option>
          ))}
        </select>
      </div>

      {}
      <div className="settings-section">
        <h5>Widget Display Options</h5>
        <div className="dropdown">
          <button className="dropdown-toggle">Display Options</button>
          <div className="dropdown-menu">
            <button onClick={() => changeAllDataTypes('graph')}>Show Graph for All</button>
            <button onClick={() => changeAllDataTypes('pie')}>Show Pie Chart for All</button>
            <button onClick={() => changeAllDataTypes('text')}>Show Text for All</button>
          </div>
        </div>
      </div>

      {}
      <div className="settings-section">
        <h5>Data Sources <span className="disabled">(Non-functional)</span></h5>
        <div className="dropdown disabled">
          <button className="dropdown-toggle" disabled>Data Sources</button>
          <div className="dropdown-menu">
            <p className="disabled-option">API Data (coming soon)</p>
            <p className="disabled-option">Local File (coming soon)</p>
          </div>
        </div>
      </div>

      {}
      <div className="settings-section">
        <h5>Theme</h5>
        <label>
          <input
            type="checkbox"
            onChange={toggleDarkMode}
          />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default SettingsMenu;
