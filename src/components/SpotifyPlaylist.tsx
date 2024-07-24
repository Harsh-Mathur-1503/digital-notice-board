import React from 'react';

const SpotifyPlaylist: React.FC = () => {
  return (
    <div className="p-4">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/2K25njMCNAPhHwGuX97TNt?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
        className="rounded-lg"  // Tailwind class for rounded corners
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;