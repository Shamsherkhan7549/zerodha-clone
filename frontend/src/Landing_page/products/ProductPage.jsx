import React from 'react'
import { Hero } from './Hero'
import ProductSection from './ProductSection'
import Universe from './Universe'

const ProductPage = () => {
  let url = import.meta.env.VITE_DASHBOARD_URL;
  return (
    <>
      <Hero/>
      <ProductSection
        image={"../src/assets/images/products-kite.png"}
        title={"Kite"}
        content={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
        link={"Try Demo"}
        link2={"Learn More"}
      />

      <ProductSection
        flexDir={"flex-row-sm-reverse"}
        image={"../src/assets/images/console.png"}
        title={"Console"}
        content={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
        link={"Learn more "}
      />

<ProductSection 
        image={"../src/assets/images/coin.png"}
        title={"Coin"}
        content={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
        link={"Coin"}

      />

<ProductSection
        flexDir={"flex-row-sm-reverse"}
        image={"../src/assets/images/kiteconnect.png"}
        title={"Kite Connect API"}
        content={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
        link={"Kite Connect"}
      />

<ProductSection
        image={"../src/assets/images/varsity.png"}
        title={"Varsity mobile"}
        content={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
      />
      <Universe/>
    </>
  )
}

export default ProductPage