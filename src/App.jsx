import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Para from './Components/Para'
import MasonryGrid from './Components/MasonryGrid'

const App = () => {
  return (


    <div>
      <div>
        <Navbar />
        <Landing />
      </div>
      <div><Para /></div>
      <div><MasonryGrid /></div>
    </div>
  )
}

export default App