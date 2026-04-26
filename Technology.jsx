import React from 'react'
import Data from '../Data'

const Technology = () => {
  const TechnologyData = Data.filter((item) => item.category === "Technology")
  console.log(TechnologyData)

  return (
    <>
      {TechnologyData.map((techdata) => (
        <React.Fragment key={techdata.id}>
          <h1>{techdata.title}</h1>
          <img src={techdata.img_url} alt={techdata.title} />
        </React.Fragment>
      ))}
    </>
  )
}

export default Technology
