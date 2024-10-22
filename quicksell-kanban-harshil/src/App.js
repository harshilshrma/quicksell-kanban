import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('priority');
  const [groupBy, setGroupBy] = useState('status');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const sortedTickets = [...tickets].sort((a, b) => {
    if (sortBy === 'priority') {
      return b.priority - a.priority;
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Kanban Board</h1>

      {/* Dropdown button for both sorting and grouping */}
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <img src="/icons/Display.svg" alt="Dropdown Icon" className="dropdown-icon" />
          <p className='dropdown-label'>Display</p>
          <img src="/icons/down.svg" alt="Down Arrow Icon" className="arrow-icon" />
        </button>

        {dropdownOpen && (
          <div className="dropdown-content">
            {/* Grouping option */}
            <div className="dropdown-row">
              <p>Grouping</p>
              <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            {/* Sorting option */}
            <div className="dropdown-row">
              <p>Ordering</p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Kanban Board */}
      <KanbanBoard tickets={sortedTickets} users={users} groupBy={groupBy} />
    </div>
  );
}

export default App;
