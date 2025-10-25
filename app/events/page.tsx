import Image from 'next/image';
import ResponsiveImage from '@/components/ResponsiveImage';

interface Event {
  title: string;
  goal: string;
  date: string;
  attendees: number;
  prizes: string;
  sponsors: Array<{ name: string; logo: string; url: string }>;
  winners: Array<{ 
    position?: string;
    name: string;
    nameLink?: string;
    additionalNames?: string;
    project: string;
    projectLink?: string;
  }>;
}

const parsePrizeToNumber = (value: string): number => {
  const cleaned = value.replace(/[\s$,]/g, '').toUpperCase();
  if (cleaned.endsWith('K')) {
    return parseFloat(cleaned.slice(0, -1)) * 1_000;
  }
  if (cleaned.endsWith('M')) {
    return parseFloat(cleaned.slice(0, -1)) * 1_000_000;
  }
  const numeric = parseFloat(cleaned);
  return Number.isNaN(numeric) ? 0 : numeric;
};

const events: Event[] = [
  {
    title: "Crimson Hacks",
    goal: "University of Utah's largest hackathon with a Mission to Mars theme.",
    date: "October 24 2025",
    attendees: 120,
    prizes: "$2K",
    sponsors: [
      { name: "Redo", logo: "/assets/sponsors/redo.png", url: "https://www.getredo.com/en" },
      { name: "RunPod", logo: "/assets/sponsors/runpod.svg", url: "https://runpod.io/" }
    ],
    winners: [
      { position: "Best Overall", name: "Team Rover-Q", project: "Full-stack app demonstrating Q-learning to solve mazes" },
      { position: "Best Technical Implementation", name: "Josh Gimenez", project: "Built Marvis, a camera HUD that performs object detection, displays components on screen, and can be created and updated with voice commands" },
      { position: "Best Game", name: "Team Jim's Angels", project: "Catstronaut, a video game where a cat solves LeetCode problems" },
      { position: "Best UX/UI", name: "Team The Unemployed", project: "Hand-drawn interface paired with an original soundtrack and storyline" },
      { position: "Best Use of AI/ML", name: "Team Weather Predictions", project: "Binary classification model on NASA Mars rover imagery to predict clear weather" },
      { position: "Most Ambitious Concept", name: "Team Utah Robotics", project: "Depth-camera powered KNN surface reconstruction tested in Unity for rocket landings" },
      { position: "Funniest/Wildest", name: "Team MarsCam", project: "Camera filters and backgrounds transforming participants into aliens with space accessories" }
    ]
  },
  {
    title: "Agent Hackathon",
    goal: "Build AI agents to solve real-world problems.",
    date: "August 16 2025",
    attendees: 65,
    prizes: "$5K",
    sponsors: [
      { name: "Redo", logo: "/assets/sponsors/redo.png", url: "https://www.getredo.com/en" },
      { name: "Windsurf", logo: "/assets/sponsors/windsurf-black-wordmark.svg", url: "https://windsurf.com/" },
      { name: "Mastra", logo: "/assets/sponsors/mastra.png", url: "https://mastra.ai/" }
    ],
    winners: [
      { position: "1st", name: "Ben Woodward", project: "AI agent that auto-schedules doctor appointments across multiple offices (inspired by grandpa with dementia)" },
      { position: "2nd", name: "Josh Gimenez", project: "Phone agent that controls devices via text commands - navigated Hinge and took selfie autonomously" },
      { position: "3rd", name: "Jazzi Brensan", nameLink: "https://www.linkedin.com/in/jazzi-brensan/", additionalNames: ", Zach Martim, David Pineda", project: "Product Pre-launch: AI agents simulating customer personas to predict product launch success" }
    ]
  },
  {
    title: "May Revenue Race",
    goal: "Build and ship a product that earns real revenue in one month.",
    date: "May 3 – 31 2025",
    attendees: 40,
    prizes: "$50K",
    sponsors: [
      { name: "RunPod", logo: "/assets/sponsors/runpod.svg", url: "https://runpod.io/" },
      { name: "Contrary", logo: "/assets/sponsors/contrary.svg", url: "https://contrary.com/" }
    ],
    winners: [
      { name: "Anonymous", project: "Emotional Map (GPT extension for therapy)" },
      { name: "Alexander", nameLink: "https://www.linkedin.com/in/alexander-densley/", project: "Permitify (AI-powered plan review for architects and engineers)", projectLink: "https://www.permitify.com/" },
      { name: "Jason", nameLink: "https://x.com/MCCJasonX", project: "yolomode.ai (AI video content generator)", projectLink: "https://yolomode.ai/" },
      { name: "Lily", nameLink: "https://x.com/Lilyheartkoala", project: "RoomVamp (AI-powered room planner)", projectLink: "https://roomvamp.com/" },
      { name: "Shaik Mohd Huzaifa", nameLink: "https://x.com/ShaikMohdHuzaif", project: "Spoom (All in one tool to connect chat, tools, and data)", projectLink: "https://spoom-ai.netlify.app/" },
      { name: "Andrew Lund & Thomas Lund", nameLink: "https://www.linkedin.com/in/lundandrew/", project: "Misto (Software Tool for Farmers Market Vendors)", projectLink: "https://getmisto.com/" }
    ]
  },
  {
    title: "Manus Meetup Provo",
    goal: "Find the best or most innovative use case for Manus AI.",
    date: "May 29 2025",
    attendees: 78,
    prizes: "$50K",
    sponsors: [
      { name: "Manus AI", logo: "/assets/sponsors/manus.png", url: "https://manus.im/app" },
      { name: "Contrary", logo: "/assets/sponsors/contrary.svg", url: "https://contrary.com/" }
    ],
    winners: [
      { position: "1st", name: "Ben Fife and Russel Fife", nameLink: "https://x.com/ammonfife", project: "Used Manus to manage Google Cloud, built 2 video games" },
      { position: "2nd", name: "Jens Shumway", nameLink: "https://x.com/jenshummy", project: "Stock Analyzer Dashboard" },
      { position: "3rd", name: "Michael Davis", nameLink: "https://www.linkedin.com/in/michael-davis-498byu/", project: "Startup idea generation from patent scraping" }
    ]
  },
  {
    title: "Multi-Modal AI Hackathon",
    goal: "Build with audio, image, video, and text AI models.",
    date: "March 8 2025",
    attendees: 44,
    prizes: "$1K",
    sponsors: [
      { name: "Cerebras", logo: "/assets/sponsors/cerebras.png", url: "https://www.cerebras.ai/" },
      { name: "Sameday", logo: "/assets/sponsors/sameday.png", url: "https://www.gosameday.com/" }
    ],
    winners: [
      { position: "1st", name: "Tristan Rhodes & Team OmniVision", nameLink: "https://x.com/tristanbob", project: "Real-time video recognition" },
      { position: "2nd", name: "Matt Wood", nameLink: "https://www.linkedin.com/in/mattwoodco/", project: "RealReal (LLM workflow builder)" },
      { position: "3rd (Tie)", name: "Jack Saller", nameLink: "https://www.linkedin.com/in/jack-saller-15514212a/", project: "Music generation via hand video recognition" },
      { position: "3rd (Tie)", name: "Jeffrey Olmo", nameLink: "https://x.com/JeffOlmo", project: "Spotify playlist generation from image" }
    ]
  },
  {
    title: "Utah Tech Week's Shortest Hackathon",
    goal: "2-hour hackathon. Build, demo, win.",
    date: "January 29 2025",
    attendees: 65,
    prizes: "$4K",
    sponsors: [
      { name: "Buster", logo: "/assets/sponsors/buster.png", url: "https://www.buster.so/" },
      { name: "Remi", logo: "/assets/sponsors/remi.png", url: "https://www.remihq.com/" }
    ],
    winners: [
      { position: "1st", name: "Jake Gibson", nameLink: "https://www.linkedin.com/in/jakegibson/", project: "Dynamic Pokemon Go with AI" },
      { position: "2nd", name: "Beric Bearnson", nameLink: "https://www.linkedin.com/in/beric-bearnson/", project: "Chat app on microprocessors" },
      { position: "3rd", name: "Nate Kelley", nameLink: "https://www.linkedin.com/in/nate-kelley/", project: "Collaborative 20 Questions game" }
    ]
  },
  {
    title: "JustBuild Kickoff Hackathon",
    goal: "24-hour hackathon. Kickoff event.",
    date: "December 6 2024",
    attendees: 39,
    prizes: "$3K",
    sponsors: [
      { name: "Remi", logo: "/assets/sponsors/remi.png", url: "https://www.remihq.com/" },
      { name: "Cartwheel", logo: "/assets/sponsors/cartwheel.svg", url: "https://getcartwheel.com/" },
      { name: "Stratus", logo: "/assets/sponsors/stratus.png", url: "https://www.usestratus.com/" }
    ],
    winners: [
      { position: "1st", name: "Taeyang Kim, Jonghyuk Lee, Taehoon Kim, Yirang Lim", nameLink: "https://www.linkedin.com/in/brightlightkim/", project: "Remi 2.0 (AI Roofing Analysis & Marketing)" },
      { position: "2nd", name: "Josh Gimenes", nameLink: "https://www.linkedin.com/in/josh-gimenes/", project: "AI Course Builder (Web/Android/iOS)" },
      { position: "3rd", name: "Chandler J. Ward", nameLink: "https://x.com/chandlerjward", project: "AI Roof Analyzer (RoboFlow Vision Model)" },
      { position: "Best UX/UI", name: "Travisse Hansen", nameLink: "https://www.linkedin.com/in/travisse/", project: "AI Body Fat Analyzer & Physique Upsell" },
      { position: "Most Practical AI", name: "Ben Cullen, Collin McGregor, Sawyer Halverson", nameLink: "https://www.linkedin.com/in/ben-n-cullen/", project: "Leet-Coach (AI Leetcode Coach)" }
    ]
  }
];

const totalBuilders = events.reduce((sum, event) => sum + event.attendees, 0);
const totalPrizeMoney = events.reduce((sum, event) => sum + parsePrizeToNumber(event.prizes), 0);
const formattedTotalPrizeMoney = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
}).format(totalPrizeMoney);

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-tertiary pt-32 sm:pt-32 md:pt-40 lg:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">
          <h1 className="text-6xl font-semibold text-gray-900 text-center mb-12">
            Past Events
          </h1>
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Event Header */}
                <div className="mb-4">
                  {/* Mobile: Stack vertically, Desktop: Single row */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-600 italic leading-relaxed">{event.goal}</p>
                    </div>
                    
                    {/* Mobile: Stack sponsors and stats */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:flex-row lg:items-center">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        {event.sponsors.map((sponsor, idx) => {
                          const isLargerLogo = ['Windsurf', 'Mastra', 'Buster', 'Remi'].includes(sponsor.name);
                          return (
                            <a key={idx} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                              <Image 
                                src={sponsor.logo} 
                                alt={sponsor.name}
                                width={isLargerLogo ? 70 : 50}
                                height={isLargerLogo ? 30 : 22}
                                loading="lazy"
                                className={`${isLargerLogo ? 'h-[30px]' : 'h-[22px]'} w-auto object-contain grayscale-[0.3] hover:grayscale-0 transition-all`}
                              />
                            </a>
                          );
                        })}
                      </div>
                      
                      <div className="bg-tertiary px-3 py-2 rounded-lg">
                        <div className="flex items-center text-xs">
                          <div className="text-center flex-1">
                            <span className="block text-sm font-bold text-bridge-500">{event.attendees}</span>
                            <span className="text-xs uppercase text-gray-600">Builders</span>
                          </div>
                          <div className="w-px h-4 bg-gray-300 mx-2"></div>
                          <div className="text-center flex-1">
                            <span className="block text-sm font-bold text-bridge-500">{event.prizes}</span>
                            <span className="text-xs uppercase text-gray-600">In Prizes</span>
                          </div>
                          <div className="w-px h-4 bg-gray-300 mx-2"></div>
                          <div className="text-center flex-1">
                            <span className="block text-sm font-medium text-gray-600">{event.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Winners Section */}
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-bold text-gray-900 mb-3">Winners:</h4>
                  <ul className="space-y-2">
                    {event.winners.map((winner, idx) => (
                      <li key={idx} className="text-sm py-2 border-b border-gray-100 last:border-0">
                        <span className="font-semibold text-bridge-500">
                          {winner.position && `${winner.position}: `}
                          {winner.nameLink ? (
                            <>
                              <a href={winner.nameLink} target="_blank" rel="noopener noreferrer" 
                                 className="hover:underline">
                                {winner.name}
                              </a>
                              {winner.additionalNames && <span>{winner.additionalNames}</span>}
                            </>
                          ) : winner.name}
                        </span>
                        <span className="text-gray-600 ml-2">
                          - {winner.projectLink ? (
                            <a href={winner.projectLink} target="_blank" rel="noopener noreferrer" 
                               className="text-bridge-500 hover:underline">
                              {winner.project}
                            </a>
                          ) : winner.project}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
