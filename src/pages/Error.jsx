import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container-md about-section text-center text-danger'>
      <h1>Oops, Error 404</h1>
      <p>Page does not exist</p>
      <Link to="/"> 
      <button className='btn btn-success'>Go back to Homepage</button>
      </Link>
    </div>
  )
}

export default Error