"use client"
import React from 'react';

const GoogleCalendarDayView: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto border border-gray-300">
      <h2 className="text-3xl font-semibold mb-4 text-gray-900 flex items-center space-x-2">
        <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 10h18M3 15h18m-9 4v-8m0 0H8m1 0h6M7 21h10" />
        </svg>
        <span>Google Calendar - Day View</span>
      </h2>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York&mode=DAY"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          className="rounded-lg"
          title="Google Calendar Day View"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleCalendarDayView;