'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sponsors = [
  { name: 'Windsurf', logo: '/assets/sponsors/windsurf-black-wordmark.svg', url: 'https://windsurf.com/' },
  { name: 'Remi', logo: '/assets/sponsors/remi.png', url: 'https://www.remihq.com/' },
  { name: 'Runpod', logo: '/assets/sponsors/runpod.svg', url: 'https://runpod.io/' },
  { name: 'Contrary', logo: '/assets/sponsors/contrary.svg', url: 'https://contrary.com/' },
  { name: 'Bolt', logo: '/assets/sponsors/bolt.svg', url: 'https://bolt.new/' },
  { name: 'Sameday', logo: '/assets/sponsors/sameday.png', url: 'https://www.gosameday.com/' },
  { name: 'Stratus', logo: '/assets/sponsors/stratus.png', url: 'https://www.usestratus.com/' },
  { name: 'Redo', logo: '/assets/sponsors/redo.png', url: 'https://www.getredo.com/en' },
  { name: 'Manus', logo: '/assets/sponsors/manus.png', url: 'https://manus.im/app' },
  { name: 'Mastra', logo: '/assets/sponsors/mastra.png', url: 'https://mastra.ai/' },
  { name: 'Cerebras', logo: '/assets/sponsors/cerebras.png', url: 'https://www.cerebras.ai/' },
  { name: 'Cartwheel', logo: '/assets/sponsors/cartwheel.svg', url: 'https://getcartwheel.com/' },
  { name: 'Buster', logo: '/assets/sponsors/buster.png', url: 'https://www.buster.so/' },
];

const faqs = [
  {
    question: "Can anyone join?",
    answer: "Yes – no credentials required. We welcome all passionate builders."
  },
  {
    question: "Who is behind this?",
    answer: "JustBuild was founded and is run by Max Forsey and Jacob Wright."
  },
  {
    question: "How are winners selected for hackathons?",
    answer: "Criteria differ for each hackathon, so please check the specific event page for details. In general, we value innovation, technical ability, and creativity. A great demo goes a long way!"
  },
  {
    question: "Where can I learn about coworking sessions?",
    answer: "Our regular coworking sessions are called saturdays@byu. Check the Event Calendar for the schedule and location details."
  },
  {
    question: "Do I need a company to apply/participate?",
    answer: "No, you do not need a company to join the community or participate in events."
  },
  {
    question: "I love this idea and I want to help! Can I provide additional funding, sponsorship, a venue, or mentorship?",
    answer: "Yes! Thank you for being awesome! If you want to contribute in any way, please email us at hello@justbuild.ing or join the slack and DM Max or Jacob."
  },
  {
    question: "I have further questions! How can I reach you?",
    answer: "You can reach us at hello@justbuild.ing"
  }
];

export default function Home() {
  const [cyclingIndex, setCyclingIndex] = useState(0);
  const [faqOpenStates, setFaqOpenStates] = useState<boolean[]>(new Array(faqs.length).fill(false));
  
  const roles = useMemo(() => [
    'founders',
    'business owners',
    'product managers',
    'software engineers',
    'designers',
    'students',
    'professionals'
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCyclingIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-tertiary pt-32 sm:pt-32 md:pt-40 lg:pt-40 pb-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Content */}
            <div className="lg:col-span-2 order-2 lg:order-1 relative z-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 leading-tight">
                JustBuild
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 break-words leading-relaxed">
                Connecting Silicon Valley to Silicon Slopes
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-start">
                <a 
                  href="https://lu.ma/justbuild" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-bridge-500 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-center relative z-20"
                >
                  See upcoming events
                </a>
                <a 
                  href="https://tinyurl.com/jb-slackinvite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-bridge-500 text-white font-semibold rounded-lg hover:bg-bridge-600 transition-all duration-300 text-center relative z-20"
                >
                  Join Slack
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] lg:col-span-3 order-1 lg:order-2 lg:mt-0 z-10">
              <Image
                src="/assets/bridge.webp"
                alt="Bridge connecting Silicon Valley to Silicon Slopes"
                fill
                priority
                className="object-cover object-center rounded-2xl"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
        <h2 className="text-3xl font-semibold text-center mb-8">Trusted by</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
          {sponsors.slice(0, 8).map((sponsor) => (
            <div key={sponsor.name} className="flex justify-center items-center bg-tertiary rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-20">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                <Image 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`}
                  width={120}
                  height={60}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            </div>
          ))}
          {sponsors.slice(8).map((sponsor) => (
            <div key={sponsor.name} className="flex justify-center items-center bg-tertiary rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-20">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                <Image 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`}
                  width={120}
                  height={60}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            </div>
          ))}
          <div className="flex justify-center items-center bg-tertiary rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-20 col-span-1 md:col-span-2">
            <Link href="/contact" className="text-gray-500 font-medium hover:text-bridge-500 transition-colors">
              Become a sponsor →
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* AI Native Section */}
      <section className="pb-20 pt-20 bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-semibold mb-4">We help Utah</h2>
            <div className="text-4xl font-semibold text-bridge-500 mb-4 transition-opacity duration-300">
              {roles[cyclingIndex]}
            </div>
            <p className="text-lg text-gray-600">
              become AI-Native through events and community
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-4 text-left">
                <h3 className="text-xl font-semibold mb-2">Foster community</h3>
                <p className="text-gray-600 mb-4">of sharing and building</p>
                <a 
                  href="https://tinyurl.com/jb-slackinvite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-bridge-500 text-white font-semibold rounded-lg hover:bg-bridge-600 transition-all duration-300 mt-auto"
                >
                  Join Slack
                </a>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-4 text-left">
                <h3 className="text-xl font-semibold mb-2">Host hackathons</h3>
                <p className="text-gray-600 mb-4">with thousands in prizes</p>
                <a 
                  href="https://lu.ma/justbuild" 
                  target="_blank" 
                  rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-tertiary text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 mt-auto"
                >
                  See upcoming events
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex justify-center">
              <Image 
                src="/assets/JustBuild.webp" 
                alt="JustBuild community and events showcase"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover max-w-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-16 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
          <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-tertiary rounded-lg shadow-md">
                <div 
                  className="cursor-pointer flex justify-between items-center p-6 hover:bg-gray-100 transition-colors rounded-lg"
                  onClick={() => {
                    const newStates = [...faqOpenStates];
                    newStates[index] = !newStates[index];
                    setFaqOpenStates(newStates);
                  }}
                >
                  <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                  <div className={`w-6 h-6 flex items-center justify-center bg-bridge-500 text-white rounded-full transition-transform ${faqOpenStates[index] ? 'rotate-180' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className={`transition-all duration-300 ${faqOpenStates[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
