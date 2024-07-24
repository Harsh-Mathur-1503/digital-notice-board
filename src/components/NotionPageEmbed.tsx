"use client";
import React from 'react';

const NotionPageEmbed: React.FC = () => {
  const notionPageUrl = 'https://candy-toast-8fb.notion.site/AnimeOS-c04f8409d8b9433d990727d5a9e7de76'; // Your Notion page URL

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-full mx-auto border border-gray-300">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Notion Page</h2>
      {/* Fallback link if iframe does not load */}
      <div className="relative w-full h-[800px]">
        <iframe
          src={notionPageUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="auto"
          className="rounded-lg"
          title="Notion Page"
          onError={() => console.log('Error loading iframe')} // Optional: Log an error if iframe fails
        ></iframe>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <p className="text-gray-600">If the page does not load, <a href={notionPageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">click here</a> to view it directly.</p>
        </div>
      </div>
    </div>
  );
};

export default NotionPageEmbed;