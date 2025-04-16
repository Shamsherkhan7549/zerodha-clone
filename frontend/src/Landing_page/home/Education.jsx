import React from 'react'

const Education = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-5">
          <img className='w-100' src="../src/assets/images/education.svg" alt="" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 pt-5 pt-md-0">
          <h2>Free and open market education</h2>
          <p className='py-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='' className='text-decoration-none'>
            <span className='mx-1'>Varsity </span>
            <i className='fa-solid fa-arrow-right-long'></i>
          </a>
          <p className='py-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='' className='text-decoration-none'>
            <span className='mx-1'>TradingQ&A  </span>
            <i className='fa-solid fa-arrow-right-long'></i>
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Education