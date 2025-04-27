import './HomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1>Find the Best Events Near You</h1>
          <p>Discover amazing events and make unforgettable memories!</p>
          <Link to="/events" className="btn">
            Browse Events
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        {/* Static demo cards */}
        <div className="events-grid">
          <div className="event-card">
            <h3>Music Concert</h3>
            <p>May 5, 2025 | New York City</p>
          </div>
          <div className="event-card">
            <h3>Art Exhibition</h3>
            <p>May 12, 2025 | Los Angeles</p>
          </div>
          <div className="event-card">
            <h3>Food Festival</h3>
            <p>May 20, 2025 | Chicago</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Browse by Categories</h2>
        <div className="categories-grid">
          <div className="category-card">Music</div>
          <div className="category-card">Art</div>
          <div className="category-card">Technology</div>
          <div className="category-card">Sports</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
