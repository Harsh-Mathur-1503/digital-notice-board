import React from 'react';

interface GoogleSlidesProps {
  className?: string;
}

const GoogleSlides: React.FC<GoogleSlidesProps> = ({ className }) => {
  return (
    <div className={`widget bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Google Slides</h2>
      <iframe
        src="https://docs.google.com/presentation/d/1vgnFVe-9j0IoyDT-I6grER8KIfayxar5kWF8iJ2wJqA/edit?pli=1#slide=id.p"
        width="100%"
        height="500"
        allowFullScreen
        title="Google Slides"
        className="rounded-lg border border-gray-300"
      />
    </div>
  );
};

export default GoogleSlides;