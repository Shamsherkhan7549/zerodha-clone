import React from 'react'

const OpenAccount = () => {
  let url = import.meta.env.VITE_DASHBOARD_URL;
  return (
    <div className='container'>
      <div className="row py-5 my-5">
       <div className="col text-center my-5 ">
       <h2>Open a Zerodha account </h2>
        <p className="text-muted py-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <div >
            <button type="button" className="btn btn-primary btn-lg rounded"><a className="text-decoration-none text-white" href={url}>Sign up for free</a></button>
        </div>
       </div>
      </div>
      
    </div>
  )
}

export default OpenAccount