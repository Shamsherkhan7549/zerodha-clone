
import React from "react";

const Hero = () => {
  let url = import.meta.env.VITE_DASHBOARD_URL;
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className="col-2"></div>
        <div className="col-8 py-5">
        <img src='/images/homeHero.png' alt='hero-img' className="w-100 py-5" />
        <h1>Invest in everything</h1>
        <p className="py-3 text-muted">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <div >
            <button type="button" className="btn btn-primary btn-lg rounded"> <a className="text-decoration-none text-white" href={url}>Sign up for free</a></button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
