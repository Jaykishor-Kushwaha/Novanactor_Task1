import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
   <>
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center">
  <main className="flex flex-col items-center text-center mt-20 px-6">
    <h1 className="text-6xl font-extrabold tracking-wide uppercase text-emerald-400">
      Jaykishor Kushwaha
    </h1>
    <p className="text-2xl font-medium mt-4 text-yellow-400">
      Full Stack Developer
    </p>
    <p className="mt-6 text-lg max-w-2xl text-gray-300 leading-relaxed">
      Bringing innovative solutions to life with cutting-edge technology.
    </p>
    <button className="mt-8 px-8 py-3 bg-emerald-500 text-gray-900 rounded-full text-lg font-semibold hover:bg-emerald-400 hover:text-gray-800 transition duration-300 shadow-lg">
      <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
    </button>
  </main>
</div>


   <About></About>
   <Contact></Contact>
   </>
  )
}

export default Home
