import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import JoinSection from '@/components/JoinSection'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Events />
      <JoinSection />
    </div>
  )
}
