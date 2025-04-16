import React, { useState } from 'react';
import './AddEventForm.css';

export default function AddEventForm({ onAddEvent }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    dateTime: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.location || !formData.dateTime) {
      alert('Please fill out all fields!');
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...formData,
    };

    onAddEvent(newEvent);

    setFormData({
      name: '',
      description: '',
      location: '',
      dateTime: '',
      imageUrl: '',
    });
  };

  return (
    <form className="add-event-form" onSubmit={handleSubmit}>
      <h2>Add New Event</h2>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Event Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dateTime"
        placeholder="Date & Time (e.g. Sat, April 20 · 9 AM – 2 PM)"
        value={formData.dateTime}
        onChange={handleChange}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
      />
      <button type="submit">Add Event</button>
    </form>
  );
}
