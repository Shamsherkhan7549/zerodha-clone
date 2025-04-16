/** @format */

import React from "react";
import UniverseCompany from "./UniverseCompany";

const Universe = () => {
  return (
    <div className='contaner py-5'>
      <div className='row py-5'>
        <div className='col-12  text-center'>
          <h5>
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </h5>
          <h1 className='pt-5 pb-3'>The Zerodha Universe</h1>
          <p className='text-muted'>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      <div className="row p-5">
          <UniverseCompany
            image={"../src/assets/images/zerodhaFundhouse.png"}
            content={
              "Our asset management venture that is  creating simple and transparent index funds to help you save for your goals."
            }
          />

          <UniverseCompany
            image={"../src/assets/images/sensibullLogo.svg"}
            content={
              "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
            }
          />

          <UniverseCompany
            image={"../src/assets/images/tijori.svg"}
            content={
              "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
            }
          />

          <UniverseCompany
            image={"../src/assets/images/streakLogo.png"}
            content={
              "Systematic trading platform that allows you to create and backtest  strategies without coding."
            }
          />

          <UniverseCompany
            image={"../src/assets/images/smallcaseLogo.png"}
            content={
              "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
            }
          />

          <UniverseCompany
            image={"../src/assets/images/dittoLogo.png"}
            content={
              "Personalized advice on life and health insurance. No spam and no mis-selling."
            }
          />
        </div>

        <div className="text-center">
            <button type="button" className="btn btn-primary btn-lg rounded">Sign up for free</button>
        </div>

    </div>
  );
};

export default Universe;
