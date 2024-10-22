import React from 'react';
import './TicketCard.css';

const priorityImages = {
    4: '/icons/SVG - Urgent Priority colour.svg',   
    3: '/icons/Img - High Priority.svg', 
    2: '/icons/Img - Medium Priority.svg', 
    1: '/icons/Img - Low Priority.svg', 
    0: '/icons/No-priority.svg',
};

const TicketCard = ({ ticket }) => {
    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
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
