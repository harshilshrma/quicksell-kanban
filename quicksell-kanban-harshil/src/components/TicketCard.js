import React from 'react';
import './TicketCard.css';

// User images mapping based on userId
const userImages = {
    'usr-1': 'path/to/user1.jpg', // Replace with actual image paths
    'usr-2': 'path/to/user2.jpg',
    'usr-3': 'path/to/user3.jpg',
    'usr-4': 'path/to/user4.jpg',
    'usr-5': 'path/to/user5.jpg',
};

// Priority images mapping based on priority level
const priorityImages = {
    4: './icons/',   // Replace with actual image paths
    3: 'path/to/high.png',
    2: 'path/to/medium.png',
    1: 'path/to/low.png',
};

const TicketCard = ({ ticket }) => {
    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
                <img 
                    src={userImages[ticket.userId]} 
                    alt={ticket.userId} 
                    className="user-image"
                />
            </div>
            <h3>{ticket.title}</h3>
            <div className="ticket-details">
                <img 
                    src={priorityImages[ticket.priority]} 
                    alt={`Priority ${ticket.priority}`} 
                    className="priority-image"
                />
                <span className="tag">{ticket.tag.join(', ')}</span>
            </div>
        </div>
    );
};

export default TicketCard;
