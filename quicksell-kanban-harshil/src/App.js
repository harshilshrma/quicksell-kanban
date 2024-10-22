import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div>
        <h2>Tickets:</h2>
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>{ticket.title} - {ticket.status}</li>
          ))}
        </ul>

        <h2>Users:</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
