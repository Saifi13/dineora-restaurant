import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './navbar'
import Hero from './hero'
import Menu from './menu'
import Dine from './components/Dine'
import Reviews from './components/Reviews'
import Feast from './components/feast'
import Footer from './components/footer'
import ScrollTextReveal from "./components/ScrollTextReveal";

function App() {

  return (
    <>
      <ScrollTextReveal />
      <Navbar />
      <Hero />
      <Menu/>
      <Dine/>
      <Reviews />
      <Feast/>
      <Footer/>
    </>
  )
}

export default App
