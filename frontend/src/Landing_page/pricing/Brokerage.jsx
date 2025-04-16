import React from 'react'

const Brokerage = () => {
  return (
    <div className='container '>
        <div className="row text-center">
            <div className="col-md-4 col-12  p-3">
                <img className='w-100' src="../src/assets/images/pricingEquity.svg" alt="" />
                <h3>Free equity delivery</h3>
                <p className='text-muted pt-2'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-md-4 col-12  p-3">
            <img className='w-100' src="../src/assets/images/other-trades.svg" alt="" />
                <h3>Intraday and F&O trades</h3>
                <p className='text-muted pt-2'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-md-4 col-12  p-3">
            <img className='w-100' src="../src/assets/images/pricingMF.svg" alt="" />
            <h3>Free direct MF</h3>
            <p className='text-muted pt-2'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
  )
}

export default Brokerage