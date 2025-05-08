import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

export const getSpotifyAccessToken = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
    return data.body['access_token'];
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    throw error;
  }
};

export const getCurrentlyPlaying = async () => {
  try {
    const accessToken = await getSpotifyAccessToken();
    spotifyApi.setAccessToken(accessToken);
    const response = await spotifyApi.getMyCurrentPlayingTrack();
    return response.body;
  } catch (error) {
    console.error('Error getting currently playing track:', error);
    return null;
  }
};

export const getRecentlyPlayed = async () => {
  try {
    const accessToken = await getSpotifyAccessToken();
    spotifyApi.setAccessToken(accessToken);
    const response = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 5 });
    return response.body;
  } catch (error) {
    console.error('Error getting recently played tracks:', error);
    return null;
  }
};

export const getTopTracks = async () => {
  try {
    const accessToken = await getSpotifyAccessToken();
    spotifyApi.setAccessToken(accessToken);
    const response = await spotifyApi.getMyTopTracks({ limit: 5 });
    return response.body;
  } catch (error) {
    console.error('Error getting top tracks:', error);
    return null;
  }
}; 