// src/pages/EventsPage.jsx
import React, { useEffect } from 'react';
import useEventStore from '../store/eventStore';

const EventsPage = () => {
  const { events, fetchEvents } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Upcoming Events
      </h1>
      {events.length > 0 ? (
        <div>
          {events.map((event) => (
            <div key={event._id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
              <h2 style={{ marginBottom: '0.5rem' }}>{event.title}</h2>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Category:</strong> {event.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default EventsPage;
