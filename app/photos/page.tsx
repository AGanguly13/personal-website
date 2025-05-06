'use client'
import { motion, AnimatePresence } from 'motion/react'
import { PHOTOS } from '../data'
import Image from 'next/image'
import { useState } from 'react'

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleImageLoad = (imagePath: string) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev)
      newSet.add(imagePath)
      return newSet
    })
  }

  return (
    <div className="w-full px-2 py-8">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
        {PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2 break-inside-avoid cursor-pointer"
            onClick={() => setSelectedPhoto(photo.image)}
          >
            <div className="relative w-full">
              {!loadedImages.has(photo.image) && (
                <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-lg" />
              )}
              <Image
                src={photo.image}
                alt=""
                width={2000}
                height={3000}
                className={`w-full h-auto rounded-lg transition-opacity duration-300 ${
                  loadedImages.has(photo.image) ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectFit: 'contain' }}
                onLoadingComplete={() => handleImageLoad(photo.image)}
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto}
                alt=""
                width={2000}
                height={3000}
                className="w-auto h-auto max-h-[90vh] rounded-lg"
                style={{ objectFit: 'contain' }}
                priority
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedPhoto(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 