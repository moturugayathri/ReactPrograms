

import React from 'react'

import { useState } from 'react'

const StateMgm = () => {

    const [sampleCond, setSampleCond] = useState(true)

     const city = sampleCond ? "Hyderabad" : "Bangalore" 

  return (
    <div>
      <h1>I live in {city} </h1>
    </div>
  )
}

export default StateMgm