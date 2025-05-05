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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-64">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{photo.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{photo.description}</p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{photo.date}</span>
                <span>{photo.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 