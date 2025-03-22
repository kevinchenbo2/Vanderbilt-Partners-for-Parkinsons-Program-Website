import React from 'react'

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Past Events</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our events bring together community members, volunteers, and partners
              to create meaningful impact. Through these gatherings, we hope to continue
              reaching countless individuals and make a difference in their lives.
            </p>
            <p className="text-lg text-gray-600">
              Watch our latest event where we interviewed with the Parkinson's Disease 
              Wellness Club hosted by Lisa Cate on September 9th, 2024.
            </p>
          </div>

          {/* Right Column - YouTube Video */}
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Z4eA-jE4Vmg"
              title="Event Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events