/** @format */

import React from "react";

const Hero = () => {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className="col-2"></div>
        <div className="col-8 py-5">
        <img src='../src/assets/images/homeHero.png' alt='' className="w-100 py-5" />
        <h1>Invest in everything</h1>
        <p className="py-3 text-muted">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <div >
            <button type="button" className="btn btn-primary btn-lg rounded">Sign up for free</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
