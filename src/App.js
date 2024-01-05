import React from 'react'

import {About, Footer, Header, Skills, Testimonial, Work} from "./container";
import { Navbar } from "./components";
import "./App.scss";
import IntroAnim from './container/IntroAnim/IntroAnim';

const App = () => {
  return (
    <div className='app'>
      <IntroAnim />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App