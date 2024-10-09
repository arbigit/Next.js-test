'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Navbar = () => (
  <nav className="bg-gradient-to-r from-purple-800 to-pink-800 shadow-lg fixed w-full z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
          <Image src="/TNCLogo.webp" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
          <Link href="/" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            Home
          </Link>
          <Link href="/about" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            About
          </Link>
          <Link href="/book" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            Book Discovery Call
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-lg">Copyright 2024 The Next Chapter</p>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="flex flex-wrap justify-end">
            <li className="mr-6 mb-2"><Link href="/" className="hover:text-pink-300 transition-all">Home</Link></li>
            <li className="mr-6 mb-2"><Link href="/about" className="hover:text-pink-300 transition-all">About</Link></li>
            <li className="mb-2"><Link href="/book" className="hover:text-pink-300 transition-all">Book Discovery Call</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

const FoundationsOfEmotionalSobrietyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800 leading-tight">Reclaim control of your head, heart and home.</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-600">Get started with my free audio course!</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-800">Welcome to<br />Foundations of Emotional Sobriety</h2>
            <Link 
              href="https://app.helloaudio.fm/feed/f37e8677-56fd-451b-8d28-f96efbb71bde/signup" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-bold py-3 px-6 rounded-full inline-flex items-center transition-all text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Click here for immediate access to the private podcast feed
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* What is Emotional Sobriety Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-800">What is Emotional Sobriety?</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              <div className="lg:w-1/2 max-w-lg">
                <Image 
                  src="/foundationsofemotional.webp" 
                  alt="Foundations of Emotional Sobriety" 
                  width={600} 
                  height={600} 
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-all"
                />
              </div>
              <div className="lg:w-1/2 max-w-lg">
                <p className="text-xl mb-4 leading-relaxed">When you&apos;re no longer intoxicated by bullshit--your own or anyone else&apos;s.</p>
                <p className="text-xl mb-4 leading-relaxed">&quot;Stuck&quot; is a feeling, not a fact. Stop waiting for permission, approval or for life circumstances to improve so that you can feel powerful.</p>
                <p className="text-xl mb-4 leading-relaxed">Learn how to clear the emotional obstacles so you can be powerful NOW--as you are, where you are.</p>
                <p className="text-2xl font-bold text-purple-700">Because powerful people live powerful lives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Owner's Manual Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-800">Foundations of Emotional Sobriety is the owner&apos;s manual for your mind and body.</h2>
            <p className="text-xl mb-8">Get the tools, tips and strategies to:</p>
            <ul className="text-left max-w-2xl mx-auto space-y-6 mb-12">
              <li className="flex items-start bg-purple-50 p-4 rounded-lg shadow-md">
                <span className="text-3xl mr-4 flex-shrink-0">👉🏼</span>
                <span className="text-lg">Separate fact from fiction so you can figure out…what else could be true?</span>
              </li>
              <li className="flex items-start bg-pink-50 p-4 rounded-lg shadow-md">
                <span className="text-3xl mr-4 flex-shrink-0">👉🏼</span>
                <span className="text-lg">Change habitual thought patterns with self-coaching strategies that expand your perspective and shift your focus from past to future.</span>
              </li>
              <li className="flex items-start bg-purple-50 p-4 rounded-lg shadow-md">
                <span className="text-3xl mr-4 flex-shrink-0">👉🏼</span>
                <span className="text-lg">Regulate your nervous system and process your emotions in real time so you&apos;re no longer held hostage by anxiety.</span>
              </li>
            </ul>
            <Link 
              href="https://app.helloaudio.fm/feed/f37e8677-56fd-451b-8d28-f96efbb71bde/signup" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-bold py-3 px-6 rounded-full inline-flex items-center transition-all text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Click here for immediate access to free audio course!
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FoundationsOfEmotionalSobrietyPage