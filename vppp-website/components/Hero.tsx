import React from 'react'
import { getAssetPath } from '@/utils/paths'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${getAssetPath('/vandy_background.png')}")`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Partners for Parkinson's
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            At Vanderbilt University
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero 