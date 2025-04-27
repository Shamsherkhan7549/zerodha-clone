import React from 'react'


const Navbar = () => {
  let url = import.meta.env.VITE_DASHBOARD_URL;
  return (
    
    <nav className="navbar navbar-expand-md bg-white  shadow-sm sticky-top px-md-5  py-md-3">
    <div className="container-fluid mx-md-5 ">

     <a className="navbar-brand " href="/">
      <img className='logo'  src="/images/logo.svg" alt="" />
     </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className='me-auto'></ul>

        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item" >
            <a className="nav-link text-muted" aria-current="page" href={url}>Dashboard</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link text-muted" href="/about">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-muted" href='products'>Products</a>
          </li>

          <li className="nav-item mx-3">
            <a className="nav-link text-muted" href='pricing'>Pricing</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-muted" href='support'>Support</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars text-muted"></i>
            </a>

              <ul className="dropdown-menu ">
              <li><a className="dropdown-item text-black-50" href="#">
                <img src="../src/assets/images/kite-logo.svg" alt="" />  <br />
                Kite <br />Trading plateform
                </a></li>
              <li><a className="dropdown-item text-black-50" href="#">
              <img src="../src/assets/images/console.svg" alt="" />  <br />
                Consol <br />Backoffice</a>
                </li>
              <li><a className="dropdown-item text-black-50" href="#">
              <img src="../src/assets/images/kite-connect.svg" alt="" />  <br />
               Kite Connect <br />Trading APIs
                </a>
              </li>
              <li><a className="dropdown-item text-black-50" href="#">
               <img src="../src/assets/images/coin.svg" alt="" />  <br />
                
                Coins <br />Mutualfunds</a></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar