import React from 'react'
import Data from '../Data'

const Food = () => {
  const filteredData = Data.filter((item) => item.category === "Food")
  console.log(filteredData)

  return (
    <>
      {filteredData.map((fooddata) => (
        <React.Fragment key={fooddata.id}>
          <h1>{fooddata.title}</h1>
          <img src={fooddata.img_url} alt={fooddata.title} />
        </React.Fragment>
      ))}
    </>
  )
}

export default Food
