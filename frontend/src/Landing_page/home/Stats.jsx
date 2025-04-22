import React from 'react'

const Stats = () => {
  return (
    <div className='container'>
        <div className="row p-5">
            <div className="col-md-5">
                <h2>Trust with confidence</h2>
                <h4 className='pt-5'>Customer-first always</h4>
                <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                <h4 className='pt-3'>No spam or gimmicks</h4>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>
                <h4 className='pt-3'>The Zerodha universe</h4>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h4 className='pt-3'>Do better with money</h4>
                <p className='text-muted'>With initiatives like <a href=""  className='text-decoration-none'>Nudge</a> and <a href="" className='text-decoration-none'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-1"></div>   
            <div className="col-md-6 ">
                <img className='ecosystem w-100' src="./src/assets/images/ecosystem.png" alt="" />
                <div className='  d-flex justify-content-end gap-5'>
                    <a href="" className='text-decoration-none'> <span className='mx-2'>Explore our products</span> <i className="fa-solid fa-arrow-right-long"></i></a>
                    <a href="" className='text-decoration-none'><span className='mx-2'>Try Kite demo</span> <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div> 
        </div>
        <div className="row ">
            <img className=' pressLogo col-8' src="./src/assets/images/pressLogos.png" alt="" />

        </div>
        
    </div>
  )
}

export default Stats