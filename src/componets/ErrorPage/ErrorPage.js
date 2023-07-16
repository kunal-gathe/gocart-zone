import React from 'react'
import '../ErrorPage/Error.css'

function ErrorPage() {
  return (
    <div className='error-container'>
      <h1 className='error-404'>404</h1>
      <p className='p-not'>Page Not Found!</p>
    </div>
  )
}

export default ErrorPage
