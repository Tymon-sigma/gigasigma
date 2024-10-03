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

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      width: '300px',
      border: '2px solid #61dafb',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#61dafb',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonDelete: {
      padding: '5px 10px',
      backgroundColor: '#ff4d4d',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      cursor: 'pointer',
      marginLeft: '10px',
    },
    taskList: {
      listStyleType: 'none',
      paddingLeft: 0,
      width: '300px',
      textAlign: 'left',
    },
    taskItem: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#f9f9f9',
      padding: '10px',
      margin: '5px 0',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '24px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>To-Do List</h1>

      {/* Wyszukiwanie */}
      <input
        type="text"
        placeholder="Szukaj zadania..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />

      {/* Dodawanie zadania */}
      <input
        type="text"
        placeholder="Dodaj zadanie..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAddTask} style={styles.button}>
        Dodaj
      </button>

      {/* Lista zadań */}
      <ul style={styles.taskList}>
        {filteredTasks.map((t, index) => (
          <li key={index} style={styles.taskItem}>
            {t}
            <button
              onClick={() => handleDeleteTask(index)}
              style={styles.buttonDelete}
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
