import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Hollywood = () => {
  const HollywoodData = Data.filter((item) => item.category === "Hollywood")
  console.log(HollywoodData)

  return (
    <>
      {HollywoodData.map((hollydata) => (
        <React.Fragment key={hollydata.id}>
          <Link to={`/post/${hollydata.id}`}>
            <h1>{hollydata.title}</h1>
            <img src={hollydata.img_url} alt={hollydata.title} />
          </Link>
        </React.Fragment>
      ))}
    </>
  )
}

export default Hollywood
