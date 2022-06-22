import React from 'react'
import About from './components/About'
import LandingCaroussel from './components/LandingCaroussel'
import MyName from './components/MyName'
import Portfolio from './components/Portfolio'


function App() {
  return (
    <>
        <div className="container">
            <MyName />
            <LandingCaroussel />
        </div>
        <About/>
        <Portfolio />
    </>
  )
}

export default App