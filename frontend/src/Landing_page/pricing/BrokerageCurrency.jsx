/** @format */

import React from "react";

const BrokerageCurrency
 = () => {
  return (
    <div className='container'>
      <div className='row text-center '>
        <table className='table table-striped'>
          <thead>
            <tr className='fs-4 border-bottom'>
              <th className=' text-primary fw-medium py-4' scope='col'>
                Equity
              </th>
              <th className=' text-primary fw-medium py-4' scope='col'>
                Currency
              </th>
              <th className=' text-primary fw-medium py-4' scope='col'>
                Commodity
              </th>
            </tr>

            <tr>
              <th className='text-muted py-4 px-3' scope='col'></th>
              <th className='text-muted py-4 px-3' scope='col'>
                Equity delivery
              </th>
              <th className='text-muted py-4 px-3' scope='col'>
                Equity intraday
              </th>
              <th className='text-muted py-4 px-3' scope='col'>
                {" "}
                F&O - Futures
              </th>
              <th className='text-muted py-4 px-3' scope='col'>
                {" "}
                F&O - Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-muted py-4 px-3" scope='row'>Brokerage</td>
              <td className="text-muted py-4 px-3">Zero Brokerage</td>
              <td className="text-muted py-4 px-3"> 0.03% or Rs. 20/executed order whichever is lower</td>
              <td className="text-muted py-4 px-3">0.03% or Rs. 20/executed order whichever is lower</td>
              <td className="text-muted py-4 px-3">Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td className="text-muted py-4 px-3" scope='row'>STT/CTT</td>
              <td className="text-muted py-4 px-3">0.1% on buy & sell</td>
              <td className="text-muted py-4 px-3">0.025% on the sell side</td>
              <td className="text-muted py-4 px-3"> 0.02% on the sell side</td>
              <td className="text-muted py-4 px-3">
                <li>
                  0.125% of the intrinsic value on options that are bought and
                  exercised
                </li>
                <li>0.1% on sell side (on premium)</li>
              </td>
            </tr>
            <tr>
              <td className="text-muted py-4 px-3" scope='row'>Transaction charges</td>
              <td className="text-muted py-4 px-3">
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td className="text-muted py-4 px-3">
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td className="text-muted py-4 px-3">
                NSE: 0.03503% (on premium) <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>

            <tr>
              <td className="text-muted py-4 px-3" scope='row'>
                GST
              </td>

              <td className="text-muted py-4 px-3">18% on (brokerage + SEBI charges + transaction charges)</td>
              <td className='text-muted py-4 px-3'>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className='text-muted py-4 px-3'>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className='text-muted py-4 px-3'>
                18% on (brokerage + SEBI charges + transaction charges){" "}
              </td>
            </tr>
            <tr>
              <td  className='text-muted py-4 px-3' scope='row'>SEBI charges</td>
              <td className='text-muted py-4 px-3'> ₹10 / crore</td>
              <td className='text-muted py-4 px-3'>₹10 / crore</td>
              <td className='text-muted py-4 px-3'>₹10 / crore</td>
              <td className='text-muted py-4 px-3'> ₹10 / crore</td>
            </tr>

            <tr>
              <td  className='text-muted py-4 px-3' scope='row'>Stamp charges</td>
              <td className='text-muted py-4 px-3'>
                0.015% or ₹1500 / crore on buy side
              </td>
              <td className='text-muted py-4 px-3'>0.003% or ₹300 / crore on buy side</td>
              <td className='text-muted py-4 px-3'>0.002% or ₹200 / crore on buy side</td>
              <td className='text-muted py-4 px-3'>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrokerageCurrency;
