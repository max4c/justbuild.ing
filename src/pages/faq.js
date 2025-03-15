import { useState } from 'react'
import SectionCard from '../components/SectionCard'

// FAQ Item component
function FaqItem({ question, children }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={`bg-dark-lighter rounded-lg mb-4 overflow-hidden transition-all ${isOpen ? 'shadow-md' : ''}`}>
      <button 
        className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white">{question}</span>
        <span className={`text-2xl transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-white">Hackathon FAQ</h1>
      
      <SectionCard>
        <FaqItem question="What is the schedule?">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-white mb-2">Friday</h3>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-400 min-w-[150px]">6:00-7:00 PM</span>
                  <span>Introductions & Remi Lightning Talk & Team Formation</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-400 min-w-[150px]">7:00 PM onwards</span>
                  <span>Building</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-white mb-2">Saturday</h3>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-400 min-w-[150px]">Morning</span>
                  <span>Building</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-400 min-w-[150px]">12:00-1:00 PM</span>
                  <span>Lunch + Cartwheel Lightning Talk</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-400 min-w-[150px]">1:00-2:00 PM</span>
                  <span>Live Demos</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-400 min-w-[150px]">2:00-2:30 PM</span>
                  <span>Judging</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-400 min-w-[150px]">2:30-2:45 PM</span>
                  <span>Closing Thoughts and Announce winners</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-400 min-w-[150px]">2:45-3:00 PM</span>
                  <span>Wrap Up</span>
                </div>
              </div>
            </div>
          </div>
        </FaqItem>
        
        <FaqItem question="How do teams work?">
          <p>No builder has to join a team. Team sizes are limited to 4 people. There will be time for team formations at the beginning of the hackathon.</p>
        </FaqItem>

        <FaqItem question="Is there a theme for the hackathon?">
          <p>There is no theme for the event just building 😉</p>
        </FaqItem>

        <FaqItem question="What are the rules?">
          <p>You can build upon existing ideas, but all code must be written during the hackathon.</p>
        </FaqItem>

        <FaqItem question="Can I use AI?">
          <div>
            <p className="mb-2">YES! Aside from the general foundation models, here are some fun AI tools to use:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li><a href="https://bolt.new/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-warm">bolt.new</a></li>
              <li><a href="https://v0.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-warm">v0.dev</a></li>
              <li><a href="https://www.recraft.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-warm">recraft.ai</a></li>
            </ul>
          </div>
        </FaqItem>

        <FaqItem question="How do submissions work?">
          <ul className="list-disc pl-5 space-y-1">
            <li>Projects will be live-demoed. You will have about 5 minutes to present</li>
            <li>Live demos start at 1 PM</li>
          </ul>
        </FaqItem>

        <FaqItem question="What is the judging criteria?">
          <ul className="list-disc pl-5 space-y-1">
            <li>Technical skill</li>
            <li>User experience</li>
            <li>Project completion</li>
            <li>Innovation</li>
          </ul>
        </FaqItem>

        <FaqItem question="What are the prizes?">
          <p>To be announced 🤑</p>
        </FaqItem>

        <FaqItem question="What about food?">
          <p>Snacks will be provided on Friday night. Lunch will be provided on Saturday afternoon. Breakfast may be there for those early in the morning.</p>
        </FaqItem>

        <FaqItem question="What are the building access hours?">
          <p>The building will be open for the entire event but with a caveat: a co-host will have to let you in. With that in mind, plan accordingly.</p>
        </FaqItem>

        <FaqItem question="What is the Code of Conduct?">
          <p>justbuild.ing maintains the right to remove anyone from the hackathon. Grounds for removal include but are not limited to sabotaging another team's code, displays of verbal or non-verbal aggression, etc.</p>
        </FaqItem>
      </SectionCard>
    </div>
  )
}
