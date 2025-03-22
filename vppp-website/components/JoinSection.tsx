import React from 'react'

const JoinSection: React.FC = () => {
  return (
    <section id="join" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-white mb-8">
          Join Us Today!
        </h3>
        <a
          href="https://forms.gle/mL8wbojzLUxkDGo97"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Now
        </a>
      </div>
    </section>
  )
}

export default JoinSection 