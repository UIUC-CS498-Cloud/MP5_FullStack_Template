import React from 'react';
import './EventCard.css';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.title} className="event-image" />
      <div className="event-info">
        <h3 className="event-name">{event.title}</h3>
        <p className="event-details">{event.location}</p>
        <p className="event-details">{event.dateTime}</p>
      </div>
    </div>
  );
}
