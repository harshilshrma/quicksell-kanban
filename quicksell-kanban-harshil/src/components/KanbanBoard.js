import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets }) => {
    const groupedTickets = {
        Todo: tickets.filter(ticket => ticket.status === 'Todo'),
        'In Progress': tickets.filter(ticket => ticket.status === 'In progress'),
        Backlog: tickets.filter(ticket => ticket.status === 'Backlog'),
    };

    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map(status => (
                <div key={status} className="kanban-column">
                    <h2>{status}</h2>
                    {groupedTickets[status].map(ticket => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;
