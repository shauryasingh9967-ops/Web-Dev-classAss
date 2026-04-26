import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Data from '../Data'

const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const post = Data.find((item) => item.id === parseInt(id))

  return (
    <>
      <div>Details</div>
      <button onClick={() => navigate(-1)}>Back</button>
      <>
        <h1>{post.title}</h1>
        <img src={post.img_url} alt={post.title} />
        <p>{post.description}</p>
      </>
    </>
  )
}

export default Details
