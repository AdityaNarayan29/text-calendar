// src/ActivityCalendar.js
import React from 'react';
import ActivityCalendar from 'react-activity-calendar';

const ActivityCalendarComponent = () => {
  // Dummy data for demonstration
  const data = [
    { date: '2024-03-19', count: 5 },
    { date: '2024-03-20', count: 7 },
    { date: '2024-03-21', count: 5 },
    // Add more data as needed
  ];

  return (
    <div>
      <h2>Activity Calendar</h2>
      <ActivityCalendar data={data} />
    </div>
  );
};

export default ActivityCalendarComponent;
