import React from 'react'
import Data from '../Data'

const Fitness = () => {
  const FitnessData = Data.filter((item) => item.category === "Fitness")
  console.log(FitnessData)

  return (
    <>
      {FitnessData.map((fitnessdata) => (
        <React.Fragment key={fitnessdata.id}>
          <h1>{fitnessdata.title}</h1>
          <img src={fitnessdata.img_url} alt={fitnessdata.title} />
        </React.Fragment>
      ))}
    </>
  )
}

export default Fitness
