import React, { useState } from 'react';
import Widget from './Widget';
import SettingsMenu from './SettingsMenu';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Dashboard = () => {
  const [widgets, setWidgets] = useState([
    { id: 1, title: "Program 1", content: "Fetching data...", type: "text" },
    { id: 2, title: "Program 2", content: "Fetching data...", type: "text" }
  ]);
  const [availableIds, setAvailableIds] = useState([]);
  const [nextProgramId, setNextProgramId] = useState(3); 

  const [settings, setSettings] = useState({
    darkMode: false,
  });

  const addProgram = () => {
    let newId;
    if (availableIds.length > 0) {
     
      newId = Math.min(...availableIds);
      setAvailableIds(availableIds.filter(id => id !== newId));
    } else {
    
      newId = nextProgramId;
      setNextProgramId(nextProgramId + 1);
    }

    const newProgram = {
      id: newId,
      title: `Program ${newId}`,
      content: "Fetching data...",
      type: "text"
    };

    setWidgets([...widgets, newProgram]);
  };

  
  const removeProgram = (id) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
    setAvailableIds([...availableIds, id]);  
  };

  const toggleDarkMode = () => {
    setSettings(prevSettings => ({
      ...prevSettings,
      darkMode: !prevSettings.darkMode,
    }));
  };

  
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const reorderedWidgets = Array.from(widgets);
    const [removed] = reorderedWidgets.splice(source.index, 1);
    reorderedWidgets.splice(destination.index, 0, removed);

    setWidgets(reorderedWidgets);
  };


  const changeAllDataTypes = (type) => {
    setWidgets(
      widgets.map(widget => ({ ...widget, type }))
    );
  };

  return (
    <div className={`dashboard ${settings.darkMode ? 'dark-mode' : ''}`}>
      <SettingsMenu 
        addProgram={addProgram} 
        removeProgram={removeProgram} 
        toggleDarkMode={toggleDarkMode}
        changeAllDataTypes={changeAllDataTypes}
        widgets={widgets}  
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dashboard">
          {(provided) => (
            <div className="dashboard" {...provided.droppableProps} ref={provided.innerRef}>
              {widgets.map((widget, index) => (
                <Draggable key={widget.id} draggableId={`${widget.id}`} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Widget widget={widget} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
