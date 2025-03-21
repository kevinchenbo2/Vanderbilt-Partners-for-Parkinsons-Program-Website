import React from 'react'
import Link from 'next/link'

const JoinSection: React.FC = () => {
  return (
    <section id="join" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-white mb-8">
          Join Our Mission Today
        </h3>
        <Link
          href="/signup"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Join Now
        </Link>
      </div>
    </section>
  )
}

export default JoinSection 