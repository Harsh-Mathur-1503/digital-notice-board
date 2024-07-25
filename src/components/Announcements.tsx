import React from 'react';

interface AnnouncementProps {
  announcements: string[];
}

const Announcements: React.FC<AnnouncementProps> = ({ announcements }) => {
  return (
    <div className="bg-teal-100 p-4 rounded-lg shadow-md overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {announcements.map((announcement, index) => (
            <span key={index} className="text-teal-900 mx-4">
              {announcement}
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee whitespace-nowrap">
          {announcements.map((announcement, index) => (
            <span key={index} className="text-teal-900 mx-4">
              {announcement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;