import React from 'react'
import LeftCard from '../Left-Card/LeftCard'
import MiddleCard from '../Middle-Card/MiddleCard'
import Righntcard from '../Right-card/RigntCard'
import './MainCard.css'
function MainCard() {
  return (
    <div className='maincard'>
      <LeftCard/>
      <MiddleCard/>
      <Righntcard/>
      
    </div>
  )
}

export default MainCard