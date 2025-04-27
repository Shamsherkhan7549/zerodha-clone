/** @format */

import React from "react";

const Pricing = () => {
  return (
    <div className='container'>
      <div className='row p-5 my-5'>
        <div className='col-md-5'>
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href='' className='text-decoration-none'>
            <span className='mx-2'>See pricing </span>{" "}
            <i className='fa-solid fa-arrow-right-long'></i>
          </a>
        </div>
        <div className='col-md-7 d-flex flex-wrap flex-sm-nowrap'>
          <div className=' mutual-pricing d-flex align-items-end justify-content-start'>
            <img
              className='w-50'
              src='/images/pricing0.svg'
              alt=''
            />
            <p className='zero w-50 text-muted'>
             
              Free account <br />
              opening
            </p>
          </div>

          <div className='mutual-pricing d-flex align-items-end justify-content-start'>
            <img
              className='w-50 '
              src='/images/pricing0.svg'
              alt=''
            />

            <p className='zero w-50 text-muted'>
             
              Free equity delivery <br />
              and direct mutual funds
            </p>
          </div>

          <div className=' mutual-pricing d-flex align-items-end justify-content-start'>
            <img
              className='w-50'
              src='/images/other-trades.svg'
              alt=''
            />
            <p className='zero w-50 text-muted'>
             
              Intraday and <br />
              F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
