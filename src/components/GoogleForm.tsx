import React from 'react';

const GoogleForm: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfUJFtgmeWaaE5delcsWy1ZjWNB6_1ikHowsHu0MGy6gUjdKA/viewform?usp=sf_link"
        width="100%"
        height="600"
        frameBorder="0"
        title="Google Form"
        className="rounded-lg"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;