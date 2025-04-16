import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import BrokerageCurrency from './BrokerageCurrency'
import Calculate from './Calculate'
import Charges from './Charges'

const PricingPage = () => {
  return (
    <>
      <Hero/>
      <Brokerage/>
      <BrokerageCurrency/>
      <Calculate/>
      <Charges/>
    </>
  )
}

export default PricingPage