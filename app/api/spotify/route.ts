import { NextResponse } from 'next/server'

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

async function getAccessToken(): Promise<string> {
  const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN!,
    }),
  })
  const data = await res.json()
  return data.access_token
}

export async function GET() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return NextResponse.json({ isPlaceholder: true })
  }

  try {
    const accessToken = await getAccessToken()

    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 30 },
    })

    if (res.status === 204 || res.status > 400) {
      return NextResponse.json({ isPlaying: false })
    }

    const data = await res.json()

    if (!data?.item) {
      return NextResponse.json({ isPlaying: false })
    }

    return NextResponse.json({
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((a: { name: string }) => a.name).join(', '),
      albumArt: data.item.album.images[2]?.url ?? data.item.album.images[0]?.url,
      songUrl: data.item.external_urls.spotify,
    })
  } catch {
    return NextResponse.json({ isPlaying: false })
  }
}
