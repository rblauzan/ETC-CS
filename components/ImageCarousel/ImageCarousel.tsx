'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface ImageItem {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: ImageItem[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
    setCurrentIndex(index)
  }

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    scrollToImage(newIndex)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length
    scrollToImage(newIndex)
  }

  useEffect(() => {
    const handleResize = () => {
      scrollToImage(currentIndex)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex])

  return (
    <div className="relative w-full mx-auto max-w-5xl">
      <div 
        ref={carouselRef}
        className="flex overflow-x-hidden scroll-smooth rounded"
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative aspect-video">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-200"
        onClick={handlePrevious}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-200"
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => scrollToImage(index)}
          />
        ))}
      </div>
    </div>
  )
}
