import SpotifyNowPlaying from '@/components/SpotifyNowPlaying';

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Music</h1>
      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-4">Currently Playing</h2>
        <SpotifyNowPlaying />
      </div>
    </div>
  );
} 