import { useEffect, useState } from 'react';
import { getCurrentlyPlaying } from '@/lib/spotify';

interface Track {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const data = await getCurrentlyPlaying();
        if (data?.item) {
          setTrack(data.item);
        }
      } catch (err) {
        setError('Failed to fetch currently playing track');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentlyPlaying();
    const interval = setInterval(fetchCurrentlyPlaying, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 text-gray-500">
        <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
        <span>Loading Spotify data...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!track) {
    return <div className="text-gray-500">Not playing anything right now</div>;
  }

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      {track.album.images[0] && (
        <img
          src={track.album.images[0].url}
          alt={track.album.name}
          className="w-16 h-16 rounded-md"
        />
      )}
      <div>
        <div className="font-medium">{track.name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {track.artists.map((artist) => artist.name).join(', ')}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-500">
          {track.album.name}
        </div>
      </div>
    </div>
  );
} 