'use client'
import { motion } from 'motion/react'
import { PHOTOS } from '../data'
import Image from 'next/image'

export default function PhotosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Photography
      </motion.h1>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 break-inside-avoid"
          >
            <div className="relative w-full">
              <Image
                src={photo.image}
                alt=""
                width={2000}
                height={3000}
                className="w-full h-auto rounded-lg"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 