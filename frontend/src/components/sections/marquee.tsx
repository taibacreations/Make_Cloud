"use client"
import React from 'react'

const images = [
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
]

const Marquee = () => {
  return (
    <section className='hero h-[160px] flex items-center'>
      <div className="overflow-hidden w-full relative">
        <div
          className="flex items-center animate-marquee gap-37"
          style={{ width: 'max-content' }}
        >
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Marquee image ${i + 1}`}
              className="h-auto[105px] w-[392px] object-contain"
              draggable={false}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Marquee