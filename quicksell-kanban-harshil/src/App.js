import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import AboutPage from './components/AboutPage';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('priority');
  const [groupBy, setGroupBy] = useState('status');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

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

  const handleAboutClick = () => {
    setShowAboutPage(true);
  };

  const handleBackClick = () => {
    setShowAboutPage(false);
  };

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      {showAboutPage ? (
        <AboutPage onBack={handleBackClick} />
      ) : (
        <>
          <h1>Kanban Board</h1>
          <div className='about'>
            <p>Hey there evaluator! Please take a moment to check how I built this project&nbsp;</p>
            <a onClick={handleAboutClick} style={{ cursor: 'pointer', color: 'blue' }}>
              here ➚
            </a>
          </div>


          <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <img src="/icons/Display.svg" alt="Dropdown Icon" className="dropdown-icon" />
              <p className='dropdown-label'>Display</p>
              <img src="/icons/down.svg" alt="Down Arrow Icon" className="arrow-icon" />
            </button>

            {dropdownOpen && (
              <div className="dropdown-content">
                <div className="dropdown-row">
                  <p>Grouping</p>
                  <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>

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

          <KanbanBoard tickets={sortedTickets} users={users} groupBy={groupBy} />
        </>
      )}
    </div>
  );
}

export default App;
