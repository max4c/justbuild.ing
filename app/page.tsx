'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';

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
  { name: 'Mastra', logo: '/assets/sponsors/mastra.jpg', url: 'https://mastra.ai/' },
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
  const [faqOpen, setFaqOpen] = useState(false);
  
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
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" style={{ transform: 'scaleX(-1)' }}>
          <ResponsiveImage
            src="/assets/bridge.webp"
            alt="Bridge connecting Silicon Valley to Silicon Slopes"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
            imageType="hero"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient z-0" />
        
        {/* Content */}
        <div className="relative z-10 container py-32">
          <div className="max-w-2xl ml-8">
            <h1 className="text-6xl lg:text-7xl font-semibold text-white mb-4">
              JustBuild
            </h1>
            <p className="text-xl text-white mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Connecting Silicon Valley to Silicon Slopes
            </p>
            
            <div className="flex flex-wrap gap-3 items-start">
              <a 
                href="https://lu.ma/justbuild" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-bridge-500 transition-all duration-300"
              >
                See upcoming events
              </a>
              <a 
                href="https://tinyurl.com/jb-slackinvite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-bridge-500 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Join Slack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-32 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Trusted by</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
          {sponsors.slice(0, 8).map((sponsor) => (
            <div key={sponsor.name} className="flex justify-center items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-20">
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
            <div key={sponsor.name} className="flex justify-center items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-20">
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
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-20 col-span-1 md:col-span-2">
            <Link href="/contact" className="text-gray-500 font-medium hover:text-bridge-500 transition-colors">
              Become a sponsor →
            </Link>
          </div>
        </div>
      </section>

      {/* AI Native Section */}
      <section className="pb-0 pt-20">
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-bridge-500 text-bridge-500 font-semibold rounded-lg hover:bg-bridge-500 hover:text-white transition-all duration-300 mt-auto"
                >
                  See upcoming events
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex justify-center">
              <ResponsiveImage 
                src="/assets/JustBuild.webp" 
                alt="JustBuild community and events showcase"
                width={1200}
                height={800}
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover max-w-4xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                imageType="showcase"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-16 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
          <div 
            className="cursor-pointer flex justify-between items-center p-6 bg-white rounded-lg mb-4 shadow-md hover:bg-gray-50 transition-colors"
            onClick={() => setFaqOpen(!faqOpen)}
          >
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className={`w-8 h-8 flex items-center justify-center bg-bridge-500 text-white rounded-full transition-transform ${faqOpen ? 'rotate-180' : ''}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className={`space-y-4 transition-all duration-400 ${faqOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
