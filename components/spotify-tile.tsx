'use client'

import { useEffect, useState } from 'react'

type NowPlaying =
  | { isPlaceholder: true }
  | { isPlaying: false }
  | { isPlaying: true; title: string; artist: string; albumArt?: string; songUrl: string }

function AnimatedBars() {
  return (
    <span className="flex items-end gap-[2px]" aria-label="Now playing">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-green-500"
          style={{
            height: '10px',
            animation: `spotify-bar 1.2s ease-in-out ${i * 0.2}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes spotify-bar {
          from { transform: scaleY(0.3); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </span>
  )
}

export function SpotifyTile() {
  const [data, setData] = useState<NowPlaying | null>(null)

  useEffect(() => {
    fetch('/api/spotify')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ isPlaying: false }))

    const interval = setInterval(() => {
      fetch('/api/spotify')
        .then((r) => r.json())
        .then(setData)
        .catch(() => {})
    }, 30_000)

    return () => clearInterval(interval)
  }, [])

  const inner = (() => {
    if (!data) {
      return (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-md bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
          <div className="space-y-1.5">
            <div className="h-3 w-24 rounded bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
            <div className="h-2.5 w-16 rounded bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
          </div>
        </div>
      )
    }

    if ('isPlaceholder' in data) {
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
            <SpotifyIcon className="h-5 w-5 text-zinc-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">not configured</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">spotify</p>
          </div>
        </div>
      )
    }

    if (!data.isPlaying) {
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
            <SpotifyIcon className="h-5 w-5 text-zinc-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">not playing</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">spotify</p>
          </div>
        </div>
      )
    }

    return (
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
      >
        {data.albumArt ? (
          <img
            src={data.albumArt}
            alt="album art"
            className="h-10 w-10 shrink-0 rounded-md object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
            <SpotifyIcon className="h-5 w-5 text-green-500" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">
            {data.title}
          </p>
          <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">{data.artist}</p>
        </div>
        <AnimatedBars />
      </a>
    )
  })()

  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
      <div className="relative h-full w-full rounded-[15px] bg-white px-4 py-3 dark:bg-zinc-950">
        {inner}
      </div>
    </div>
  )
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}
