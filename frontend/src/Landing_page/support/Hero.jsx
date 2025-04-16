/** @format */

import React from "react";

const Hero = () => {
  return (
    <div className='main'>
      <div className=' bg-primary px-5'>
        <div className='py-5 px-5 w-100 d-flex justify-content-between flex-sm-row flex-column'>
          <h5 className='text-white text-start'>Support Portal</h5>
          <h6 className='text-end'>
            <a href='' className='text-white'>
              Track tickets
            </a>
          </h6>
        </div>

        <div className='child d-flex flex-md-row flex-column'>
          <div className='py-2 px-5 w-nd-50 w-100'>
            <h4 className=' text-white text-start pb-2'>
              Search for an answer or browse help topics to create a ticket
            </h4>
            <div className='w-100 bg-white form-control d-flex align-items-center justify-space-between'>
              <input className="w-75 h-100 w-75 " type='text ' />
              <i className='fa-solid fa-magnifying-glass text-muted text-end h-100 w-25 '></i>
            </div>

            <p className='pb-5 pt-2 d-flex flex-wrap gap-3'>
              <a
                href=''
                className='py-2 text-white text-decoration-none border-bottom fs-6 fw-normal lh-2 mx-2 '>
                Track account opening
              </a>
              <a
                href=''
                className='py-2 text-white text-decoration-none border-bottom fs-6 fw-normal lh-2 mx-2 '>
                {" "}
                Track segment activation
              </a>{" "}
              <a
                href=''
                className='py-2 text-white text-decoration-none border-bottom fs-6 fw-normal lh-2 mx-2 '>
                Intraday margins
              </a>{" "}
              <a
                href=''
                className='py-2 text-white text-decoration-none border-bottom fs-6 fw-normal lh-2 mx-2 '>
                Kite user manual
              </a>
            </p>
          </div>

          <div className='w-md-50 w-100 pb-5 pb-md-0 text-white'>
            <h5>Featured</h5>
            <ol>
              <li className='py-3'>
                <a
                  href=''
                  className='py-2 text-white text-decoration-none border-bottom fs-6 fw-normal lh-2'>
                  Surveillance measure on scrips - February 2025
                </a>
              </li>
              <li>
                <a
                  href=''
                  className='py-2 text-white text-decoration-none border-bottom fs-6 fw-normal lh-2'>
                  Current Takeovers and Delisting - February 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
