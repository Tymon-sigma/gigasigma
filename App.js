import React, { useState } from 'react';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask(''); 
    }
  };

  
  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  
  const filteredTasks = tasks.filter((t) =>
    t.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do List</h1>

      {/* Pole wyszukiwania */}
      <input
        type="text"
        placeholder="Szukaj zadania..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
      />

      <br />

      {/* Pole do dodawania nowego zadania */}
      <input
        type="text"
        placeholder="Dodaj zadanie..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ marginRight: '10px', padding: '5px', width: '200px' }}
      />
      <button onClick={handleAddTask} style={{ padding: '5px 10px' }}>
        Dodaj
      </button>

      {/* Lista zadań */}
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {filteredTasks.map((t, index) => (
          <li key={index} style={{ marginTop: '10px' }}>
            {t}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: '10px', padding: '5px 10px' }}
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
