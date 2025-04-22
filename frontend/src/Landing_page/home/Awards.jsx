/** @format */

import React from "react";

const Awards = () => {
  return (
    <div className='container '>
      <div className='row py-5 px-5'>
        <div className='col-lg-6'>
          <img
            className='w-100 h-75'
            src='./src/assets/images/largestBroker.svg'
            alt=''
          />
        </div>
        <div className='col-lg-6  p-5'>
            <div className="w-100 h-100">
            <h2>Largest stock broker in India</h2>
          <p className='py-2'>
            2+ million Zerodha clients contribute to over 15% all retail order
            volumes in India daily by tradinng and investing in:
          </p>

          <div className='row '>
            <div className='col-md-6 col-md-10'>
              <ul>
                <li>Futures and Optioins</li>
                <li className='py-3'>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className='col-md-6 col-md-10'>
              <ul>
                <li>Stocks & IPOs</li>
                <li className='py-3'>Direct mutual funds</li>
                <li>Bonds and Gov. Securities</li>
              </ul>
            </div>

            <img
              className='mt-3 col-12'
              src='../src/assets/images/pressLogos.png'
              alt=''
            />
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
