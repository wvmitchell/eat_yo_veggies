import React from 'react'
import VeggieCard from '../VeggieCard'

const VeggiesContainer = (props) => {
  const veggies = props.veggies || []
  const veggieCards = veggies.map((veggie, index) => <VeggieCard 
                                                        key={`veggie-${index}`}
                                                        name={veggie} 
                                                      />)

  return(
    <div className="veggiesContainer">
      {veggieCards}
    </div>
  )
}

export default VeggiesContainer
