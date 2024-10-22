import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, users, groupBy }) => {
    const groupedTickets = {};
    const getUserName = (userId) => {
        const user = users.find(user => user.id === userId);
        return user ? user.name : 'Unknown User'; 
    };

    if (groupBy === 'status') {
        tickets.forEach(ticket => {
            if (!groupedTickets[ticket.status]) {
                groupedTickets[ticket.status] = [];
            }
            groupedTickets[ticket.status].push(ticket);
        });
    } else if (groupBy === 'user') {
        tickets.forEach(ticket => {
            const userName = getUserName(ticket.userId);
            if (!groupedTickets[userName]) {
                groupedTickets[userName] = [];
            }
            groupedTickets[userName].push(ticket);
        });
    } else if (groupBy === 'priority') {
        tickets.forEach(ticket => {
            const priorityLabel =
                ticket.priority === 4 ? 'Urgent' :
                ticket.priority === 3 ? 'High' :
                ticket.priority === 2 ? 'Medium' :
                ticket.priority === 1 ? 'Low' : 'No Priority';

            if (!groupedTickets[priorityLabel]) {
                groupedTickets[priorityLabel] = [];
            }
            groupedTickets[priorityLabel].push(ticket);
        });
    } else {
        groupedTickets.Todo = tickets.filter(ticket => ticket.status === 'Todo');
        groupedTickets['In Progress'] = tickets.filter(ticket => ticket.status === 'In progress');
        groupedTickets.Backlog = tickets.filter(ticket => ticket.status === 'Backlog');
    }

    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map(group => (
                <div key={group} className="kanban-column">
                    <h2>{group}</h2>
                    {groupedTickets[group].map(ticket => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;
